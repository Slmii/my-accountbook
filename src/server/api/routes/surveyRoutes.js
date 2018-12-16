// const keys           = require('../../api/config/keys');
const mongoose       = require('mongoose');
const requireCredits = require('../../../middlewares/requireCredits');
const requireLogin   = require('../../../middlewares/requireLogin');
const Mailer         = require('../services/Mailer');
// const sgMail         = require('@sendgrid/mail');
const Survey         = mongoose.model('surveys');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');


const SurveyRoutes = app => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        
        const { title, body, subject, recipients } = req.body;

        const survey = await new Survey({
            customer: req.user.name,
            title,
            body,
            subject,
            // THE RECIPIENTS IN THE SURVEY MODEL (MONGOOSE) ACCEPTS AN ARRAY OF EMAILS
            recipients: recipients.split(',')
                        .map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        try {
            // SEND THE EMAIL
            const mailer = new Mailer(
                survey, 
                surveyTemplate(survey)
            );

            await mailer.send();
            // SAVING TO THE MODEL OF MONGOOSE IS ALSO A PROMISE
            await survey.save();
            // DECREMENT 1 CREDIT FROM THE USER
            req.user.credits -= 1;
            // SAVE THE NEW INFO OF THE USER IN THE MODEL BECAUSE WE DECREMENTED 1 CREDIT. ALL THE DATA IS ALREADY INSIDE THE 'REQ.USER' OBJECT
            const user = await req.user.save();

            recipients.split(',').forEach(email => {
                console.log(`Email sent to ${email}!`);
            });

            // SEND BACK THE UPDATED USER MODEL. THIS WAS THE HEADER WILL AUTOMATICALLY UPDATE
            res.send(user);
        } 
        catch(error) {
            //Extract error msg
            const { message, code, response } = error;

            console.log(message);
            console.log('');
            console.log(code);
            console.log('');
            console.log(response);

            //Extract response msg
            const { headers, body } = response;

            console.log('');
            console.log(headers);
            console.log('');
            console.log(body.errors);

            res.status(response.statusCode).send({ 
                message,
                code,
                response,
                headers,
                body: body.errors
            });
        }
            
        // sgMail.setApiKey(keys.sendGridKey);
        // const msg = {
        //     to: recipients.split(','),
        //     from: 'no-reply@accountbook.com',
        //     subject: subject,
        //     content: [
        //         {
        //             type: 'text/plain',
        //             value: striptags(survey.body),
        //         },
        //         {
        //             type: ' text/html',
        //             value: surveyTemplate(survey)
        //         }
        //     ]
        // };

        // try {
        //     const response = await sgMail.sendMultiple(msg);
            
        //     msg.to.forEach(email => {
        //         console.log(`Email send to ${email}`);
        //     });
            
        //     return response;
        // }
        // catch(error) {
        //     //Extract error msg
        //     const { message, code, response } = error;

        //     console.log(message);
        //     console.log('');
        //     console.log(code);
        //     console.log('');
        //     console.log(response);

        //     //Extract response msg
        //     const { headers, body } = response;

        //     console.log('');
        //     console.log(headers);
        //     console.log('');
        //     console.log(body.errors);
        // };
    });
};

export default SurveyRoutes;