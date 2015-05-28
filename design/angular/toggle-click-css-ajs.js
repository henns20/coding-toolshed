/** Toggle Class in angular
 * Scenario: Change background color as user in browser with a click
**/

/**
 * STEP 1: Understand Bird's Eye
 * Uses model to store a value. ie. 
 * a) ng-init="white = true" // now the scope has white as true
 * b) ng-class - class name can be bound to the boolean ie) ng-class = "{'isWhite': !white}" // containe div for example
 * c) a & ng-click which alters the value of white value in the scope 
 *    - ng-click="white = !white"
**/ 

/**
 * the HTML 
**/

/**
 * THE TOGGLE LINK and the INIT
 * <li class="">
 *   <a href="#/" class="parent-nav" ng-init="white = true" ng-click="white = !white">White Header</a>
 * </li>
 **/

/**
 * DIV OR CLASS TO BE TOGGLED
 * <div class="navbar-wrapper" ng-class="{'iswhite': !white}" ng-controller="NavToggleCTRL">
 *   <div class="container" ng-class="{'iswhite': !white}">
**/ 

/**
 * THE CSS
 * .navbar-wrapper.iswhite {background:#FFFFFF; background-image:none; box-shadow: 0 0 5px #ccc;}
 * .navbar-wrapper .container.iswhite {background:#FFFFFF; background-image:none;}
**/

