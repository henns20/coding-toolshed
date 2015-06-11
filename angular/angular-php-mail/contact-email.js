/**
 * Created by john on 6/10/15.
 */

var mailerApp = angular.module('mailerApp', []);

mailerApp.controller('MailController',function($scope, $http) {

  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};

  // submission message doesn't show when page loads
  $scope.submission = false;

  // Updated code thanks to Yotam
  var param = function(data) {
    var returnString = '';
    for (d in data){
      if (data.hasOwnProperty(d))
        returnString += d + '=' + data[d] + '&';
    }
    // Remove last ampersand and return
    return returnString.slice( 0, returnString.length - 1 );
  };

  $scope.submitForm = function() {
    $http({
      method : 'POST',
      url : 'contact-form.php', // this is the name of the php file you are using
      data : param($scope.formData), // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
    })
      .success(function(data) {
        if (!data.success) {
          console.log('nope');// this is just extra debugger  |jh
          // if not successful, bind errors to error variables
          $scope.errorName = data.errors.name;
          $scope.errorEmail = data.errors.email;
          $scope.errorTextarea = data.errors.message;
          $scope.submissionMessage = data.messageError;
          $scope.submission = true; //shows the error message
        } else {
          console.log('yes it went through');  // this is just extra debugger  |jh
          // if successful, bind success message to message
          $scope.submissionMessage = data.messageSuccess;
          $scope.formData = {}; // form fields are emptied with this line
          $scope.submission = true; //shows the success message
        }
      });
  };
});
