import sendgrid from 'sendgrid';
import keys     from '../config/keys';

const helper = sendgrid.mail;

class Mailer extends helper.Mail {

    // THE DATA COMES FROM THE 'SURVEY' ROUTE, WITH THE SURVEY OBJECT SEND AS THE DATA
    // SURVEY OBJECT ALSO GETS PASSED TO THE MONGOOSE MODEL
    constructor({ subject, recipients }, content)
    {
        super();

        this.sgApi      = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('no-reply@accountbook.com');
        this.body       = new helper.Content('text/html', content);   
        this.subject    = subject;
        this.recipients = this.formatAddresses(recipients);

        // ADD THE BODY TO THE SENDGRID CONTENT
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses = (recipients) => {
        // IN RECIPIENTS OBJECT (FROM THE SURVEY ROUTER) THERE IS AN 'EMAIL' PROPERTY
        return recipients.map(recipient => {
            return new helper.Email(recipient.email);
        });
    };

    addClickTracking = () => {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking    = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    };

    addRecipients = () => {
        const personalize = new helper.Personalization();

        // ADD EVERY RECIPIENT TO THE PERSONALIZE OBJECT. THIS IS NEEDED FOR SENDGRID
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });

        this.addPersonalization(personalize);
    };

    // SEND THE EMAIL
    send = async () => {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = await this.sgApi.API(request);

        return response;
    };
};

module.exports = Mailer;