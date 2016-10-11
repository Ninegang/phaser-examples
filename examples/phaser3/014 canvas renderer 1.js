
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, xrender: render });

function preload() {

    game.load.image('einstein', 'assets/pics/ra_einstein.png');

}

var image;

function create() {

    image = game.add.image(0, 0, 'einstein');

    console.dir(image);

}

function render () {

}
