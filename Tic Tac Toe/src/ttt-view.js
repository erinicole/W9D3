class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
   
    this.$el.click( (e) => { 
      let $li = $(e.target);

      this.makeMove($li);
    });
  }

  makeMove($square) {
    let $li = $square;
    this.game.playMove($square.data('pos'));
    let currentPlayer = this.game.currentPlayer;
    $li.text(currentPlayer);

    if (this.game.isOver()) {
      setTimeout(function () {
        alert('<You won!>');
      }, 0);
    }
  }

  setupBoard() {
    let $ul = $("<ul>");
    for (let i = 0; i < 9; i++){
      let x = Math.floor(i / 3);
      let y = i % 3;
      let $li = $("<li>");
      $li.data( { pos: [x, y] } );
      $ul.append($li);

    }
    this.$el.append($ul);

  }
}

module.exports = View;
