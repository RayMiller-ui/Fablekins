//--------------------------------------------------------basic version

(() => {

  const overworld = new Overworld({
    element: document.querySelector(".game-container"),
  });
  overworld.init();
  

})();

// This is an immediately invoked function exression
// Wrapping this thing into paranthesis turns this function into expression.
// And then () executes the expression instently.

//--------------------------------------------------------not necessary, [OLD CODE]

// import Overworld from "./Overworld.js";

// const overworld = new Overworld({
//   element: document.querySelector(".game-container")
// });
// overworld.init();