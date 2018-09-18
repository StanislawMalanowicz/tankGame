

console.log("play dziaa")

 var playState = {

     preload: function(){
        game.load.image('tank', 'assets/tank.png')
        game.load.image('missile', 'assets/glass.png')
  
    },

    create: function(){
        player = game.add.sprite(100, 100, 'tank')

        cursors = game.input.keyboard.createCursorKeys();
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        game.stage.backgroundColor = '#313131';
        player.anchor.setTo(0.5, 0.5);

    },
   
    update: function(){
        if(this.spaceKey.isDown){
            console.log('shoot')
        }
        if(cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown){
            player.x -=5;
            player.angle = -90;
            console.log(player.angle)

        }
        if(cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown){
            player.x +=5;
            // console.log(player.x)
            player.angle = 90;
        }
        if(cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown){
            player.y +=5;
            player.angle = 180;
        }
        if(cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown){
            player.y -=5;
            player.angle = 0;
        }
 }

}
      
      