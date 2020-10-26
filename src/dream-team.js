const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let dreamTeam = '';
    if (members === null || members === undefined) return false
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            dreamTeam += members[i].trim().charAt(0)
        }
    }
    dreamTeam = dreamTeam.toUpperCase();
    return dreamTeam.split('').sort().join('');
};
