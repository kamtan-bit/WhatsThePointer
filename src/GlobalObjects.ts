export class BackButton extends Phaser.GameObjects.Container {
  private location: string;

  constructor(scene: Phaser.Scene, location: string) {
    super(scene);

    this.location = location;
    this.button();
  }

  button() {
    let button = this.scene.add.text(25, 550, "<- back");

    //make button clickable
    button.setInteractive();

    //button styles
    let buttonStyle = {
      font: "bold 25px Arial",
      fill: "#03f0fc",
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };
    let selectedButtonStyle = {
      font: "bold 25px Arial",
      fill: "#5271FF",
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };

    button.setStyle(buttonStyle);

    button.on("pointerover", () => {
      button.setStyle(selectedButtonStyle);
    });

    button.on("pointerdown", () => {
      this.scene.scene.start(this.location);
    });

    button.on("pointerout", () => {
      button.setStyle(buttonStyle);
    });
  }
}

import scoreTracker from "../src/ScoreTracker";
export class ScoreDisplay extends Phaser.GameObjects.Container {
  private score!: Phaser.GameObjects.Text;
  private xPos!: number;
  private yPos!: number;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene);

    this.xPos = x
    this.yPos = y
    this.show();
  }

  show() {
    this.score = this.scene.add.text(
      this.xPos,
      this.yPos,
      `Score: ${scoreTracker.getScore()}`
    );

    //button styles
    let scoreStyle = {
      font: "32px Arial",
      fill: "#03f0fc",
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };

    this.score.setStyle(scoreStyle);
  }

  update() {
    this.score.setText(`Score: ${scoreTracker.getScore()}`);
  }
}
