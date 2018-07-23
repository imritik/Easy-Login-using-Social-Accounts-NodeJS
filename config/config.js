module.exports = {
    // Services
    dbConfig: {
        url: '' || 'mongodb://localhost/social_auth'
    },
    // Security
    cookie_secret: process.env.COOKIE_SECRET || 'myCookieSecret',
    socialLoginConfig: {
        googleAuth: {
            'clientID': '<google console client id>',
            'clientSecret': '<google console client secret>',
            'callbackURL': 'http://127.0.0.1:3000/login/google/callback' //make sure to use ip instead of localhost for testing
        },
        fbAuth: {
            'clientID': '<facebook console client id>',
            'clientSecret': '<facebook console client id>',
            'callbackURL': 'http://localhost:3000/login/facebook/callback',
            'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
        },
        linkedInAuth: {
            'clientID': '',
            'clientSecret': '',
            'callbackURL': 'http://127.0.0.1:3000/login/linkedIn/callback',
            'state': true, //state param is used to prevent CSRF attacks, and is required by the LinkedIn API
            'scope': ['r_basicprofile', 'r_emailaddress']
        }
    }
};