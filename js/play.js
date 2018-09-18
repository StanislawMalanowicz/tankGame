

console.log("play dziaa")

 var playState = {

     preload: function(){
        game.load.image('tank', 'assets/tank.png')
        game.load.image('missile', 'assets/torpedo.png')
  
    },

    create: function(){
        // game.physics.startSystem(Phaser.Physics.ARCADE);
        var left;
        player = game.add.sprite(100, 100, 'tank')
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.collideWorldBounds = true;

        cursors = game.input.keyboard.createCursorKeys();
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        game.stage.backgroundColor = '#313131';
        player.anchor.setTo(0.5, 0.5);

    },
   
    update: function(){
        if(this.spaceKey.isDown){
            // console.log('shoot')
            fireBullet()
        }
        if(cursors.left.isDown && !cursors.up.isDown && !cursors.down.isDown){
            player.x -=5;
            // player.body.velocity.x = -100;
            player.angle = -90;
            console.log(player.angle)
           

        }
            
    
        if(cursors.right.isDown && !cursors.up.isDown && !cursors.down.isDown){
            player.x +=5;
            // player.body.velocity.x = 100;

            // console.log(player.x)
            player.angle = 90;
        }
        if(cursors.down.isDown && !cursors.right.isDown && !cursors.left.isDown){
            player.y +=5;
            player.angle = 180;
            console.log("dol"+player.angle)
        }
        if(cursors.up.isDown && !cursors.right.isDown && !cursors.left.isDown){
            player.y -=5;
            player.angle = 0;
            
        }
 }

}
      
function fireBullet () {
console.log("jeb z dzidy " + player.x)
    
missile = game.add.sprite(player.x, player.y, 'missile') 
game.physics.enable(missile, Phaser.Physics.ARCADE);
if(player.angle == -90){
    missile.body.velocity.x = -250;
}
else if(player.angle == 90){
    missile.body.velocity.x = 250;
}

else if(player.angle == 0){
    missile.body.velocity.y = -250;
}
else if(player.angle == -180){
    missile.body.velocity.y = 250;
}
}
