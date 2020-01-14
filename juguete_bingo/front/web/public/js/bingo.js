/*****************************************************************************
 * BINGO GAME REFACTOR
 * 
 * Description:
 * - Randomly draw, store, and display bingo balls.
 *
 * JS Dependencies:
 * - None. Vanilla JS.
 *
 * DOM Dependencies:
 * - .js-draw     : draw button
 * - .js-reset    : reset button
 * - .js-history  : <ol> drawn balls
 * - .js-last-num : <span> last drawn ball
 *
 * @var {Object} BINGO - Global namespace.
 *
 * @author Scott Currell
 ****************************************************************************/

var BINGO = BINGO || {};

BINGO.ballCount   = 75;
BINGO.ballsArr    = [];

BINGO.domElems = {
    drawButton  : document.getElementById( 'js-draw' ),
    resetButton : document.getElementById( 'js-reset' ),
    drawHistory : document.getElementById( 'js-history' ),
    drawnLast   : document.getElementById( 'js-last-num' )
};

/******************************************************************************
 * CREATE BALLS
 * Populates ballsArr[] with 75 balls ranging from B-1 to O-75.
 *****************************************************************************/
BINGO.createBalls = function() {

    for ( let i = this.ballCount; i >= 1; i--) {

        if ( i >= 1  && i <= 15 ) this.ballsArr.push( 'B-' + i );
        if ( i >= 16 && i <= 30 ) this.ballsArr.push( 'I-' + i );
        if ( i >= 31 && i <= 45 ) this.ballsArr.push( 'N-' + i );
        if ( i >= 46 && i <= 60 ) this.ballsArr.push( 'G-' + i );
        if ( i >= 61 && i <= 75 ) this.ballsArr.push( 'O-' + i );

    }

};

/******************************************************************************
 * INITIALIZER ( IIFE )
 * Kicks things off.
 *****************************************************************************/
(BINGO.init = function() {

    let _this = BINGO;

    _this.ballCount = 75;

    _this.createBalls();

})();

/******************************************************************************
 * POP BALL
 * Receives a randomized ball number and removes it from ballsArr[].
 * @param  {String} ball - randomized ball number from B-1 to O-75
 * @return {Object} this - makes method chaining possible
 *****************************************************************************/
BINGO.popBall = function( ball ) {

    let _ballIndex = this.ballsArr.indexOf( ball );

    if( _ballIndex > -1 ) {
        this.ballsArr.splice( _ballIndex, 1 );
    }

    return this;

};

/******************************************************************************
 * RANDOM BALL
 * Randomly selects and returns a ball from ballsArr[].
 * @return {String} randomized ball number from B-1 to O-75
 *****************************************************************************/
BINGO.randomBall = function() {

    let _ballCount  = this.ballsArr.length;
    let _randomBall = Math.floor( Math.random() * Math.floor( _ballCount ) );

    return this.ballsArr[_randomBall];

};

/******************************************************************************
 * UPDATE LIST
 * Receives a randomized ball number. Creates an 'li' that contains the
 * randomized ball number and appends it to the draw history in the DOM.
 * Also scrolls to the bottom of the list when a new ball is drawn.
 * @param  {String} ball - randomized ball number from B-1 to O-75
 * @return {Object} this - makes method chaining possible
 *****************************************************************************/
BINGO.updateList = function( ball ) {

    let _node     = document.createElement( 'li' );
    let _textnode = document.createTextNode( ball );

    // append ball number to 'li'
    _node.appendChild( _textnode );

    // update the DOM
    this.domElems.drawHistory.appendChild( _node );

    // scroll to the bottom of the list in the DOM
    this.domElems.drawHistory.scrollTop = this.domElems.drawHistory.scrollHeight;

    return this;

};

/******************************************************************************
 * UPDATE LAST DRAWN
 * Receives a randomized ball number and updates the last drawn number in the
 * DOM.
 * @param  {String} ball - randomized ball number from B-1 to O-75
 * @return {Object} this - makes method chaining possible
 *****************************************************************************/
BINGO.updateLastDrawn = function( ball ) {

    this.domElems.drawnLast.innerHTML = ball;

    return this;

};

/******************************************************************************
 * HIGHLIGHT DRAWN BALLS
 * Receives a randomized ball number and highlights the corresponding value
 * in the DOM table.
 * @param  {String} ball - randomized ball number from B-1 to O-75
 * @return {Object} this - makes method chaining possible
 *****************************************************************************/
BINGO.highlightDrawnBall = function( ball ) {

    // last ball drawn
    var _drawnBalls = document.getElementsByClassName( 'last' );

    for ( var i = _drawnBalls.length - 1; i >= 0; i-- ) {

        // remove special highlighting
        _drawnBalls[i].classList.remove( 'last' );

    }

    // highlight the drawn ball in the bingo table
    document.getElementById( ball ).classList.add( 'drawn', 'last' );

    return this;

};

/******************************************************************************
 * RESET GAME
 * Clear all game data, draw history, and ball highlighting.
 * Hide the reset button.
 * Re-enable and set focus on the draw button.
 * Re-initialize the game.
 *****************************************************************************/
BINGO.resetGame = function() {
  
    let _this = BINGO;
    var _td = document.getElementsByTagName( 'td' );

    // reset global vars
    _this.ballsArr = [];
    _this.domElems.drawnLast.innerHTML = 'Click to Draw';
    _this.domElems.drawHistory.innerHTML = '';

    // reset all the CSS stiles for the drawn balls
    [].forEach.call( _td, function( td ) {

        td.classList.remove( 'drawn' );

    });

    // hide the rest button
    _this.domElems.resetButton.classList.add( 'display-none' );

    // re-enable draw button
    _this.domElems.drawButton.disabled = false;
    _this.domElems.drawButton.classList.remove( 'disabled' );

    // set focus on the draw button
    _this.domElems.drawButton.focus();

    _this.init();

}

/******************************************************************************
 * DRAW BALL
 * Do all the things:
 *     - draw a random ball
 *     - pop it from ballsArr[]
 *     - update the DOM (highlighting and text)
 *     - decrement the ball count
 *     - disable draw button
 *     - show reset button
 *****************************************************************************/
BINGO.drawBall = function() {

    let _this = BINGO;
    let _ball = _this.randomBall();

    if( _this.ballCount > 0 ) {

        _this.popBall( _ball )
             .updateList( _ball )
             .highlightDrawnBall( _ball )
             .updateLastDrawn( _ball );

         _this.ballCount--;

        if( _this.ballCount === 0 ) {

            // disable draw button
            _this.domElems.drawButton.disabled = true;
            _this.domElems.drawButton.classList.add( 'disabled' );

            // show the reset button
            _this.domElems.resetButton.classList.remove( 'display-none' );

        };

    }

};

BINGO.domElems.drawButton.addEventListener( 'click', BINGO.drawBall );
BINGO.domElems.resetButton.addEventListener( 'click', BINGO.resetGame );
