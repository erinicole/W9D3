const View = require("./ttt-view"); // require appropriate file
const Game = require("./game");    // require appropriate file

  $(() => {
    // Your code here
    let game = new Game();
    let $ttt = $(".ttt"); 
    let view1 = new View(game, $ttt);
    
  });

  
