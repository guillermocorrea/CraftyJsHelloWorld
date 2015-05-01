/**
 * Created by LuisGuillermo on 5/1/2015.
 */
(function () {
    Crafty.init(500,350, document.getElementById('game'));
    var floor = Crafty.e('Floor, 2D, Canvas, Color')
        .attr({x: 0, y: 340, w: 500, h: 10})
        .color('green');

    var square = Crafty.e('2D, Canvas, Color, Fourway, Gravity')
        .attr({x: 0, y: 0, w: 50, h: 50})
        .color('#F00')
        .fourway(4)
        .gravity('Floor');

    square.origin("center");

    square.bind('EnterFrame', function(){
        this.rotation = this.rotation + 1;
        this.x = this.x + 1;
    });

    var options = {
        maxParticles: 150,
        size: 18,
        sizeRandom: 4,
        speed: 1,
        speedRandom: 1.2,
        // Lifespan in frames
        lifeSpan: 29,
        lifeSpanRandom: 7,
        // Angle is calculated clockwise: 12pm is 0deg, 3pm is 90deg etc.
        angle: 65,
        angleRandom: 34,
        startColour: [255, 131, 0, 1],
        startColourRandom: [48, 50, 45, 0],
        endColour: [245, 35, 0, 0],
        endColourRandom: [60, 60, 60, 0],
        // Only applies when fastMode is off, specifies how sharp the gradients are drawn
        sharpness: 20,
        sharpnessRandom: 10,
        // Random spread from origin
        spread: 10,
        // How many frames should this last
        duration: -1,
        // Will draw squares instead of circle gradients
        fastMode: false,
        gravity: { x: 0, y: 0.1 },
        // sensible values are 0-3
        jitter: 0
    }

    Crafty.e("2D,Canvas,Particles").particles(options);
})();