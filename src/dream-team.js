const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0) {
    members = members.filter(item => typeof item === 'string');
    if(members.length > 0) {
      members = members.map( item => item.trim().toUpperCase()).sort();
      let dreamTeam = '';
      for(let char of members){
        dreamTeam += char[0]
      }
      return dreamTeam;
    }
    else {
      return false;
    }
    

  } else {
    return false;
  }
};
