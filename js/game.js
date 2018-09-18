
var game = new Phaser.Game(640, 480, Phaser.Auto, '');

game.state.add('play', playState)


game.state.start('play');


console.log("game too")