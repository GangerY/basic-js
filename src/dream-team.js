const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members) {
    return false;
  }

  let abbreviationArr = [];

  for(let i = 0; i < members.length; i++) {
    if(typeof(members[i]) === "string") {
      let j = 0;

      for(; j < members[i].length && members[i][j] === ' '; j++);
      
      abbreviationArr.push((members[i].toUpperCase().split(""))[j]);
    }
  }
  return abbreviationArr.sort().join("");
};
