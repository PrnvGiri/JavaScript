// Immediately Invoked Function Expressions (IIFE)

//  Syntax

// (function() {
//     code here
//   })();
  

(function chai(){
    // Named IIFE
    console.log(`DB connected`)
})();

//  Without name
((name) => {
    console.log(`Database Two is connected ${name}`)
})("Pranav")

