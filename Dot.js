class Dot extends GameObject {
  constructor(config) {
    super({ ...config }); // no Sprite

    this.collected = false;
    this.radius = 4; // dot size
  }

  update(state) {
    const hero = state.map.gameObjects.hero;

    if (hero.x === this.x && hero.y === this.y && !this.collected) {
      this.collected = true;
      state.map.removeDot(this);
      console.log("Kha Liya!!! ");
    }
  }

  draw(ctx, CameraPerson) {
    const drawX =
      this.x + Utilities.withGrid(10.5) - CameraPerson.x + 8;
    const drawY =
      this.y + Utilities.withGrid(6) - CameraPerson.y + 8;

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(drawX, drawY, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
