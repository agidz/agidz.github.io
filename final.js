var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(60);

        //GITHUB COPY
        ///////////////////
 var drawMyShape = function(x, y, angle, sx, sy) {
    var fns = {
        
"shapeListDraw" : function(list) { for (var i = 0; i < list.length; ++i) {var shape = list[i];fns.shapeDraw.call(shape);}},
"shapeDraw" : function() {pushStyle();if (this.styles.fill) {   fill(this.styles.fill);}else {    noFill();}if (this.styles.stroke) {   stroke(this.styles.stroke);   strokeWeight(this.styles.strokeWeight);}else {   noStroke();}fns.transformDraw.call(this.transform, fns.Shapes[this.name].bind(this, this.shape));popStyle();},
"transformDraw" : function(cb) {pushMatrix();translate(this.tx, this.ty);rotate(this.angle);scale(this.sx, this.sy);cb();popMatrix();},
"Shapes" : {
"Rect" : function(shape) {rectMode(CENTER);rect(0, 0, shape.w, shape.h);},
"Ellipse" : function(shape) {ellipseMode(CENTER);ellipse(0, 0, shape.w, shape.h);},
"Triangle" : function(shape) {var p = shape.vertices;triangle(p[0].x, p[0].y, p[1].x, p[1].y, p[2].x, p[2].y);},
"Line" : function(shape) {var p = shape.vertices;line(p[0].x, p[0].y, p[1].x, p[1].y);},
"CurveShape" : function(shape) {var pts = shape.vertices;var nPoints = pts.length;beginShape();for (var i = 0; i < nPoints; ++i) {   var p = pts[i];   curveVertex(p.x, p.y);}for (var i = 0; i < 3; ++i) {   var p = pts[i];   curveVertex(p.x, p.y);}endShape();},
"Polygon" : function(shape) {var pts = shape.vertices;var nPoints = pts.length;beginShape();for (var i = 0; i < nPoints; ++i) {   var p = pts[i];   vertex(p.x, p.y);}vertex(pts[0].x, pts[0].y);endShape();}
}

};var list = [
{
"shape" : {
"w" : 150.0,
"h" : 8.0
},
"styles" : {
"fill" : -15132391.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : 91.0,
"ty" : -143.0,
"angle" : -7245.0,
"sx" : 1.0,
"sy" : 1.0
},
"name" : 'Rect',
"tx" : NaN,
"ty" : NaN
},
{
"shape" : {
"w" : 82.0,
"h" : 26.0
},
"styles" : {
"fill" : -15132391.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : -36.0,
"ty" : -34.0,
"angle" : -15889.7,
"sx" : 1.0,
"sy" : 1.0
},
"name" : 'Rect',
"tx" : NaN,
"ty" : NaN
},
{
"shape" : {
"vertices" : [
{
"x" : -2.4,
"y" : 42.2
},
{
"x" : 28.8,
"y" : -11.5
},
{
"x" : 11.3,
"y" : -22.5
},
{
"x" : -37.7,
"y" : -8.2
}
]
},
"styles" : {
"fill" : -15132391.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : -74.4,
"ty" : -1.9,
"angle" : -5050.6,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : -25.0,
"y" : 28.8
},
{
"x" : 24.0,
"y" : 33.8
},
{
"x" : 24.0,
"y" : -31.3
},
{
"x" : -23.0,
"y" : -31.3
}
]
},
"styles" : {
"fill" : -11776948.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : 0.0,
"ty" : -131.8,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : -37.3,
"y" : -1.0
},
{
"x" : -30.3,
"y" : 50.0
},
{
"x" : 3.8,
"y" : 67.0
},
{
"x" : 30.7,
"y" : 47.0
},
{
"x" : 36.8,
"y" : -4.0
},
{
"x" : 52.8,
"y" : -45.0
},
{
"x" : -2.2,
"y" : -76.0
},
{
"x" : -54.3,
"y" : -38.0
}
]
},
"styles" : {
"fill" : -11776948.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : 2.2,
"ty" : -36.0,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : -7.8,
"y" : 66.5
},
{
"x" : -3.8,
"y" : 34.5
},
{
"x" : 0.2,
"y" : 12.5
},
{
"x" : 2.2,
"y" : -1.5
},
{
"x" : 6.2,
"y" : -18.5
},
{
"x" : 18.2,
"y" : -31.5
},
{
"x" : 30.2,
"y" : -45.5
},
{
"x" : 27.2,
"y" : -64.5
},
{
"x" : -17.8,
"y" : -50.5
},
{
"x" : -28.8,
"y" : 33.5
},
{
"x" : -25.8,
"y" : 65.5
}
]
},
"styles" : {
"fill" : -11776948.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : -54.2,
"ty" : -35.5,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : -33.8,
"y" : -58.8
},
{
"x" : -33.8,
"y" : -38.8
},
{
"x" : -12.8,
"y" : -16.8
},
{
"x" : -6.8,
"y" : 2.2
},
{
"x" : -2.8,
"y" : 33.2
},
{
"x" : 2.2,
"y" : 75.2
},
{
"x" : 19.2,
"y" : 71.2
},
{
"x" : 24.2,
"y" : 25.2
},
{
"x" : 24.2,
"y" : -3.8
},
{
"x" : 17.2,
"y" : -33.8
},
{
"x" : 3.2,
"y" : -54.8
}
]
},
"styles" : {
"fill" : -11776948.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : 59.8,
"ty" : -40.2,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : -12.0,
"y" : 11.7
},
{
"x" : -10.0,
"y" : 45.7
},
{
"x" : -8.0,
"y" : 68.7
},
{
"x" : 8.0,
"y" : 66.7
},
{
"x" : 22.0,
"y" : -1.3
},
{
"x" : 21.0,
"y" : -37.3
},
{
"x" : 7.0,
"y" : -74.3
},
{
"x" : -19.0,
"y" : -58.3
},
{
"x" : -9.0,
"y" : -21.3
}
]
},
"styles" : {
"fill" : -11776948.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : 23.0,
"ty" : 86.3,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : -13.9,
"y" : 27.4
},
{
"x" : -10.9,
"y" : 43.4
},
{
"x" : -3.9,
"y" : 55.4
},
{
"x" : 12.1,
"y" : 52.4
},
{
"x" : 12.1,
"y" : 7.4
},
{
"x" : 20.1,
"y" : -23.6
},
{
"x" : 27.1,
"y" : -58.6
},
{
"x" : 2.1,
"y" : -73.6
},
{
"x" : -13.9,
"y" : -40.6
},
{
"x" : -15.9,
"y" : -4.6
},
{
"x" : -14.9,
"y" : 15.4
}
]
},
"styles" : {
"fill" : -11776948.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : -29.1,
"ty" : 88.6,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : 14.8,
"y" : 10.0
},
{
"x" : 8.8,
"y" : -10.0
},
{
"x" : -10.3,
"y" : -10.0
},
{
"x" : -13.3,
"y" : 10.0
}
]
},
"styles" : {
"fill" : -13421773.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : 25.3,
"ty" : 158.0,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"vertices" : [
{
"x" : 15.0,
"y" : 10.5
},
{
"x" : 10.0,
"y" : -10.5
},
{
"x" : -9.0,
"y" : -9.5
},
{
"x" : -16.0,
"y" : 9.5
}
]
},
"styles" : {
"fill" : -13421773.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : -29.0,
"ty" : 142.5,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"tx" : NaN,
"ty" : NaN,
"name" : 'CurveShape'
},
{
"shape" : {
"w" : 48.0,
"h" : 8.0
},
"styles" : {
"fill" : -56551.0,
"stroke" : -16777216.0,
"strokeWeight" : 1.0
},
"transform" : {
"tx" : 1.0,
"ty" : -153.0,
"angle" : 0.0,
"sx" : 1.0,
"sy" : 1.0
},
"name" : 'Ellipse',
"tx" : NaN,
"ty" : NaN
}
];pushMatrix();translate(x !== undefined ? x : width/2, y !== undefined ? y: height/2);rotate(angle||0);scale(sx||1, sy||1);fns.shapeListDraw(list);popMatrix();};

        //Globals
        angleMode = "radians";

        var debugMode = false;
        if (debugMode === true) {
            var bugDebug = true;
            var eyeDebug = true;
            var enemyDebug = true;
        }
        if (debugMode === false) {
            var bugDebug = false;
            var eyeDebug = false;
            var enemyDebug = false;
        }


        var mPressed = false; //represents if the mouse was down or up
        var mClicked = false;
        //Player Stats Saved
        var phealth = 50; //player health
        var pnormal = 1; //player normal damage
        var pelite = 1; //player elite damage
        var pcritm = 0; //player crit damage multiplier
        var pcritp = 0; //player crit percent chance
        var availpts = 10;
        var savedpts = 0;
        //player stats before save
        var sphealth = 50; //player health
        var spnormal = 1; //player normal damage
        var spelite = 1; //player elite damage
        var spcritm = 0; //player crit damage multiplier
        var spcritp = 0; //player crit percent chance
        var savailpts = 10;
        var ssavedpts = 0;

        //random vars
        var images = [];
        var boundaries = [];
        var enemies = [];
        var keyArray = [];
        var currFrameCount = 0;
        var currbulletFC = 0;
        var deadEnemies = 0;
        var canvasX = 0;
        var canvasY = 0;

        var tilemap = [
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                      bbb                                 b",
            "b                      bbb                                 b",
            "b                      bbb                                 b",
            "b                                                          b",
            "b                                                          b",
            "b                                          bb              b",
            "b                                          bbb             b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b        bb                                                b",
            "b         bb                                               b",
            "b           bb                                             b",
            "b                                  bbbb                    b",
            "b                                  bbbb                    b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                  b                                       b",
            "b                 bbb                                      b",
            "b                  b                                       b",
            "b                                       bb                 b",
            "b                                       bbb                b",
            "b                                      b                   b",
            "b                                                          b",
            "b                                                          b",
            "b             b                                            b",
            "b            bb                                            b",
            "b                                                          b",
            "b                                                         bb",
            "b                                                       bbbb",
            "b                              b                          bb",
            "b                              b                           b",
            "b                              b                           b",
            "b                                                          b",
            "b            b                                             b",
            "b           bb                                             b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                                          b",
            "b                                       b                  b",
            "b                                      bbb                 b",
            "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",];

        var tilemapSize = 20 * 20;
        var allCover = [];
        var currentCover = [new PVector(-1, -1)];
        var vantagePoints = {};

        var neighborObj = function (coords, dist) {
            this.vector = coords;
            this.dist = dist;
        };

        var getNeighbors = function (position) {
            var neighborsArray = [];
            //Get all adjacent tiles
            neighborsArray.push(new neighborObj(new PVector(position.x + 1, position.y), 1));
            neighborsArray.push(new neighborObj(new PVector(position.x - 1, position.y), 1));
            neighborsArray.push(new neighborObj(new PVector(position.x, position.y + 1), 1));
            neighborsArray.push(new neighborObj(new PVector(position.x, position.y - 1), 1));
            neighborsArray.push(new neighborObj(new PVector(position.x + 1, position.y + 1), 1.414));
            neighborsArray.push(new neighborObj(new PVector(position.x + 1, position.y - 1), 1.414));
            neighborsArray.push(new neighborObj(new PVector(position.x - 1, position.y + 1), 1.414));
            neighborsArray.push(new neighborObj(new PVector(position.x - 1, position.y - 1), 1.414));

            //Remove invalid adjacent tiles
            for (var i = 0; i < neighborsArray.length; i++) {
                var adjacent = neighborsArray[i];
                if (adjacent.vector.y < 0 || adjacent.vector.y > tilemap.length || adjacent.vector.x < 0 || adjacent.vector.x > tilemap[0].length ||
                    tilemap[adjacent.vector.y][adjacent.vector.x] !== " " ||
                    tilemap[adjacent.vector.y][adjacent.vector.x + 1] !== " " ||
                    tilemap[adjacent.vector.y][adjacent.vector.x - 1] !== " " ||
                    tilemap[adjacent.vector.y + 1][adjacent.vector.x] !== " " ||
                    tilemap[adjacent.vector.y + 1][adjacent.vector.x + 1] !== " " ||
                    tilemap[adjacent.vector.y + 1][adjacent.vector.x - 1] !== " " ||
                    tilemap[adjacent.vector.y - 1][adjacent.vector.x] !== " " ||
                    tilemap[adjacent.vector.y - 1][adjacent.vector.x + 1] !== " " ||
                    tilemap[adjacent.vector.y - 1][adjacent.vector.x - 1] !== " "
                ) {
                    neighborsArray.splice(i, 1);
                    i--;
                }
            }
            return neighborsArray;
        };


        var reconstructPath = function (cameFrom, current) {
            var totalPath = [current];
            var keys = [];
            for (var key in cameFrom) {
                keys.push(key);
            }
            var isInKeys = true;
            while (isInKeys) {
                current = cameFrom[current];
                totalPath.push(current);

                isInKeys = false;
                for (var i = 0; i < keys.length; i++) {
                    var currentKey = keys[i];
                    currentKey = currentKey.substring(1);
                    var keyArray = currentKey.split(", ");
                    if (parseInt(keyArray[0], 10) === current.x && parseInt(keyArray[1], 10) === current.y) {
                        isInKeys = true;
                        break;
                    }
                }
            }
            return totalPath;
        };

        var AStarSearch = function (target, position) {
            var start = millis();
            var closedSet = [];
            var openSet = [];
            var cameFrom = {};
            var gScore = {};
            var fScore = {};

            openSet.push(position);
            gScore[position] = 0;
            //fScore[position] = dist(position.x, position.y, target.x, target.y);
            fScore[position] = abs(target.y - position.y) + abs(target.x - position.x);
            var iterations = 0;

            while (openSet.length > 0) {
                var currentIndex = 0;
                //Find item in openset with lowest f value
                for (var i = 0; i < openSet.length; i++) {
                    if (fScore[openSet[i]] < fScore[openSet[currentIndex]]) {
                        currentIndex = i;
                    }
                }
                //Return if that is the solution
                var current = openSet[currentIndex];
                //println(iterations + ", " + currentIndex + ", " + current + ", " + fScore[openSet[currentIndex]]);
                if (closedSet.length > tilemapSize / 8) {
                    return [new PVector(-1, -1)];
                }
                if (current.x === target.x && current.y === target.y) {
                    //println(iterations);
                    //var end = millis();
                    //var elapsed = end-start;
                    //println("elapsed time: " + elapsed);
                    return reconstructPath(cameFrom, current);
                }
                //Move that item out of openset and into closedset
                closedSet.push(current);
                openSet.splice(currentIndex, 1);
                var neighbors = getNeighbors(current);
                //Examine each neighbor
                for (var i = 0; i < neighbors.length; i++) {
                    //If neighbor already explored, skip
                    var neighbor = neighbors[i];
                    var isInClosed = false;
                    for (var j = 0; j < closedSet.length; j++) {
                        if (closedSet[j].x === neighbor.vector.x && closedSet[j].y === neighbor.vector.y) {
                            isInClosed = true;
                            break;
                        }
                    }
                    if (!isInClosed) {
                        //If not explored, evaluate
                        var newGScore = gScore[current] + neighbor.dist;
                        var isInOpen = false;
                        for (var j = 0; j < openSet.length; j++) {
                            if (openSet[j].x === neighbor.vector.x && openSet[j].y === neighbor.vector.y) {
                                isInOpen = true;
                                break;
                            }
                        }
                        var isBetterPath = true;
                        if (!isInOpen) {
                            openSet.push(neighbor.vector);
                        }
                        else if (newGScore >= gScore[neighbor]) {
                            isBetterPath = false;
                        }
                        if (isBetterPath) {
                            cameFrom[neighbor.vector] = current;
                            gScore[neighbor.vector] = newGScore;
                            fScore[neighbor.vector] = newGScore + dist(neighbor.vector.x, neighbor.vector.y, target.x, target.y);
                            //fScore[neighbor.vector] = newGScore + abs(target.y-neighbor.vector.y) + abs(target.x-neighbor.vector.x);
                        }
                    }
                }
                iterations++;
            }
        };

        //objects for tilemap
        var boundaryObj = function (x, y) {
            this.x = x;
            this.y = y;
        };
        var wanderState = function () {
            //insert needed vars here
            this.gridX = 0;
            this.gridY = 0;
        };
        var chaseState = function () {
            //insert needed vars here
        };
        var goToGunshot = function () {
            //insert needed vars here
        };
        var getToCover = function () {
            //insert needed vars here
            this.lastPlayerLocation = new PVector(-1, -1);
            this.potentialCoverSource = [];
            this.actualCoverLocations = [];
            for (var i = 1; i < tilemap.length - 1; i++) {
                for (var j = 1; j < tilemap[i].length - 1; j++) {
                    if (tilemap[j][i] !== " " &&
                        (tilemap[j + 1][i] === " " ||
                            tilemap[j - 1][i] === " " ||
                            tilemap[j][i + 1] === " " ||
                            tilemap[j][i - 1] === " ")) {
                        this.potentialCoverSource.push(new PVector(i, j));
                        if (tilemap[j + 1][i] === " ") {
                            allCover.push(new PVector(i, j + 1));
                        }
                        if (tilemap[j - 1][i] === " ") {
                            allCover.push(new PVector(i, j - 1));
                        }
                        if (tilemap[j][i + 1] === " ") {
                            allCover.push(new PVector(i + 1, j));
                        }
                        if (tilemap[j][i - 1] === " ") {
                            allCover.push(new PVector(i - 1, j));
                        }
                    }
                }
            }
            this.count = 0;
        };
        var getToVantage = function () {
            this.count = 0;
        };

        var bulletObj = function () {
            this.x = 0;
            this.y = 0;
            this.angle = 0;
            this.fire = 0;
            this.damage = 0;
        };

        var ebulletObj = function () {
            this.x = 0;
            this.y = 0;
            this.angle = 0;
            this.fire = 0;
            this.damage = 5;
            this.step = new PVector(0, -1);
        };
        var enemyObj = function (x, y, type) {
            this.position = new PVector(x, y);
            this.state = [new wanderState(), new chaseState(), new goToGunshot(), new getToCover(), new getToVantage()];
            this.currState = 0;
            this.dead = 0;
            this.angle = 0;
            this.health = 0;
            this.armor = 0;
            this.damage = 0;
            ////toms code
            this.walkState = 1;
            this.currFrame = frameCount;
            this.currPowerFrame = frameCount;
            ////

            //bullet code
            this.enemyBullets = [new ebulletObj(), new ebulletObj(), new ebulletObj(), new ebulletObj(), new ebulletObj(), new ebulletObj()];//6 bullets from enemy at a time
            this.enemyBulletIdx = 0;
            this.currbulletFC = 0;
            //
            this.type = type;
            if (type === 0) {           //Constants for runners
                this.anchorDistance = 100;
                this.losDistance = 150;
                this.hearingDistance = 250;
                this.standardSpeed = 0.75;
                this.chaseSpeed = 1.25;
            }
            else if (type === 1) {      //Constants for shooters
                this.anchorDistance = 100;
                this.losDistance = 150;
                this.hearingDistance = 250;
                this.standardSpeed = 0.75;
                this.chaseSpeed = 1.25;
                this.timeInCover = 120;
                this.timeInVantage = 120;
            }

            this.wanderDistance = random(70, 100);
            this.wanderAngle = random(0, PI);
            this.step = new PVector(0, 0);
            this.path = [new PVector(-1, -1)];
            this.nextDestination = new PVector(-1, -1);
            this.finalDestination = new PVector(-1, -1);
            this.anchorPoint = new PVector(x, y);
            this.needPathToGun = false;

            this.coverPoint = new PVector(-1, -1);
            this.vantagePoint = new PVector(-1, -1);
        };
        enemyObj.prototype.changeState = function (x) {
            this.currState = x;
        };
        //other objects
        var personObj = function (x, y) {
            this.x = x;
            this.y = y;
            this.onGround = 0;
            this.dead = 0;
            this.walkState = 0;
            this.currFrame = frameCount;
            this.currPowerFrame = frameCount;
            this.empowered = 0;
            this.curHealth = 50;
            this.health = 50;
            this.normal = 1;
            this.elite = 1;
            this.critm = 0;
            this.critp = 0;

        };

        var gunObj = function (x, y) {
            this.x = x;
            this.y = y;
            this.angle = 0;
            this.step = new PVector(0, -1);
        };



        var person = new personObj(40, 75);
        var gun = new gunObj(person.x, person.y);
        var playerBullets = [new bulletObj(), new bulletObj(), new bulletObj(), new bulletObj(), new bulletObj(), new bulletObj()];//6 bullets from player at a time
        var playerBulletIdx = 0;
        //spawn enemies based on points spent (1:1)
        var spawn = function () {
            for (var i = 0; i < ssavedpts; i++) {
                var row = floor(random(10, 60));
                var col = floor(random(10, 60));
                enemies.push(new enemyObj(col * 20, row * 20, round(random(0, 1))));

            }
        };

        //init tile map
        var initTilemap = function () {
            for (var i = 0; i < tilemap.length; i++) {
                for (var j = 0; j < tilemap[i].length; j++) {
                    switch (tilemap[i][j]) {
                        case 'b': boundaries.push(new boundaryObj(j * 20, i * 20));
                            break;
                        //case 'e': enemies.push(new enemyObj(j * 20, i * 20));
                        //    break;
                    }
                }
            }
        };


        //Game states and game objects
        var customCharState = function () { };
        var startMenuState = function () { };
        var helpMenuState = function () { };
        var upgradeMenuState = function () { };
        var mainGameState = function () { };


        var gameObj = function () {
            this.state = [
                new customCharState(), //0
                new startMenuState(), //1
                new helpMenuState(),  //2
                new upgradeMenuState(), //3
                new mainGameState()]; //4
            this.curState = 0; //starting state of the game
        };

        gameObj.prototype.changeState = function (x) {
            this.curState = x;
        };

        customCharState.prototype.execute = function (me) {
            //boundary
            stroke(0, 0, 0);
            fill(150, 146, 138);
            rect(0, 0, 400, 400);
            rect(50, 50, 300, 300);
            rect(100, 100, 200, 200);
            rect(150, 150, 100, 100);
            images.push(get(0, 0, width, height));
            //clear image
            noStroke();
            fill(0, 0, 0);
            rect(0, 0, 400, 400);
            fill(222, 222, 222);
            //insert more images here

            //
            me.changeState(1);
        };
        startMenuState.prototype.execute = function (me) {
            background(117, 23, 23);
drawMyShape(200, 200);
            if (mouseX > 119 && mouseX < 281 && mouseY > 208 && mouseY < 266) {
                fill(56, 53, 54);
            }
            else {
                fill(61, 58, 59);
            }
            rect(119, 208, 162, 58);

            //text
            fill(222, 16, 43);
            textSize(60);
            text("Warframe", 68, 157);
            textSize(40);
            text("The Beginning", 70, 345);
            textSize(30);
            fill(235, 232, 233);
            text("Launch", 153, 249);
            textSize(10);
            fill(235, 232, 233);
            text("Andrew Gidzinski Tom Otgonbayar Thomas Sudlow", 83, 367);

            //check if button clicked for next state
            if (mouseX > 119 && mouseX < 281 && mouseY > 208 && mouseY < 266 && mPressed === true) {
                me.changeState(3);
                phealth = 50;
                pnormal = 1;
                pelite = 1;
                pcritm = 0;
                pcritp = 0;
                availpts = 10;
                savedpts = 0;
                sphealth = 50;
                spnormal = 1;
                spelite = 1;
                spcritm = 0;
                spcritp = 0;
                savailpts = 10;
                ssavedpts = 0;
            }
        };
        helpMenuState.prototype.execute = function (me) {
            background(0, 0, 0);
            fill(222, 16, 43);
            textSize(20);
            text("\n\nUse the arrow keys to move.\nMouse click to shoot.\n\nKill all enemies to win the round.\nWinning rounds will give more points.\nSpend points in the Upgrade section.\n\nThe enemies scale in difficulty and \nnumber based on number of upgrades.\n\nClick Save and Start to start new round.", 20, 30);
            textSize(50);
            text("Instructions", 61, 44);
            if (mouseX > 110 && mouseX < 285 && mouseY > 326 && mouseY < 361)
            {
                fill(209, 27, 27);
            }
            else
            {
                fill(255, 0, 0);
            }
            rect(110, 326, 175, 35);
           
            rect(110, 326, 175, 35);
            fill(0, 0, 0);
            textSize(20);
            text("Back to upgrades", 120, 350);
            if (mouseX > 110 && mouseX < 285 && mouseY > 326 && mouseY < 361 && mClicked === true) {
                me.changeState(3);
            }

        };
        upgradeMenuState.prototype.execute = function (me) {

            background(0, 0, 0);
            fill(222, 16, 43);
            textSize(50);
            text("Upgrades", 90, 70);
            textSize(25);
            text("Health: " + phealth, 20, 120);
            text("Normal Damage: " + pnormal, 20, 145);
            text("Armor Pen: " + pelite, 20, 170);
            //text("Critical Hit %: " + pcritp, 20, 145);
            //text("Critical Hit Mult: " + pcritm, 20, 170);
            text("Points Spent: " + savedpts, 20, 220);
            text("Points Available: " + availpts, 20, 245);

            text(" +10", 320, 120);
            text(" +1", 320, 145);
            text(" +1", 320, 170);
            //text(" +0.01", 320, 145);
            //text(" +0.1", 320, 170);

            //buttons
            if (mouseX > 300 && mouseX < 320 && mouseY > 100 && mouseY < 120 && mClicked === true && availpts > 0) {
                phealth += 10;
                availpts -= 1;
                savedpts += 1;

            }
            if (mouseX > 300 && mouseX < 320 && mouseY > 125 && mouseY < 145 && mClicked === true && availpts > 0) {
                pnormal += 1;
                availpts -= 1;
                savedpts += 1;
            }
            if (mouseX > 300 && mouseX < 320 && mouseY > 150 && mouseY < 170 && mClicked === true && availpts > 0) {
                pelite += 1;
                availpts -= 1;
                savedpts += 1;
            }

            rect(300, 100, 20, 20);
            rect(300, 125, 20, 20);
            rect(300, 150, 20, 20);
            //rect(300, 125, 20, 20);
            //rect(300, 150, 20, 20);

            rect(52.5, 300, 70, 35);
            rect(127.5, 300, 70, 35);
            rect(202.5, 300, 70, 35);
            rect(277.5, 300, 70, 35);

            fill(0, 0, 0);
            text("Start", 60, 325);
            text("Help", 137, 325);
            text("Save", 208, 325);
            text("Undo", 283.5, 325);

            text("+", 304, 120);
            text("+", 304, 145);
            text("+", 304, 170);
            //text("+", 304, 145);
            //text("+", 304, 170);

            //bottom 4 button checks
            //start
            if (mouseX > 52.5 && mouseX < 122.5 && mouseY > 300 && mouseY < 370 && mClicked === true) {
                me.changeState(4);
                spawn();
                canvasX = 0;
                canvasY = 0;
                //set enemies stats
                for (var i = 0; i < enemies.length; i++) {
                    enemies[i].health = ssavedpts;
                    //enemies[i].damage = ssavedpts;
                    enemies[i].armor = ssavedpts / 2;
                }
                //set player bullet stats
                for (var i = 0; i < playerBullets.length; i++) {
                    playerBullets[i].damage = spnormal;
                    //enemies[i].damage = ssavedpts;
                    //enemies[i].armor = ssavedpts;
                }
                initTilemap();
                person.health = sphealth;
                person.normal = spnormal;
                person.elite = spelite;
                person.critm = spcritm;
                person.critp = spcritp;
                person.curHealth = sphealth;
            }
            //help
            if (mouseX > 127.5 && mouseX < 197.5 && mouseY > 300 && mouseY < 370 && mClicked === true) {
                me.changeState(2);
            }
            //save
            if (mouseX > 202.5 && mouseX < 272.5 && mouseY > 300 && mouseY < 370 && mClicked === true) {
                sphealth = phealth;
                spnormal = pnormal;
                spelite = pelite;
                spcritm = pcritm;
                spcritp = pcritp;
                savailpts = availpts;
                ssavedpts = savedpts;


            }
            //undo
            if (mouseX > 277.5 && mouseX < 347.5 && mouseY > 300 && mouseY < 370 && mClicked === true) {
                phealth = sphealth;
                pnormal = spnormal;
                pelite = spelite;
                pcritm = spcritm;
                pcritp = spcritp;
                availpts = savailpts;
                savedpts = ssavedpts;
            }
            //reset button
            fill(222, 16, 43);
            rect(110, 346, 175, 35);
            fill(0, 0, 0);
            text("Reset Game", 125, 370);
            if (mouseX > 110 && mouseX < 285 && mouseY > 346 && mouseY < 381 && mClicked === true) {
                me.changeState(1);
            }

        };
        mainGameState.prototype.execute = function (me) {
            background(244, 244, 244);


            if (keyArray[68] === 1) {
                    bugDebug = true;
                    eyeDebug = true;
                    enemyDebug = true;
                    debugMode = true;
            }
            if (keyArray[68] === 0) {
                bugDebug = false;
                eyeDebug = false;
                enemyDebug = false;
                debugMode = false;
            }
            pushMatrix();
            translate(canvasX, canvasY);

            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].draw();
            }
            for (var i = 0; i < enemies.length; i++) {
                if (enemies[i].dead === 0) {//draw enemies if not dead
                    enemies[i].draw();
                    //enemy bullet draws
                    for (var j = 0; j < enemies[i].enemyBullets.length; j++) {
                        if (enemies[i].enemyBullets[j].fire === 1) {
                            enemies[i].enemyBullets[j].draw();
                        }
                        var xx = enemies[i].enemyBullets[j].x;
                        var yy = enemies[i].enemyBullets[j].y;
                        //collision checks for enemy bullets
                        if (xx > person.x - 5 && xx < person.x + 5 && yy > person.y - 5 && yy < person.y + 30 && enemies[i].enemyBullets[j].fire === 1) {
                            enemies[i].enemyBullets[j].fire = 0;
                            person.curHealth -= enemies[i].enemyBullets[j].damage;
                        }
                        //collision checks for boundrys with enemy bullets
                        for (var k = 0; k < boundaries.length; k++) {
                            if (xx > boundaries[k].x && xx < boundaries[k].x + 20 && yy > boundaries[k].y && yy < boundaries[k].y + 20 && enemies[i].enemyBullets[j].fire === 1) {
                                enemies[i].enemyBullets[j].fire = 0;
                            }
                        }
                    }

                    enemies[i].state[enemies[i].currState].execute(enemies[i]);
                }
            }
            person.draw();
            person.move();
            ////player bullet code
            //make new bullet on click
            if (mClicked) {
                if (currFrameCount < (frameCount - 10)) {
                    currFrameCount = frameCount;
                    playerBullets[playerBulletIdx].fire = 1;
                    playerBullets[playerBulletIdx].x = gun.x;
                    playerBullets[playerBulletIdx].y = gun.y + 10;
                    playerBullets[playerBulletIdx].angle = gun.angle;
                    playerBulletIdx++;
                    if (playerBulletIdx > playerBullets.length - 1) {
                        playerBulletIdx = 0;
                    }
                }
            }
            //bullet draws
            for (var i = 0; i < playerBullets.length; i++) {
                if (playerBullets[i].fire === 1) {
                    playerBullets[i].draw();
                }
                for (var k = 0; k < boundaries.length; k++) {
                    if (playerBullets[i].x > boundaries[k].x && playerBullets[i].x < boundaries[k].x + 20 && playerBullets[i].y > boundaries[k].y && playerBullets[i].y < boundaries[k].y + 20 && playerBullets[i].fire === 1) {
                        playerBullets[i].fire = 0;
                    }
                }
            }
            ////


            gun.draw();

            if (person.curHealth <= 0) {
                person.dead = 0;
                enemies = [];
                person.x = 40;
                person.y = 75;
                me.changeState(3); //upgrade
            }
            //healthbar 
            fill(0, 0, 0);
            textSize(20);
            text("Health: ", 22 - canvasX, 370 - canvasY);
            text(person.curHealth + "/" + person.health, 90 - canvasX, 353 - canvasY);
            stroke(0, 0, 0);
            fill(255, 255, 255);

            rect(90 - canvasX, 356 - canvasY, 170, 15);
            fill(222, 16, 43);
            rect(90 - canvasX, 356 - canvasY, (person.curHealth / person.health * 170), 15);

            //minimap
            stroke(0, 0, 0);
            fill(255, 255, 255);
            rect(299 - canvasX, 299 - canvasY, 100, 100);
            //camera box of current view

            rect(299 - canvasX - (canvasX / 12), 299 - canvasY - (canvasY / 12), 33.3, 33.3);
            //draw person on map
            noStroke();
            fill(0, 0, 0);
            ellipse(299 + (person.x / 12) - canvasX, 299 + (person.y / 12) - canvasY, 3, 3);
            //draw enemies on map
            fill(222, 16, 43);
            deadEnemies = 0;
            for (var i = 0; i < enemies.length; i++) {
                if (enemies[i].dead === 0) {
                    ellipse(299 + (enemies[i].position.x / 12) - canvasX, 299 + (enemies[i].position.y / 12) - canvasY, 3, 3);
                }
                else {
                    deadEnemies++;
                }
            }

            //end game conditions
            if (deadEnemies === enemies.length) {
                person.dead = 0;
                enemies = [];
                person.x = 40;
                person.y = 75;
                me.changeState(3); //upgrade
                availpts += 5; //give player 5 points to spend on win
            }

            //canvas shifting
            if (mouseX < 40) {
                if (canvasX < 0) {
                    canvasX += 2;
                }
            }
            if (mouseX > 360) {
                if (canvasX > -800) {
                    canvasX -= 2;
                }
            }
            if (mouseY < 40) {
                if (canvasY < 0) {
                    canvasY += 2;
                }
            }
            if (mouseY > 360) {
                if (canvasY > -800) {
                    canvasY -= 2;
                }
            }

            popMatrix();

        };

        //enemy states
        wanderState.prototype.execute = function (me) {
            me.step.set(cos(me.wanderAngle), sin(me.wanderAngle));
            me.step.normalize();
            me.angle = me.step.heading() + (PI);
            me.step.x *= me.standardSpeed;
            me.step.y *= me.standardSpeed;
            me.position.add(me.step);
            //Get new position
            var gridX = me.position.x / 20;
            var gridY = me.position.y / 20;
            //Find all grid positions it's in
            var gridXArray = [];
            var gridYArray = [];
            gridXArray.push(floor(gridX));
            gridXArray.push(floor(gridX + 0.3) - 1);
            gridYArray.push(floor(gridY));
            gridYArray.push(floor(gridY + 0.5) - 1);
            if (floor(gridX) !== gridX) {
                gridXArray.push(floor(gridX - 0.3) + 1);
            }
            if (floor(gridY) !== gridY) {
                gridYArray.push(floor(gridY - 0.35) + 1);
            }
            //Check tilemap for all grid positions
            var isValid = true;
            for (var x = 0; x < gridXArray.length; x++) {
                for (var y = 0; y < gridYArray.length; y++) {
                    if (tilemap[gridYArray[y]][gridXArray[x]] !== " ") {
                        isValid = false;
                        break;
                    }
                }
            }
            if (dist(me.anchorPoint.x, me.anchorPoint.y, me.position.x, me.position.y) > me.anchorDistance) {
                isValid = false;
            }
            if (!isValid) {
                me.position.sub(me.step);
                me.wanderDistance = -1;
            }

            me.wanderDistance--;
            if (me.wanderDistance < 0) {
                me.wanderDistance = random(70, 100);
                me.wanderAngle += random(-PI / 2, PI / 2);
            }
            if (me.type === 0) {
                var distanceToPlayer = dist(me.position.x, me.position.y, person.x, person.y);
                if (distanceToPlayer < me.losDistance) {
                    me.changeState(1);
                }
                if (mClicked && distanceToPlayer < me.hearingDistance) {
                    me.needPathToGun = true;
                    me.changeState(2);
                }
            }
            else if (me.type === 1) {
                var distanceToPlayer = dist(me.position.x, me.position.y, person.x, person.y);
                if (distanceToPlayer < me.losDistance || (mClicked && distanceToPlayer < me.hearingDistance)) {
                    me.changeState(3);
                }
            }
        };

        chaseState.prototype.execute = function (me) {

            me.step.set(person.x - me.position.x, person.y - me.position.y);
            me.step.normalize();
            me.angle = me.step.heading() + (PI);

            var playerPosition = new PVector(floor(person.x / 20), floor(person.y / 20));
            var gridPosX = floor(me.position.x / 20);
            var gridPosY = floor(me.position.y / 20);
            if (me.path.length === 0) {
                me.path.push(new PVector(-1, -1));
            }
            if (playerPosition.x !== me.path[0].x || playerPosition.y !== me.path[0].y) { //Check if player has changed position
                var start = new PVector(floor(me.position.x / 20), floor(me.position.y / 20));
                var end = playerPosition;
                if (start.x !== end.x || start.y !== end.y) {
                    var newPath = AStarSearch(end, start);
                    if (newPath[0].x !== -1) {
                        me.path = newPath;
                    }
                }
                if (me.path.length > 0) {
                    me.nextDestination = me.path[me.path.length - 1];
                }
            }
            if (me.path.length > 1 && me.path[0].x !== -1) {

                if (me.nextDestination.x > gridPosX) {
                    me.position.x += me.chaseSpeed;
                }
                else if (me.nextDestination.x < gridPosX) {
                    me.position.x -= me.chaseSpeed;
                }
                if (me.nextDestination.y > gridPosY) {
                    me.position.y += me.chaseSpeed;
                }
                else if (me.nextDestination.y < gridPosY) {
                    me.position.y -= me.chaseSpeed;
                }
            }
            else if (me.path.length === 1 && me.path[0].x !== -1 && me.path[0].x === playerPosition.x && me.path[0].y === playerPosition.y) {
                if (me.position.x < person.x) {
                    me.position.x += me.chaseSpeed;
                }
                if (me.position.x > person.x) {
                    me.position.x -= me.chaseSpeed;
                }
                if (me.position.y < person.y) {
                    me.position.y += me.chaseSpeed;
                }
                if (me.position.y > person.y) {
                    me.position.y -= me.chaseSpeed;
                }
            }
            if (gridPosX === me.nextDestination.x && gridPosY === me.nextDestination.y && me.path.length > 1) {
                if (gridPosX !== playerPosition.x || gridPosY !== playerPosition.y) {
                    me.path.splice(me.path.length - 1, 1);
                }
                if (me.path.length > 0) {
                    me.nextDestination = me.path[me.path.length - 1];
                }
            }
            if (dist(me.position.x, me.position.y, person.x, person.y) > me.losDistance + 50) {
                me.anchorPoint.set(me.position.x, me.position.y);
                me.path = [new PVector(-1, -1)];
                me.changeState(0);
            }
        };

        goToGunshot.prototype.execute = function (me) {
            var playerPosition = new PVector(floor(person.x / 20), floor(person.y / 20));
            var gridPosX = floor(me.position.x / 20);
            var gridPosY = floor(me.position.y / 20);
            if (me.needPathToGun) { //Check if player has changed position
                var start = new PVector(floor(me.position.x / 20), floor(me.position.y / 20));
                var end = playerPosition;
                if (start.x !== end.x && start.y !== end.y) {
                    var newPath = AStarSearch(end, start);
                    if (newPath[0].x !== -1) {
                        me.path = newPath;
                    }
                    else {
                        //println("Could not find path");
                    }
                }
                if (me.path.length > 0) {
                    me.nextDestination = me.path[me.path.length - 1];
                }
                me.needPathToGun = false;
                //me.anchorPoint.set(person.x, person.y);
            }
            if (me.nextDestination.x > gridPosX) {
                me.position.x += me.standardSpeed;
            }
            else if (me.nextDestination.x < gridPosX) {
                me.position.x -= me.standardSpeed;
            }
            if (me.nextDestination.y > gridPosY) {
                me.position.y += me.standardSpeed;
            }
            else if (me.nextDestination.y < gridPosY) {
                me.position.y -= me.standardSpeed;
            }
            if (gridPosX === me.nextDestination.x && gridPosY === me.nextDestination.y && me.path.length > 0) {
                if (gridPosX !== playerPosition.x || gridPosY !== playerPosition.y) {
                    me.path.splice(me.path.length - 1, 1);
                }
                me.nextDestination = me.path[me.path.length - 1];
            }

            var distanceToPlayer = dist(me.position.x, me.position.y, person.x, person.y);
            if (distanceToPlayer < me.losDistance) {
                me.changeState(1);
            }

            if (me.path.length < 2) {
                me.anchorPoint.set(me.position.x, me.position.y);
                me.path = [new PVector(-1, -1)];
                me.changeState(0);
            }
            if (mClicked && distanceToPlayer < me.hearingDistance) {
                me.needPathToGun = true;
            }
        };

        var hasImmediateLOS = function (tempSource, tempTarget) {
            var source = new PVector(0, 0);
            source.set(tempSource);
            var target = new PVector(0, 0);
            target.set(tempTarget);
            if (abs(source.x - target.x) < 2 && abs(source.y - target.y) < 2) {
                return true;
            }
            var directionVector = new PVector(0, 0);
            source.add(0.5, 0.5, 0);
            directionVector.set(target);
            directionVector.sub(source);
            directionVector.normalize();

            var testLoc = new PVector(0, 0);
            testLoc.set(source);
            testLoc.add(directionVector);
            var testX = floor(testLoc.x);
            var testY = floor(testLoc.y);
            if (tilemap[testY][testX] === " ") {
                return true;
            }
            else {
                return false;
            }
        };

        var hasLOS = function (tempSource, tempTarget) {
            var source = new PVector(0, 0);
            source.set(tempSource);
            var target = new PVector(0, 0);
            target.set(tempTarget);
            var directionVector = new PVector(0, 0);
            source.add(0.5, 0.5, 0);
            directionVector.set(target);
            directionVector.sub(source);
            directionVector.normalize();

            var testLoc = new PVector(0, 0);
            testLoc.set(source);
            for (var i = 0; i < 3; i++) {
                if (tilemap[floor(testLoc.y)][floor(testLoc.x)] !== " ") {
                    return false;
                }
                testLoc.add(directionVector);
            }
            return true;
        };

        var evaluateCover = function () {
            var playerPosition = new PVector(floor(person.x / 20), floor(person.y / 20));
            /*for (var i = 0; i < allCover.length; i++) {
                fill(255, 0, 0);
                rect(allCover[i].x*20, allCover[i].y*20, 20, 20);
                //println(tempCoverArray[i]);
            }*/
            currentCover = allCover.slice(0, allCover.length);
            //Step 1: Evaluate cover locations
            /*Critera:  No LOS to player - COMPLETE!
                        Adjacent tile provids LOS to player - COMPLETE!
                        Proximity to current location
                        Proximity to player*/
            //Check for cover
            for (var i = 0; i < currentCover.length; i++) {
                //Remove all tiles that don't provide cover
                if (hasImmediateLOS(currentCover[i], playerPosition)) {
                    currentCover.splice(i, 1);
                    i--;
                    continue;
                }
                //Remove all tiles that don't provide a vantage point
                var coverTile = new PVector(0, 0);
                coverTile.set(currentCover[i]);
                var tempDict = {};
                if (tilemap[coverTile.y][coverTile.x + 1] !== " " || tilemap[coverTile.y][coverTile.x - 1] !== " ") {
                    coverTile.y++;
                    if (hasLOS(coverTile, playerPosition)) {
                        coverTile.y++;
                        vantagePoints[currentCover[i]] = new PVector(coverTile.x, coverTile.y);
                        coverTile.y--;
                        continue;
                    }
                    coverTile.y -= 2;
                    if (hasLOS(coverTile, playerPosition)) {
                        coverTile.y--;
                        vantagePoints[currentCover[i]] = new PVector(coverTile.x, coverTile.y);
                        coverTile.y++;
                        continue;
                    }
                    coverTile.y++;
                }
                else if (tilemap[coverTile.y + 1][coverTile.x] !== " " || tilemap[coverTile.y - 1][coverTile.x] !== " ") {
                    coverTile.x++;
                    if (hasLOS(coverTile, playerPosition)) {
                        coverTile.x++;
                        vantagePoints[currentCover[i]] = new PVector(coverTile.x, coverTile.y);
                        coverTile.x--;
                        continue;
                    }
                    coverTile.x -= 2;
                    if (hasLOS(coverTile, playerPosition)) {
                        coverTile.x--;
                        vantagePoints[currentCover[i]] = new PVector(coverTile.x, coverTile.y);
                        coverTile.x++;
                        continue;
                    }
                    coverTile.x++;
                }
                currentCover.splice(i, 1);
                i--;
            }
            /*for (var i = 0; i < currentCover.length; i++) {
                fill(0, 255, 0);
                rect(currentCover[i].x*20, currentCover[i].y*20, 20, 20);
            }*/
        };
        getToCover.prototype.execute = function (me) {
            //println("I'm here 759");
            var playerPosition = new PVector(floor(person.x / 20), floor(person.y / 20));
            var gridPosX = floor(me.position.x / 20);
            var gridPosY = floor(me.position.y / 20);
            //Evaluate potential cover spots
            var target = new PVector(-1, -1);
            var distance = 100000000;
            var tempCoverArray = [];
            tempCoverArray = currentCover.slice(0, currentCover.length);
            for (var i = 0; i < tempCoverArray.length; i++) {
                var newDistance = 2 * abs(target.x - tempCoverArray[i].x) + 2 * abs(target.y - tempCoverArray[i].y) + abs(me.position.x - tempCoverArray[i].x) + abs(me.position.y - tempCoverArray[i].y);
                if (newDistance < distance) {
                    target.set(tempCoverArray[i]);
                    distance = newDistance;
                }
            }
            if (target.x !== -1 && target.y !== -1) {
                me.coverPoint.set(target);
                me.vantagePoint.set(vantagePoints[target]);
            }
            //println(me.coverPoint);
            //println(me.vantagePoint);

            //Step 2: Go to cover location    
            var start = new PVector(floor(me.position.x / 20), floor(me.position.y / 20));
            var end = new PVector(me.coverPoint.x, me.coverPoint.y);
            //var end = me.coverPoint;
            //end.set(me.coverPoint);
            //println(me.coverPoint);
            if (end.x !== -1 && end.y !== -1) {
                if (tilemap[me.coverPoint.y][me.coverPoint.x + 1] !== " ") {
                    end.x -= 1;
                }
                if (tilemap[me.coverPoint.y][me.coverPoint.x - 1] !== " ") {
                    end.x += 1;
                }
                if (tilemap[me.coverPoint.y + 1][me.coverPoint.x] !== " ") {
                    end.y -= 1;
                }
                if (tilemap[me.coverPoint.y - 1][me.coverPoint.x] !== " ") {
                    end.y += 1;
                }
            }
            if (me.path.length < 1 || end.x !== me.path[0].x || end.y !== me.path[0].y) {
                if (start.x !== end.x || start.y !== end.y) {
                    var newPath = AStarSearch(end, start);
                    if (newPath[0].x !== -1) {
                        me.path = newPath;
                    }
                    else {
                        //println("Could not find path");
                        for (var i = 0; i < allCover.length; i++) {
                            if (allCover[i].x === me.coverPoint.x && allCover[i].y === me.coverPoint.y) {
                                allCover.splice(i, 1);
                                i--;
                                break;
                            }
                        }
                        evaluateCover();
                    }
                }
                if (me.path.length > 0) {
                    me.nextDestination = me.path[me.path.length - 1];
                }
            }
            if (me.nextDestination.x > gridPosX) {
                me.position.x += me.standardSpeed;
            }
            else if (me.nextDestination.x < gridPosX) {
                me.position.x -= me.standardSpeed;
            }
            if (me.nextDestination.y > gridPosY) {
                me.position.y += me.standardSpeed;
            }
            else if (me.nextDestination.y < gridPosY) {
                me.position.y -= me.standardSpeed;
            }
            if (gridPosX === me.nextDestination.x && gridPosY === me.nextDestination.y && me.path.length > 0) {
                if (gridPosX !== end.x || gridPosY !== end.y) {
                    me.path.splice(me.path.length - 1, 1);
                }
                if (me.path.length > 0) {
                    me.nextDestination = me.path[me.path.length - 1];
                }
            }
            if (me.path.length === 1) {
                this.count++;
            }

            if (this.count > me.timeInCover) {
                this.count = 0;
                me.changeState(4);
            }
        };
        getToVantage.prototype.execute = function (me) {
            var playerPosition = new PVector(floor(person.x / 20), floor(person.y / 20));
            var gridPosX = floor(me.position.x / 20);
            var gridPosY = floor(me.position.y / 20);

            var start = new PVector(floor(me.position.x / 20), floor(me.position.y / 20));
            var end = new PVector(-1, -1);
            end.set(me.vantagePoint);
            if (me.coverPoint.x !== -1 && me.coverPoint.y !== -1) {
                if (tilemap[me.coverPoint.y][me.coverPoint.x + 1] !== " ") {
                    end.x -= 1;
                }
                if (tilemap[me.coverPoint.y][me.coverPoint.x - 1] !== " ") {
                    end.x += 1;
                }
                if (tilemap[me.coverPoint.y + 1][me.coverPoint.x] !== " ") {
                    end.y -= 1;
                }
                if (tilemap[me.coverPoint.y - 1][me.coverPoint.x] !== " ") {
                    end.y += 1;
                }
            }
            if (me.path.length < 1 || end.x !== me.path[0].x || end.y !== me.path[0].y) {
                if (start.x !== end.x || start.y !== end.y) {
                    var newPath = AStarSearch(end, start);
                    if (newPath[0].x !== -1) {
                        me.path = newPath;
                    }
                    else {
                        //println("Could not find path");
                        for (var i = 0; i < allCover.length; i++) {
                            if (allCover[i].x === me.coverPoint.x && allCover[i] === me.coverPoint.y) {
                                allCover.splice(i, 1);
                                i--;
                                break;
                            }
                        }
                        me.path = [];
                        me.path[0] = new PVector(-1, -1);
                    }
                }
                if (me.path.length > 0) {
                    me.nextDestination = me.path[me.path.length - 1];
                }
            }
            if (me.nextDestination.x > gridPosX) {
                me.position.x += me.standardSpeed;
            }
            else if (me.nextDestination.x < gridPosX) {
                me.position.x -= me.standardSpeed;
            }
            if (me.nextDestination.y > gridPosY) {
                me.position.y += me.standardSpeed;
            }
            else if (me.nextDestination.y < gridPosY) {
                me.position.y -= me.standardSpeed;
            }
            if (gridPosX === me.nextDestination.x && gridPosY === me.nextDestination.y && me.path.length > 0) {
                if (gridPosX !== end.x || gridPosY !== end.y) {
                    me.path.splice(me.path.length - 1, 1);
                }
                if (me.path.length > 0) {
                    me.nextDestination = me.path[me.path.length - 1];
                }
            }
            if (me.path.length === 1) {
                this.count++;
            }

            if (this.count > me.timeInVantage) {
                this.count = 0;
                me.changeState(3);
            }

            ///added bullet code
            if (me.currbulletFC < (frameCount - 40)) {
                me.currbulletFC = frameCount;
                me.enemyBullets[me.enemyBulletIdx].fire = 1;
                me.enemyBullets[me.enemyBulletIdx].x = me.position.x;
                me.enemyBullets[me.enemyBulletIdx].y = me.position.y;
                me.enemyBullets[me.enemyBulletIdx].step.set(me.position.x - person.x, me.position.y - person.y - 15);
                me.enemyBullets[me.enemyBulletIdx].step.normalize();

                me.enemyBullets[me.enemyBulletIdx].angle = me.enemyBullets[me.enemyBulletIdx].step.heading() + PI;

                me.enemyBulletIdx++;
                if (me.enemyBulletIdx > 5) {
                    me.enemyBulletIdx = 0;
                }
            }
        };

        //other functions
        personObj.prototype.move = function () {
            var gridX = floor(this.x / 20);
            var gridY = floor(this.y / 20);
            var collision = false;
            for (var k = 0; k < boundaries.length; k++) {
                if (person.x - 5 < boundaries[k].x + 20 && person.x + 5 > boundaries[k].x && person.y - 5 < boundaries[k].y + 20 && person.y + 30 > boundaries[k].y) {
                    collision = true;
                }
            }
            if (keyArray[LEFT] === 1 && collision === false) {
                this.x = this.x - 1;
            }
            if (keyArray[RIGHT] === 1 && collision === false) {
                this.x = this.x + 1;
            }
            if (keyArray[UP] === 1 && collision === false) {
                this.y = this.y - 1;
            }
            if (keyArray[DOWN] === 1 && collision === false) {
                this.y = this.y + 1;
            }
            if (keyArray[LEFT] === 1 && collision === true) {
                this.x = this.x + 5;
            }
            if (keyArray[RIGHT] === 1 && collision === true) {
                this.x = this.x - 5;
            }
            if (keyArray[UP] === 1 && collision === true) {
                this.y = this.y + 5;
            }
            if (keyArray[DOWN] === 1 && collision === true) {
                this.y = this.y - 5;
            }
            if (floor(this.x / 20) !== gridX || floor(this.y / 20) !== gridY || currentCover[0].x === -1) {
                //Re-evaluate cover options
                evaluateCover();
            }

            //collision check with player for loss
            for (var i = 0; i < enemies.length; i++) {
                if (dist(this.x, this.y, enemies[i].position.x, enemies[i].position.y) < 25 && (enemies[i].dead === 0)) {
                    person.curHealth -= 1;
                    //this.dead = 1;
                }
            }
        };
        //object draws
        boundaryObj.prototype.draw = function () {
            image(images[0], this.x, this.y, 20, 20);
        };

        enemyObj.prototype.draw = function () {
            noFill();
            stroke(0, 0, 0);
            if ((bugDebug && this.type === 0) || (eyeDebug && this.type === 1)) {
                for (var i = 0; i < this.path.length; i++) {
                    rect(this.path[i].x * 20, this.path[i].y * 20, 20, 20);
                }
                if (this.currState !== 3 && this.currState !== 4) {
                    ellipse(this.anchorPoint.x, this.anchorPoint.y, 2 * this.anchorDistance, 2 * this.anchorDistance);
                }
                rect(this.path[0].x * 20, this.path[0].y * 20, 20, 20);
                stroke(255, 0, 0);
                ellipse(this.position.x, this.position.y, 2 * this.losDistance, 2 * this.losDistance);
                if (bugDebug && this.type === 0) {
                    stroke(255, 100, 0);
                    ellipse(this.position.x, this.position.y, 2 * this.losDistance + 100, 2 * this.losDistance + 100);
                }
                stroke(0, 255, 0);
                ellipse(this.position.x, this.position.y, 2 * this.hearingDistance, 2 * this.hearingDistance);
            }
            noStroke();
            if (eyeDebug && this.type === 1) {
                fill(255, 0, 0);
                for (var i = 0; i < allCover.length; i++) {
                    rect(allCover[i].x * 20, allCover[i].y * 20, 20, 20);
                }
                for (var i = 0; i < currentCover.length; i++) {
                    fill(0, 255, 0);
                    rect(currentCover[i].x * 20, currentCover[i].y * 20, 20, 20);
                }
                fill(255, 255, 0);
                rect(this.coverPoint.x * 20, this.coverPoint.y * 20, 20, 20);
                fill(0, 0, 255);
                rect(this.vantagePoint.x * 20, this.vantagePoint.y * 20, 20, 20);
            }
            noStroke();
            pushMatrix();
            translate(this.position.x, this.position.y);
            rotate(this.angle);

            if (enemyDebug === true) {
                //testing for boundry of enemy
                fill(255, 0, 0);
                rect(0 - 15, 0 - 10, 30, 22);
                //
                //testing for enemy health
                fill(222, 16, 43);
                textSize(25);
                text(this.health, -10, -20);
                fill(0, 16, 43);
                text(this.armor, 10, -20);
                //  

            }

            if (this.type === 0) {//melee
                //fill(0, 255, 0);
                noStroke();
                pushMatrix();
                translate(-20, -20);
                scale(0.1);
                switch (this.walkState) {
                    case 0:
                        fill(117, 5, 108);
                        rect(133, 95, 20, 20, 0); //top spikes
                        rect(171, 89, 20, 20, 0);
                        rect(202, 84, 20, 20, 0);
                        rect(236, 88, 20, 20, 0);
                        rect(268, 95, 20, 20, 0);
                        rect(297, 107, 20, 20, 0);
                        rect(324, 125, 20, 20, 0);
                        rect(344, 147, 20, 20, 0);

                        rect(133, 286, 20, 20, 0); //bottom spikes
                        rect(171, 293, 20, 20, 0);
                        rect(202, 298, 20, 20, 0);
                        rect(236, 293, 20, 20, 0);
                        rect(268, 282, 20, 20, 0);
                        rect(297, 273, 20, 20, 0);
                        rect(324, 256, 20, 20, 0);
                        rect(344, 233, 20, 20, 0);

                        fill(0, 76, 138);
                        ellipse(200, 200, 350, 200); //body

                        fill(0, 0, 0);
                        ellipse(111, 151, 50, 50); //eyes
                        ellipse(111, 243, 50, 50);
                        fill(255, 0, 255);
                        ellipse(111, 151, 45, 25);//pupils
                        ellipse(111, 243, 45, 25);

                        fill(117, 5, 108);
                        rect(136, 193, 20, 10, 5); //spots on back
                        rect(111, 193, 20, 10, 5);
                        rect(164, 193, 20, 10, 5);
                        rect(198, 193, 20, 10, 5);
                        rect(242, 193, 20, 10, 5);
                        rect(299, 193, 20, 10, 5);
                        rect(354, 193, 20, 10, 5);

                        fill(145, 0, 0);
                        ellipse(35, 200, 20, 57); //mouth
                        quad(10, 52, 66, 137, 111, 115, 107, 117); //horns
                        quad(10, 348, 72, 308, 111, 283, 64, 262);

                        stroke(0, 0, 0);
                        strokeWeight(3);
                        line(21, 66, 33, 69);
                        line(26, 75, 48, 79);
                        line(36, 87, 64, 91);
                        line(45, 103, 88, 106);
                        line(59, 124, 93, 123);

                        line(96, 291, 81, 271);
                        line(81, 300, 60, 271);
                        line(51, 288, 65, 310);
                        line(38, 307, 48, 320);
                        line(24, 328, 28, 333);
                        break;
                    case 1:
                        fill(117, 5, 108);
                        rect(119, 100, 20, 20, 0);
                        rect(151, 95, 20, 20, 0); //top spikes
                        rect(182, 89, 20, 20, 0);
                        rect(216, 84, 20, 20, 0);
                        rect(249, 88, 20, 20, 0);
                        rect(277, 98, 20, 20, 0);
                        rect(305, 110, 20, 20, 0);
                        rect(335, 134, 20, 20, 0);

                        rect(124, 282, 20, 20, 0);
                        rect(151, 289, 20, 20, 0); //bottom spikes
                        rect(182, 293, 20, 20, 0);
                        rect(216, 298, 20, 20, 0);
                        rect(249, 293, 20, 20, 0);
                        rect(277, 282, 20, 20, 0);
                        rect(304, 269, 20, 20, 0);
                        rect(335, 246, 20, 20, 0);

                        fill(0, 76, 138);
                        ellipse(200, 200, 350, 200); //body

                        fill(0, 0, 0);
                        ellipse(111, 151, 50, 50); //eyes
                        ellipse(111, 243, 50, 50);
                        fill(255, 0, 255);
                        ellipse(111, 151, 45, 25);//pupils
                        ellipse(111, 243, 45, 25);

                        fill(117, 5, 108);
                        rect(136, 193, 20, 10, 5); //spots on back
                        rect(111, 193, 20, 10, 5);
                        rect(164, 193, 20, 10, 5);
                        rect(198, 193, 20, 10, 5);
                        rect(242, 193, 20, 10, 5);
                        rect(299, 193, 20, 10, 5);
                        rect(354, 193, 20, 10, 5);

                        fill(145, 0, 0);
                        ellipse(35, 200, 20, 57);
                        quad(10, 52, 66, 137, 111, 115, 107, 117);
                        quad(10, 348, 72, 308, 111, 283, 64, 262);

                        stroke(0, 0, 0);
                        strokeWeight(3);
                        line(24, 70, 40, 74);
                        line(32, 82, 58, 86);
                        line(41, 96, 78, 99);
                        line(53, 115, 104, 116);
                        line(64, 131, 76, 131);

                        line(87, 296, 64, 265);
                        line(74, 305, 55, 279);
                        line(46, 296, 60, 314);
                        line(33, 314, 43, 325);
                        line(22, 333, 26, 336);
                        break;
                }
                strokeWeight(1);
                if (this.currFrame < (frameCount - 10)) {
                    this.currFrame = frameCount;
                    this.walkState++;
                    if (this.walkState > 1) {
                        this.walkState = 0;
                    }
                }
                popMatrix();
            }
            else if (this.type === 1) {//shooter
                //fill(0, 0, 255);
                noStroke();
                pushMatrix();
                translate(-20, -20);
                scale(0.1);

                noStroke();
                switch (this.walkState) {
                    case 0:
                        fill(0, 255, 13);
                        ellipse(200, 200, 300, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 278, 300);

                        fill(32, 230, 42);
                        ellipse(200, 200, 250, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 225, 300);

                        fill(67, 176, 72);
                        ellipse(200, 200, 200, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 175, 300);

                        fill(69, 112, 71);
                        ellipse(200, 200, 150, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 125, 300);

                        fill(49, 66, 50);
                        ellipse(200, 200, 100, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 75, 300);

                        //inner
                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 60);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 50);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 40);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 30);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 20);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 10);

                        fill(0, 0, 0);
                        ellipse(200, 200, 10, 10);

                        fill(24, 135, 32);
                        rect(188, 57, 24, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(175, 93, 49, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(171, 114, 57, 10, 100);
                        rect(167, 136, 65, 10, 100);
                        rect(165, 157, 69, 10, 100);

                        rect(165, 235, 69, 10, 100);
                        rect(167, 254, 65, 10, 100);
                        rect(171, 272, 57, 10, 100);
                        rect(176, 289, 49, 10, 100);
                        rect(181, 305, 37, 10, 100);
                        rect(188, 323, 24, 10, 100);
                        break;
                    case 1:
                        fill(32, 230, 42);
                        ellipse(200, 200, 300, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 278, 300);

                        fill(67, 176, 72);
                        ellipse(200, 200, 250, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 225, 300);

                        fill(69, 112, 71);
                        ellipse(200, 200, 200, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 175, 300);

                        fill(49, 66, 50);
                        ellipse(200, 200, 150, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 125, 300);

                        fill(0, 255, 13);
                        ellipse(200, 200, 100, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 75, 300);

                        //inner
                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 60);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 50);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 40);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 30);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 20);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 10);

                        fill(0, 0, 0);
                        ellipse(200, 200, 10, 10);

                        fill(24, 135, 32);
                        rect(188, 57, 24, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(175, 93, 49, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(171, 114, 57, 10, 100);
                        rect(167, 136, 65, 10, 100);
                        rect(165, 157, 69, 10, 100);

                        rect(165, 235, 69, 10, 100);
                        rect(167, 254, 65, 10, 100);
                        rect(171, 272, 57, 10, 100);
                        rect(176, 289, 49, 10, 100);
                        rect(181, 305, 37, 10, 100);
                        rect(188, 323, 24, 10, 100);
                        break;
                    case 2:
                        fill(67, 176, 72);
                        ellipse(200, 200, 300, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 278, 300);

                        fill(69, 112, 71);
                        ellipse(200, 200, 250, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 225, 300);

                        fill(49, 66, 50);
                        ellipse(200, 200, 200, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 175, 300);

                        fill(0, 255, 13);
                        ellipse(200, 200, 150, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 125, 300);

                        fill(32, 230, 42);
                        ellipse(200, 200, 100, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 75, 300);

                        //inner
                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 60);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 50);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 40);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 30);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 20);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 10);

                        fill(0, 0, 0);
                        ellipse(200, 200, 10, 10);

                        fill(24, 135, 32);
                        rect(188, 57, 24, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(175, 93, 49, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(171, 114, 57, 10, 100);
                        rect(167, 136, 65, 10, 100);
                        rect(165, 157, 69, 10, 100);

                        rect(165, 235, 69, 10, 100);
                        rect(167, 254, 65, 10, 100);
                        rect(171, 272, 57, 10, 100);
                        rect(176, 289, 49, 10, 100);
                        rect(181, 305, 37, 10, 100);
                        rect(188, 323, 24, 10, 100);
                        break;
                    case 3:
                        fill(69, 112, 71);
                        ellipse(200, 200, 300, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 278, 300);

                        fill(49, 66, 50);
                        ellipse(200, 200, 250, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 225, 300);

                        fill(0, 255, 13);
                        ellipse(200, 200, 200, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 175, 300);

                        fill(32, 230, 42);
                        ellipse(200, 200, 150, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 125, 300);

                        fill(67, 176, 72);
                        ellipse(200, 200, 100, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 75, 300);

                        //inner
                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 60);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 50);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 40);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 30);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 20);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 10);

                        fill(0, 0, 0);
                        ellipse(200, 200, 10, 10);

                        fill(24, 135, 32);
                        rect(188, 57, 24, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(175, 93, 49, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(171, 114, 57, 10, 100);
                        rect(167, 136, 65, 10, 100);
                        rect(165, 157, 69, 10, 100);

                        rect(165, 235, 69, 10, 100);
                        rect(167, 254, 65, 10, 100);
                        rect(171, 272, 57, 10, 100);
                        rect(176, 289, 49, 10, 100);
                        rect(181, 305, 37, 10, 100);
                        rect(188, 323, 24, 10, 100);
                        break;
                    case 2:
                        fill(67, 176, 72);
                        ellipse(200, 200, 300, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 278, 300);

                        fill(69, 112, 71);
                        ellipse(200, 200, 250, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 225, 300);

                        fill(49, 66, 50);
                        ellipse(200, 200, 200, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 175, 300);

                        fill(0, 255, 13);
                        ellipse(200, 200, 150, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 125, 300);

                        fill(32, 230, 42);
                        ellipse(200, 200, 100, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 75, 300);

                        //inner
                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 60);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 50);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 40);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 30);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 20);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 10);

                        fill(0, 0, 0);
                        ellipse(200, 200, 10, 10);

                        fill(24, 135, 32);
                        rect(188, 57, 24, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(175, 93, 49, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(171, 114, 57, 10, 100);
                        rect(167, 136, 65, 10, 100);
                        rect(165, 157, 69, 10, 100);

                        rect(165, 235, 69, 10, 100);
                        rect(167, 254, 65, 10, 100);
                        rect(171, 272, 57, 10, 100);
                        rect(176, 289, 49, 10, 100);
                        rect(181, 305, 37, 10, 100);
                        rect(188, 323, 24, 10, 100);
                        break;
                    case 4:
                        fill(49, 66, 50);
                        ellipse(200, 200, 300, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 278, 300);

                        fill(0, 255, 13);
                        ellipse(200, 200, 250, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 225, 300);

                        fill(32, 230, 42);
                        ellipse(200, 200, 200, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 175, 300);

                        fill(67, 176, 72);
                        ellipse(200, 200, 150, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 125, 300);

                        fill(69, 112, 71);
                        ellipse(200, 200, 100, 300);
                        fill(0, 174, 255);
                        ellipse(200, 200, 75, 300);

                        //inner
                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 60);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 50);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 40);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 30);

                        fill(40, 184, 0);
                        ellipse(200, 200, 74, 20);
                        fill(0, 255, 225);
                        ellipse(200, 200, 74, 10);

                        fill(0, 0, 0);
                        ellipse(200, 200, 10, 10);

                        fill(24, 135, 32);
                        rect(188, 57, 24, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(175, 93, 49, 10, 100);
                        rect(181, 73, 37, 10, 100);
                        rect(171, 114, 57, 10, 100);
                        rect(167, 136, 65, 10, 100);
                        rect(165, 157, 69, 10, 100);

                        rect(165, 235, 69, 10, 100);
                        rect(167, 254, 65, 10, 100);
                        rect(171, 272, 57, 10, 100);
                        rect(176, 289, 49, 10, 100);
                        rect(181, 305, 37, 10, 100);
                        rect(188, 323, 24, 10, 100);
                        break;
                }
                if (this.currFrame < (frameCount - 10)) {
                    this.currFrame = frameCount;
                    this.walkState++;
                    if (this.walkState > 4) {
                        this.walkState = 0;
                    }
                }

                popMatrix();

            }

            popMatrix();
        };
        personObj.prototype.draw = function () {
            if (debugMode === true) {
                ////person boundry box
                fill(0, 255, 255);
                rect(this.x - 5, this.y - 5, 10, 35);
                //
            }
            noStroke();
            pushMatrix();
            translate(this.x + -39, this.y -20);
            scale(0.2);
            switch (this.walkState) {
                case 0: //looking forward down guy
                noStroke();
                fill(99, 97, 97);
                rect(179,52,40,47,100);
                rect(166,95,64,133,289);
                rect(200,208,29,114,120);
                rect(168,208,29,114,120);
                ellipse(155,140,31,63);
                triangle(162,89,212,116,144,131);
                triangle(240,89,193,119,247,125);
                ellipse(240,140,31,63);
                fill(112, 104, 104);
                ellipse(229,165,46,20);
                ellipse(168,165,46,20);
                fill(255, 0, 0);
                ellipse(199,63,28,2);
                fill(74, 74, 74);
                rect(200,303,32,25,20);
                rect(165,303,32,25,20);
                break;
            
                case 1://
                noStroke();
                fill(99, 97, 97);
                rect(179,52,40,47,100);
                rect(166,95,64,133,289);
                rect(201,208,29,64,120);
                rect(168,208,29,114,120);
                ellipse(155,140,31,63);
                triangle(162,89,212,116,144,131);
                triangle(240,89,193,119,247,125);
                ellipse(240,140,31,63);
                fill(112, 104, 104);
                ellipse(229,165,46,20);
                ellipse(168,165,46,20);
                fill(255, 0, 0);
                ellipse(199,63,28,2);
                fill(74, 74, 74);
                rect(203,267,25,5,20);
                rect(167,311,32,16,20);
                fill(92, 87, 87);
                
                break;
                case 2: //looking forward down guy
                noStroke();
                fill(99, 97, 97);
                rect(179,52,40,47,100);
                rect(166,95,64,133,289);
                rect(200,208,29,114,120);
                rect(168,208,29,114,120);
                ellipse(155,140,31,63);
                triangle(162,89,212,116,144,131);
                triangle(240,89,193,119,247,125);
                ellipse(240,140,31,63);
                fill(112, 104, 104);
                ellipse(229,165,46,20);
                ellipse(168,165,46,20);
                fill(255, 0, 0);
                ellipse(199,63,28,2);
                fill(74, 74, 74);
                rect(200,303,32,25,20);
                rect(165,303,32,25,20);
                break;
                
                case 3://
                noStroke();
                fill(99, 97, 97);
                rect(179,52,40,47,100);
                rect(166,95,64,133,289);
                rect(166,208,29,64,120);
                rect(203,208,29,114,120);
                ellipse(155,140,31,63);
                triangle(162,89,212,116,144,131);
                triangle(240,89,193,119,247,125);
                ellipse(240,140,31,63);
                fill(112, 104, 104);
                ellipse(229,165,46,20);
                ellipse(168,165,46,20);
                fill(255, 0, 0);
                ellipse(199,63,28,2);
                fill(74, 74, 74);
                rect(168,267,25,5,20);
                rect(204,311,32,16,20);
                break;
    }
    
    if (this.currFrame < (frameCount - 10)) 
    {
        this.currFrame = frameCount; 
        this.walkState++;
        if (this.walkState > 3) 
    {
            this.walkState = 0;
        }
    }
            popMatrix();

        };

        gunObj.prototype.draw = function () {
            this.x = person.x;
            this.y = person.y;

            gun.step.set(mouseX - gun.x - canvasX, mouseY - gun.y - 10 - canvasY);
            gun.step.normalize();
            this.angle = gun.step.heading();
            //green dot for pivot point
            fill(0, 255, 0);
            ellipse(this.x, this.y + 10, 3, 3);

            pushMatrix();
            translate(this.x, this.y + 10);
            rotate(this.angle);
            //fill(0, 0, 0);
            //rect(0, -2.5, 20, 5);
            pushMatrix();
            scale(0.1);
            translate(-27, -175);
            fill(128, 123, 121);
            noStroke();
            rect(39, 170, 275, 38, 100); //Main
            rect(223, 204, 43, 74, 6); //Clip front
            rect(47, 204, 83, 56, 6); //stalk
            rect(43, 193, 12, 38, 6);//little back piece of stalk
            fill(194, 72, 72);
            rect(51, 195, 238, 9, 100); //red lining in main
            fill(59, 50, 50);
            rect(129, 183, 238, 9, 100); //Barrels
            rect(129, 177, 233, 9, 100);
            rect(284, 194, 65, 9, 100);
            rect(300, 188, 73, 9, 100);

            fill(130, 0, 0);
            quad(45, 173, 179, 173, 179, 149, 125, 148); //Aiming thing
            rect(129, 149, 138, 9, 100); //long part of aiming thing
            popMatrix();

            popMatrix();
        };

        bulletObj.prototype.draw = function () {
            pushMatrix();
            translate(this.x, this.y);
            rotate(this.angle);
            fill(0, 255, 0);
            rect(0, 0, 10, 4);
            //this.x += 5;
            popMatrix();

            this.x = cos(this.angle) * 5 + this.x;
            this.y = sin(this.angle) * 5 + this.y;

            //unit collision for bullets

            for (var i = 0; i < enemies.length; i++) {
                if ((enemies[i].dead === 0) && (this.x > enemies[i].position.x - 15) && (this.x + 10 < enemies[i].position.x + 15) && (this.y > enemies[i].position.y - 10) && (this.y + 4 < enemies[i].position.y + 12)) {
                    var takenDmg = this.damage - enemies[i].armor;
                    if (takenDmg > 0) {
                        enemies[i].health -= takenDmg;
                    }
                    else {
                        enemies[i].health -= 1;
                    }
                    this.fire = 0;
                }
                if (enemies[i].health <= 0) {
                    enemies[i].dead = 1;
                }
            }
        };
        ebulletObj.prototype.draw = function () {
            pushMatrix();
            translate(this.x, this.y);
            rotate(this.angle);
            fill(0, 0, 255);
            ellipse(0, 0, 4, 4);
            //this.x += 5;
            popMatrix();

            this.x = cos(this.angle) * 5 + this.x;
            this.y = sin(this.angle) * 5 + this.y;


        };

        //mouse and keyboard functions
        mouseClicked = function () {
            mClicked = true;
        };
        mousePressed = function () {
            mPressed = true;
        };
        mouseReleased = function () {
            mPressed = false;
        };
        var keyPressed = function () {
            keyArray[keyCode] = 1;
        };
        var keyReleased = function () {
            keyArray[keyCode] = 0;
        };

        //Object Instantions
        var game = new gameObj();

        //Main Draw
        var draw = function () {
            game.state[game.curState].execute(game);
            mClicked = false;
        };

        ////////////////////

    }
};
