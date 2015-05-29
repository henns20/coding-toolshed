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