cordova.define("cordova-plugin-smtp-client.smtpClient", function(require, exports, module) {
/*global cordova, module*/

var smtpClient = {
    sendMail: function (mailSettings, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "SMTPClient", "cordovaSendMail", [ JSON.stringify(mailSettings) ]);
    },
    isLoaded: function() {
        console.info('SMTP Client is loaded !');
        return true;
    }
};

module.exports = smtpClient;

});
