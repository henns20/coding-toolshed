/**
 * Created by john on 5/29/15.
 * Every Some
 * Requirements: Return a function that takes a list of valid users,
 * and returns a function that returns true if all of the supplied users
 * exist in the original list of users
 */

//this was my first declaration
//module.exports = function isValidUsers(validusers) {
//   return function()
//}

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedU) {
      return goodUsers.some(function(goodU) {
       return goodU.id === submittedU.id
      });
    })
  }
}

module.exports = checkUsersValid;


/** see below for my refactor for my rational **/

//var testAllValid = testAllValidGoodUsersSet(goodUsers);
//
//function testAllValidSetGoodUsers(gooUsers) {
//   return function(submittedUsers) {
//     return submittedUsers.every(function(sUser) { // every tests whether every item in
//     // the array meets the criteria in the cb - if it doesn't then it returns
//       // false
//       return goodUsers.some(function(gUser) {
//         gUser.id === sUser.id;
//       })
//     });
//   };
//}




/* testAllValid script
* Description: write a program that takes a set of valid users as input; and
* returns a
 * function that takes a submitted users and checks that every on of the
 * submitted users is a valid user. If it is not then it will ..?
 */