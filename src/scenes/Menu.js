class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

        // load background image
        this.load.image('starfield', './assets/starfield.png');

        // load menu images
        this.load.image('rocketShip', './assets/cartoon_rocket.png');
        this.load.image('planet', './assets/cartoon_planet.png');
    }
    
    create() {
        // add background image
        this.add.tileSprite(0, 0, game.config.wdth, game.config.height, 'starfield').setOrigin(0, 0);

        // add rocket Ship
        this.add.tileSprite(game.config.width / 1.25, borderUISize * 2.5, 220, 124, 'rocketShip').setOrigin(0.5, 0.5);
        // add planet 
        this.add.tileSprite(borderUISize * 3.2, borderUISize * 3.5, 220, 208, 'planet').setOrigin(0.5, 0.5);

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Oswaldo',
            fontSize: '34px',
            backgroundColor: 'red',
            color: 'blue',
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        }

        // show menu text
        this.add.text(game.config.width / 2, game.config.height / 4 - borderUISize - borderPadding, 
            'ROCKET PATROL', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 10, game.config.height / 1.38, 
            'Keys :', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 3, game.config.height / 1.2, 
            'Use <--> arrows to move', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 4.3, game.config.height / 1.1, 
            'Press (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00ff00';
        menuConfig.color = '#FF6700';
        this.add.text(game.config.width / 2, game.config.height / 2.1, 
            'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2.5, 'To Start:', menuConfig).setOrigin(0.5);
        
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }

        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer:45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
    }
}