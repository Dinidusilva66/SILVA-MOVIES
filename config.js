const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'l0RmULaK#xxvpZc2q_msr3ON26RPHfYKw643auax5OPEsG30Bi0o',
GITHUB_AUTH_TOKEN: 'put token', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'put your github user name',

};
