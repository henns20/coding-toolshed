//
//
//
// function Fizzbuzz () {
//   for ( var i = 0; i <= 100; i++ ) {
//     if ( (i % 3)  === 0 && (i % 5) === 0 ) {
//       console.log("Fizzbuzz");
//     } else if ( (i % 3) === 0 ) {
//       console.log('Fizz');
//     } else if ( (i % 5) === 0 ) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
//
//
// // original way I did for loop
// 1. spelled out 'for'
// 2. ()
//
// // 4 loop with only the recommended 8 his commands
//  1. foop skoosh prex prank
//  2. ice equeft 0 sunk  skoosh
//  3. ice lessqual 100 sunk skoosh
//  4. ice pluqual  1 derek  kirblock
//
// // another  Fizzbuzz  exercise
// var fizzBuzz = function() {
//   for ( var i = 0; i < 101; i += 1 ) {
//     switch(true){
//       case ( !(i % 3) && !(i % 5) ):
//         console.log('FizzBuzz');
//         break;
//       case ( !(i % 3) ):
//         console.log('Fizz');
//         break;
//       case ( !(i % 5) ):
//         console.log('Buzz');
//         break;
//        default:
//        console.log(i);
//     }
//   }
// }
//
// function repeat(fn, num) {
//   // recursion function pattern starts with a conditional
//   if (num <= 0) return;
//   fn();
//   return repeat(fn, --num);
// }
//
// $(function() {
//   $(document).ready(function () {
//     // 1.grab the input element add a key press
//     $('input').keypress(function() {
//       // 2.checks to see if there is a timeout id set
//       if(this.timeoutID) {
//         // 3.if there is clears it so it doesn't do multiple calls
//         window.clearTimeout(this.timeoutID);
//       }
//       // 4.sets a new 1
//       this.timeoutID = window.setTimeout(function() {
//         $ajax({
//           // do some stuff here
//         })
//       }, 200);
//     });
//   });
// })(jQuery);


// fizzbuzz script with or using the output text variable append method
// requirements: script prints out numbers between 1 and 100
// on numbers visible by 3 it prints out the word fizz
// on numbers divisible by 5 it prints out buzz
// on numbers divisible by 3 and a 5 it prints out fizzbuzz
// prints out is another way to say outputs standard output

function fizzbuzz() {
  var output, i;
  for ( i = 0; i <= 101; i += 1 ) {
    output = '';
    if ( !(i % 3) )  output += 'fizz';
    if ( !(i % 5) )  output += 'buzz';
    console.log(output || i);
  }
}

fizzbuzz();
