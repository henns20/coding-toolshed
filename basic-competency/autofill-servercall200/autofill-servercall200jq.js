/**
 * Created by john on 5/31/15.
 * Autofill Input Field Server Call
 * Task: You have Textbox and you want to make a call to the server to get some data
 * after the user has been typing and stops typing for 200 milliseconds.
 *
 * From a blogpost: The (JavaScript) Question I Bombed In An Interview With a Y
 * Combinator Startup
 * http://nathanleclaire.com/blog/2013/11/16/the-javascript-question-i-bombed-in-an-interview-with-a-y-combinator-startup/
 */

/**
 * Takeaways after the fact - top 3 takeaways
 * 1. setTimeout - returns a numerical timeoutID - which you can use with clearTimeout
 * (timeoutID)
 * 2. typical pattern using this is var timeoutID = window.setTimeout();
 */

/**
 * jQuery the first solution for legacy and interview purposes
 * This is also the code that is given in the article.
 *
 * This is setting the ajax call up and does not talk about the how and what data
 * to get. So that would need to be done.
 */

/**
 * Angularjs
 * parts
 * 1. you need an input field
 * 2. in jquery you grab it and attach something to it ie. $('input').keypress(...)
 * 3. angular - you declare it on the element with ngKeypress
 * 4. timeout service wrapper function vs setTimeout
 */


/* <input ng-keypress="autoFill200" />
* angular script you would have the following
* 'scope'.autoFIll200 = function() { if()... http...}
 */

//Mimic something similar in plnkr.co


/**
 * why is this better would be the first question
 * well the first answer I would say is that it is more about what Igor said
 * in the difference between polymer and angular - one is making components
 * and the other is making applications well.
 * - exstrapolate that to angular ans jquery.
 */






// set up a basic jquery script module encapsulation pattern



$(function() {
  $(document).ready(function () {
    //1. grab the input element add a keypress()
    $('input').keypress(function() {
      // 2. checks to see if there is a timeout id set
      if(this.timeoutID) {
        //3. if there is clears it so it doesn't do multiple calls
        window.clearTimeout(this.timeoutID);
      }
      //4. sets a new one
      this.timeoutID = window.setTimeout(function() {
        $ajax({
          // do some stuff here
        });
      }, 200);
    });
  });
})(jQuery);

