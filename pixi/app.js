let app;
let player;

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa
  });

  document.body.appendChild(app.view);

  // player object
  player = new PIXI.Sprite.from('../images/player.png');
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  app.stage.addChild(player);

  //mouse interactions
  app.stage.interactive = true;
  app.stage.on('pointermove', movePlayer);
};

function movePlayer(e) {
  let pos = e.data.global;
  player.x = pos.x;
  player.y = pos.y;
  //   console.log(e.data.global);
}
