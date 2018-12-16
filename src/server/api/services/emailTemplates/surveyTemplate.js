import keys from '../../config/keys';

// THE BODY KEY OF THE SURVEY OBJECT GETS PASSED AS THE ARGUMENT (MONGOOSE MODEL)
module.exports = survey => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>I'd like your input!</h3>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/feedback">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/feedback">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};