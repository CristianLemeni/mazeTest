const playerData = {
    scoreValue: 0
}



const maze1 = {

    preload() {
        this.input.setDefaultCursor('url(assets/player.cur), pointer');

        this.load.image("square", "/assets/player.png")

        this.timeAlive = 0 //in ms

        this.isOnMaze = true
        this.isOutOfGate = false
        this.gameIsRunning = false
    },

    create() {

        const graphics = this.add.graphics();

        const polygon1 = new Phaser.Geom.Polygon([
            889, 928,
            887, 905,
            887, 887,
            850, 886,
            815, 883,
            797, 882,
            799, 907,
            758, 908,
            758, 872,
            756, 837,
            724, 834,
            704, 834,
            706, 850,
            679, 850,
            682, 807,
            680, 768,
            676, 742,
            675, 686,
            676, 670,
            654, 667,
            650, 646,
            660, 641,
            724, 638,
            774, 638,
            787, 639,
            792, 567,
            792, 525,
            792, 504,
            791, 490,
            735, 490,
            694, 490,
            669, 494,
            671, 524,
            629, 526,
            629, 446,
            627, 396,
            627, 366,
            569, 365,
            544, 365,
            543, 401,
            543, 418,
            517, 418,
            515, 387,
            515, 362,
            459, 360,
            414, 361,
            411, 397,
            409, 415,
            354, 421,
            337, 417,
            338, 316,
            338, 234,
            338, 182,
            340, 166,
            292, 164,
            289, 126,
            290, 101,
            333, 102,
            345, 102,
            347, 22,
            352, 1,
            377, 0,
            377, 36,
            374, 76,
            374, 100,
            429, 99,
            427, 135,
            429, 158,
            388, 161,
            375, 162,
            375, 205,
            377, 241,
            376, 268,
            408, 273,
            408, 311,
            449, 315,
            489, 318,
            512, 316,
            516, 292,
            538, 294,
            538, 322,
            604, 323,
            666, 323,
            669, 374,
            671, 419,
            671, 460,
            746, 463,
            806, 462,
            880, 462,
            896, 462,
            897, 485,
            864, 490,
            830, 491,
            830, 530,
            828, 588,
            831, 618,
            829, 656,
            830, 691,
            831, 709,
            807, 709,
            793, 707,
            794, 679,
            792, 664,
            761, 663,
            727, 663,
            710, 664,
            709, 694,
            707, 731,
            707, 753,
            704, 794,
            707, 818,
            761, 817,
            802, 817,
            816, 820,
            816, 832,
            796, 831,
            800, 852,
            912, 857,
            914, 924,
            915, 930,
        ]);
        const polygon2 = new Phaser.Geom.Polygon([
            428, 98,
            288, 97,
            286, 164,
            338, 161,
            340, 224,
            326, 223,
            326, 260,
            406, 259,
            407, 294,
            454, 296,
            453, 425,
            485, 429,
            485, 389,
            537, 389,
            538, 461,
            560, 462,
            560, 446,
            596, 446,
            595, 525,
            610, 526,
            610, 515,
            661, 515,
            663, 618,
            689, 617,
            688, 601,
            752, 600,
            756, 530,
            1038, 529,
            1040, 620,
            1013, 622,
            1015, 669,
            1031, 667,
            1024, 917,
            1046, 916,
            1047, 666,
            1089, 666,
            1085, 623,
            1054, 622,
            1057, 532,
            1112, 531,
            1112, 498,
            738, 498,
            740, 521,
            726, 520,
            731, 574,
            689, 575,
            687, 518,
            695, 495,
            611, 493,
            612, 432,
            561, 427,
            559, 373,
            486, 369,
            484, 296,
            508, 294,
            510, 282,
            446, 281,
            448, 234,
            416, 235,
            415, 222,
            364, 223,
            368, 165,
            434, 161,
            430, 100,
        ]);
        const polygon3 = new Phaser.Geom.Polygon([
            1035, 914,
            1018, 913,
            1024, 759,
            1009, 757,
            1008, 733,
            1056, 732,
            1059, 543,
            1069, 543,
            1069, 552,
            1157, 552,
            1162, 457,
            1157, 457,
            1157, 447,
            1319, 446,
            1317, 385,
            1217, 384,
            1141, 383,
            1141, 393,
            1034, 395,
            1032, 385,
            918, 384,
            915, 398,
            830, 399,
            830, 385,
            665, 385,
            660, 566,
            566, 566,
            566, 344,
            488, 347,
            483, 336,
            490, 216,
            424, 216,
            421, 183,
            335, 184,
            333, 166,
            278, 164,
            280, 99,
            429, 98,
            431, 161,
            440, 195,
            505, 199,
            508, 332,
            592, 335,
            593, 345,
            577, 345,
            577, 556,
            652, 557,
            655, 378,
            827, 377,
            828, 361,
            911, 361,
            915, 377,
            1032, 377,
            1034, 365,
            1138, 365,
            1143, 374,
            1216, 373,
            1326, 370,
            1328, 456,
            1174, 457,
            1173, 559,
            1072, 562,
            1073, 727,
            1088, 730,
            1088, 754,
            1037, 755,
            1036, 908

        ]);
        const polygon4 = new Phaser.Geom.Polygon([
            284, 104,
            282, 165,
            398, 170,
            397, 260,
            397, 268,
            855, 267,
            855, 320,
            1025, 321,
            1026, 260,
            408, 256,
            410, 169,
            435, 169,
            436, 101,
            283, 104,
        ])
        const polygon5 = new Phaser.Geom.Polygon([
            855, 260,
            855, 319,
            922, 323,
            920, 479,
            505, 482,
            504, 248,
            512, 247,
            512, 222,
            400, 220,
            399, 169,
            437, 169,
            434, 104,
            285, 103,
            282, 164,
            392, 169,
            393, 219,
            373, 221,
            373, 245,
            494, 247,
            495, 490,
            927, 489,
            927, 323,
            1026, 322,
            1024, 257,
            857, 260,
            855, 319,
            921, 325,
        ])
        const polygon6 = new Phaser.Geom.Polygon([
            855, 319,
            855, 261,
            1025, 262,
            1027, 283,
            1302, 282,
            1304, 121,
            1548, 123,
            1549, 386,
            1404, 387,
            1405, 539,
            1526, 542,
            1529, 634,
            1263, 637,
            1263, 545,
            1392, 542,
            1391, 370,
            1540, 372,
            1538, 135,
            1317, 135,
            1318, 292,
            1025, 294,
            1026, 319,
            856, 321,
            856, 260,
            1020, 258,
        ])
        const polygon7 = new Phaser.Geom.Polygon([
            1527, 544,
            1529, 637,
            1264, 640,
            1261, 594,
            862, 594,
            860, 629,
            763, 627,
            766, 570,
            613, 570,
            613, 614,
            604, 613,
            607, 571,
            532, 571,
            532, 565,
            604, 564,
            606, 302,
            564, 303,
            564, 295,
            604, 295,
            604, 278,
            615, 280,
            613, 291,
            854, 296,
            855, 260,
            1027, 260,
            1026, 320,
            857, 319,
            855, 303,
            615, 301,
            612, 562,
            765, 564,
            768, 560,
            860, 560,
            860, 585,
            1261, 585,
            1264, 545,
            1523, 541,
            1528, 633,
        ])
        const polygon8 = new Phaser.Geom.Polygon([
            855, 320,
            854, 259,
            908, 255,
            908, 215,
            538, 214,
            538, 231,
            418, 232,
            419, 217,
            363, 219,
            362, 739,
            1143, 741,
            1145, 723,
            1153, 724,
            1154, 739,
            1210, 743,
            1208, 749,
            1154, 748,
            1152, 891,
            1264, 892,
            1265, 905,
            619, 903,
            617, 915,
            428, 915,
            428, 902,
            310, 903,
            309, 928,
            131, 926,
            132, 856,
            307, 853,
            310, 895,
            427, 895,
            428, 885,
            617, 884,
            617, 893,
            1145, 893,
            1147, 750,
            362, 749,
            362, 805,
            355, 805,
            352, 748,
            247, 748,
            247, 743,
            353, 742,
            353, 220,
            346, 217,
            346, 213,
            354, 212,
            354, 144,
            365, 143,
            362, 208,
            417, 210,
            418, 186,
            536, 185,
            537, 200,
            905, 204,
            909, 172,
            913, 172,
            913, 202,
            961, 203,
            963, 211,
            915, 214,
            912, 257,
            1023, 257,
            1024, 320,
            855, 318,
        ])
        const polygon9 = new Phaser.Geom.Polygon([
            132, 928,
            311, 927,
            309, 857,
            178, 851,
            178, 66,
            1235, 66,
            1235, 119,
            1232, 119,
            1228, 294,
            1223, 294,
            1223, 297,
            1229, 297,
            1231, 336,
            1240, 335,
            1241, 299,
            1282, 299,
            1284, 582,
            979, 582,
            977, 506,
            1051, 503,
            1049, 469,
            920, 464,
            920, 323,
            1024, 321,
            1024, 261,
            854, 257,
            854, 318,
            914, 323,
            913, 468,
            820, 470,
            820, 502,
            969, 506,
            968, 582,
            924, 582,
            923, 591,
            1294, 590,
            1293, 418,
            1293, 299,
            1324, 298,
            1324, 295,
            1294, 294,
            1292, 246,
            1285, 244,
            1282, 295,
            1242, 296,
            1240, 133,
            1248, 134,
            1249, 67,
            1330, 65,
            1329, 61,
            1250, 60,
            1249, 39,
            1236, 39,
            1234, 62,
            178, 60,
            177, 3,
            170, 4,
            168, 59,
            85, 59,
            85, 65,
            168, 67,
            166, 854,
            132, 854,
            132, 926,
            309, 926,
        ])
        const polygon10 = new Phaser.Geom.Polygon([
            1025, 260,
            855, 259,
            854, 286,
            479, 285,
            479, 241,
            472, 240,
            472, 285,
            380, 285,
            380, 292,
            472, 291,
            472, 722,
            311, 723,
            311, 729,
            471, 729,
            471, 776,
            480, 777,
            480, 729,
            1101, 730,
            1100, 903,
            1455, 904,
            1454, 471,
            1513, 471,
            1510, 428,
            1310, 428,
            1309, 370,
            1111, 369,
            1111, 355,
            1105, 354,
            1105, 372,
            1070, 371,
            1073, 380,
            1104, 380,
            1104, 473,
            985, 476,
            985, 457,
            914, 459,
            915, 487,
            720, 488,
            718, 442,
            776, 443,
            779, 354,
            616, 352,
            613, 437,
            710, 442,
            710, 496,
            720, 497,
            720, 490,
            914, 490,
            914, 523,
            981, 528,
            985, 483,
            1112, 482,
            1113, 380,
            1301, 380,
            1303, 425,
            1247, 428,
            1249, 471,
            1445, 472,
            1447, 897,
            1110, 897,
            1108, 720,
            481, 721,
            480, 291,
            855, 293,
            855, 319,
            1024, 320,
            1024, 260,
        ])


        let currentPoly = polygon1

        let aGrid = new AlignGrid({ scene: this, rows: 7, cols: 13 })

        let input = this.input.on('pointermove', (pointer) => {
            if (this.gameIsRunning) {
                graphics.clear();

                if (Phaser.Geom.Polygon.ContainsPoint(currentPoly, pointer)) {
                    this.isOnMaze = true
                    graphics.fillStyle(0xffffff);
                }
                else {
                    this.isOnMaze = false
                    graphics.fillStyle(0xaa0000);
                }


                graphics.fillPoints(currentPoly.points, true);

                if (this.isOutOfGate && !this.isOnMaze) {
                    console.log("LOSE")
                }
            }
        });



        let gate1 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate1.setTint(0xff0000);
        gate1.setScale(1.25)
        aGrid.placeAtIndex(71, gate1)
        gate1.on("pointerout", () => {
            this.isOutOfGate = true
        })

        gate1.on("pointerover", () => {
            this.isOutOfGate = false
        })

        let text = this.add.text(0, 0, "CLICK TO START", { fontSize: 36 })
        aGrid.placeAtIndex(71, text)
        text.x -= text.width / 2

        gate1.on("pointerdown", () => {
            this.gameIsRunning = true
            gate2.visible = true
            text.visible = false
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon1.points, true);
        })

        let gate2 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate2.visible = false
        gate2.setTint(0x32CD32);
        gate2.setScale(1.25)
        aGrid.placeAtIndex(2, gate2)
        gate2.on("pointerover", () => {
            gate2.setTint(0xff0000)
            gate1.visible = false
            gate3.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon2.points, true);
            currentPoly = polygon2
            this.isOutOfGate = false
        })

        gate2.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate3 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate3.setTint(0x32CD32);
        gate3.setScale(1.25)
        aGrid.placeAtIndex(84, gate3)
        gate3.y -= gate3.height / 2
        gate3.x += gate3.width / 1.5
        gate3.visible = false
        gate3.on("pointerover", () => {
            gate3.setTint(0xff0000)
            gate2.visible = false
            gate4.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon3.points, true);
            currentPoly = polygon3
            this.isOutOfGate = false
        })

        gate3.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate4 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate4.setTint(0x32CD32);
        gate4.setScale(1.25)
        aGrid.placeAtIndex(2, gate4)
        gate4.visible = false
        gate4.on("pointerover", () => {
            gate4.setTint(0xff0000)
            gate3.visible = false
            gate5.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon4.points, true);
            currentPoly = polygon4
            this.isOutOfGate = false
        })

        gate4.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate5 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate5.setTint(0x32CD32);
        gate5.setScale(1.25)
        aGrid.placeAtIndex(2, gate5)
        gate5.y += gate5.height / 2
        gate5.visible = false
        gate5.on("pointerover", () => {
            gate5.setTint(0xff0000)
            gate4.visible = false
            gate6.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon5.points, true);
            currentPoly = polygon5
            this.isOutOfGate = false
        })

        gate5.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate6 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate6.setTint(0x32CD32);
        gate6.setScale(1.25)
        aGrid.placeAtIndex(19, gate6)
        gate6.y += gate6.height / 2
        gate6.visible = false
        gate6.on("pointerover", () => {
            gate6.setTint(0xff0000)
            gate5.visible = false
            gate7.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon6.points, true);
            currentPoly = polygon6
            this.isOutOfGate = false
        })

        gate6.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate7 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate7.setTint(0x32CD32);
        gate7.setScale(1.25)
        aGrid.placeAtIndex(48, gate7)
        gate7.y += gate7.height
        gate7.visible = false
        gate7.on("pointerover", () => {
            gate7.setTint(0xff0000)
            gate6.visible = false
            gate8.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon7.points, true);
            currentPoly = polygon7
            this.isOutOfGate = false
        })

        gate7.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate8 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate8.setTint(0x32CD32);
        gate8.setScale(1.25)
        aGrid.placeAtIndex(19, gate8)
        gate8.y += gate8.height
        gate8.visible = false
        gate8.on("pointerover", () => {
            gate8.setTint(0xff0000)
            gate7.visible = false
            gate9.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon8.points, true);
            currentPoly = polygon8
            this.isOutOfGate = false
        })

        gate8.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate9 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate9.setTint(0x32CD32);
        gate9.setScale(1.25)
        aGrid.placeAtIndex(66, gate9)
        gate9.y += gate9.height
        gate9.visible = false
        gate9.on("pointerover", () => {
            gate9.setTint(0xff0000)
            gate8.visible = false
            gate10.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon9.points, true);
            currentPoly = polygon9
            this.isOutOfGate = false
        })
        gate9.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate10 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate10.setTint(0x32CD32);
        gate10.setScale(1.25)
        aGrid.placeAtIndex(19, gate10)
        gate10.visible = false
        gate10.on("pointerover", () => {
            gate10.setTint(0xff0000)
            gate9.visible = false
            gate11.visible = true
            graphics.clear()
            graphics.fillStyle(0xffffff);
            graphics.fillPoints(polygon10.points, true);
            currentPoly = polygon10
            this.isOutOfGate = false
        })
        gate10.on("pointerout", () => {
            this.isOutOfGate = true
        })

        let gate11 = this.physics.add.sprite(0, 0, "square").setInteractive();
        gate11.setTint(0x32CD32);
        gate11.setScale(1.25)
        aGrid.placeAtIndex(30, gate11)
        gate11.visible = false
        gate11.on("pointerover", () => {
            this.isOutOfGate = false
            gate11.visible = false
            gate10.visible = false
            gate9.visible = false
            input.destroy()
            graphics.clear()
            this.timer.destroy()
            playerData.scoreValue = this.timeAlive       
        })
        gate11.on("pointerout", () => {
            this.isOutOfGate = true
        })

        // const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        // const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // Phaser.Geom.Polygon.Smooth(polygon3)

        this.timer = this.time.addEvent({
            callback: () => {
                this.timeAlive += 1
            },
            loop: true
        });

    },

    update() {

    },

}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameConf = {
    type: Phaser.AUTO,
    parent: "gameContainer",
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: maze1,
};

let game = new Phaser.Game(gameConf);
