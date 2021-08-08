let app;
let player;
let keys = {};
let keysDiv;

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
  //   app.stage.interactive = true;
  //   app.stage.on('pointermove', movePlayer);

  //keyboard event handlers
  window.addEventListener('keydown', keysDown);
  window.addEventListener('keyup', keysUp);

  app.ticker.add(gameLoop);

  keysDiv = document.getElementById('keys');
  //   keysDiv = document.querySelector('#keys');
};

// function movePlayer(e) {
//   let pos = e.data.global;
//   player.x = pos.x;
//   player.y = pos.y;
//   //   console.log(e.data.global);
// }

function keysDown(e) {
  console.log(e.keyCode);
  keys[e.keyCode] = true;
}

function keysUp(e) {
  console.log(e.keyCode);
  keys[e.keyCode] = false;
}

function gameLoop() {
  //   keysDiv.innerHTML = JSON.stringify(keys);

  let speed = 5;
  // W
  if (keys['38']) {
    player.y -= speed;
  }

  // S
  if (keys['40']) {
    player.y += speed;
  }

  // A
  if (keys['37']) {
    player.x -= speed;
  }

  // D
  if (keys['39']) {
    player.x += speed;
  }
}
