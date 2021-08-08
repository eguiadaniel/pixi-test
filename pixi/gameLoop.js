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

export default gameLoop;
