var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(400, 400);
        frameRate(60);


        ///////////////////
        //Globals
        angleMode = "radians";
        var bugDebug = true;
        var eyeDebug = true;

        
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
            "b              b                                           b",
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

        var bulletObj = function () {
            this.x = 0;
            this.y = 0;
            this.angle = 0;
            this.fire = 0;

            this.damage = 0;
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
            background(0, 0, 0);
            noStroke();

            pushMatrix();
            translate(0, 23); //translates whole figure
            fill(112, 112, 112);
            ellipse(200, 135, 43, 63);
            ellipse(200, 196, 36, 55);
            beginShape();
            vertex(192, 147);
            bezierVertex(222, 198, 177, 192, 159, 175);
            bezierVertex(178, 174, 183, 162, 192, 147);
            endShape();
            beginShape();
            vertex(209, 151);
            bezierVertex(178, 154, 194, 205, 239, 174);
            bezierVertex(223, 177, 209, 165, 209, 151);
            endShape();
            beginShape();
            vertex(189, 180);
            bezierVertex(178, 154, 163, 200, 190, 219);
            bezierVertex(220, 221, 206, 209, 189, 180);
            endShape();
            beginShape();
            vertex(199, 179);
            bezierVertex(239, 159, 223, 213, 208, 227);
            bezierVertex(178, 213, 202, 205, 199, 179);
            endShape();
            //right arm
            pushMatrix();
            translate(230, 188);
            rotate(0.6);
            ellipse(0, 0, 45, 18);
            popMatrix();

            pushMatrix();
            translate(241, 209);
            rotate(1.6);
            ellipse(0, 0, 45, 18);
            popMatrix();
            //left arm
            pushMatrix();
            translate(170, 188);
            rotate(2.5);
            ellipse(0, 0, 45, 18);
            popMatrix();

            pushMatrix();
            translate(166, 213);
            rotate(1.0);
            ellipse(0, 0, 45, 18);
            popMatrix();

            popMatrix();

            if (mouseX > 156 && mouseX < 250 && mouseY > 243 && mouseY < 278) {
                fill(56, 53, 54);
            }
            else {
                fill(61, 58, 59);
            }
            rect(156, 243, 94, 35);

            //text
            fill(222, 16, 43);
            textSize(60);
            text("Warframe", 68, 70);
            textSize(40);
            text("The Beginning", 70, 345);
            textSize(19);
            fill(235, 232, 233);
            text("Launch", 173, 267);
            textSize(10);
            fill(235, 232, 233);
            text("Andrew Gidzinski Tom Otgonbayar Thomas Sudlow", 83, 367);

            //check if button clicked for next state
            if (mouseX > 156 && mouseX < 250 && mouseY > 243 && mouseY < 278 && mPressed === true) {
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
            text("Use the arrow keys to move your\ncharacter. Click to shoot. You win the\nroundwhen you kill all of the enemies.\nYou lose and are returned to the character\npage when you lose all of your life. You\ngain points to improve your character\nafter you win the round, gain none if you\nnlose the round. To spend the points, click\nthe + next to each attribute. The enemies\nwill scale in difficulty based on how many\npoints you have spent on your character.\nSave saves your current points spent,\nundo will return the points you spent.", 20, 30);
            rect(110, 326, 175, 35);
            fill(0, 0, 0);
            text("Back to upgrades", 120, 350);
            if (mouseX > 110 && mouseX < 285 && mouseY > 326 && mouseY < 361 && mClicked === true) {
                me.changeState(3);
            }

        };
        upgradeMenuState.prototype.execute = function (me) {

            background(0, 0, 0);
            fill(222, 16, 43);
            textSize(25);
            text("Health: " + phealth, 20, 70);
            text("Normal Damage: " + pnormal, 20, 95);
            text("Elite Damage: " + pelite, 20, 120);
            text("Critical Hit %: " + pcritp, 20, 145);
            text("Critical Hit Mult: " + pcritm, 20, 170);
            text("Points Spent: " + savedpts, 20, 220);
            text("Points Available: " + availpts, 20, 245);

            text(" +10", 320, 70);
            text(" +1", 320, 95);
            text(" +1", 320, 120);
            text(" +0.01", 320, 145);
            text(" +0.1", 320, 170);

            //buttons
            if (mouseX > 300 && mouseX < 320 && mouseY > 50 && mouseY < 70 && mClicked === true && availpts > 0) {
                phealth += 10;
                availpts -= 1;
                savedpts += 1;

            }
            if (mouseX > 300 && mouseX < 320 && mouseY > 75 && mouseY < 90 && mClicked === true && availpts > 0) {
                pnormal += 1;
                availpts -= 1;
                savedpts += 1;
            }
            if (mouseX > 300 && mouseX < 320 && mouseY > 100 && mouseY < 120 && mClicked === true && availpts > 0) {
                pelite += 1;
                availpts -= 1;
                savedpts += 1;
            }
            if (mouseX > 300 && mouseX < 320 && mouseY > 125 && mouseY < 145 && mClicked === true && availpts > 0) {
                pcritp += 0.01;
                availpts -= 1;
                savedpts += 1;
            }
            if (mouseX > 300 && mouseX < 320 && mouseY > 150 && mouseY < 170 && mClicked === true && availpts > 0) {
                pcritm += 0.1;
                availpts -= 1;
                savedpts += 1;
            }
            rect(300, 50, 20, 20);
            rect(300, 75, 20, 20);
            rect(300, 100, 20, 20);
            rect(300, 125, 20, 20);
            rect(300, 150, 20, 20);

            rect(52.5, 300, 70, 35);
            rect(127.5, 300, 70, 35);
            rect(202.5, 300, 70, 35);
            rect(277.5, 300, 70, 35);

            fill(0, 0, 0);
            text("Start", 60, 325);
            text("Help", 137, 325);
            text("Save", 208, 325);
            text("Undo", 283.5, 325);

            text("+", 304, 70);
            text("+", 304, 95);
            text("+", 304, 120);
            text("+", 304, 145);
            text("+", 304, 170);

            //bottom 4 button checks
            //start
            if (mouseX > 52.5 && mouseX < 122.5 && mouseY > 300 && mouseY < 370 && mClicked === true) {
                me.changeState(4);
                spawn();
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

            pushMatrix();
            translate(canvasX, canvasY);

            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].draw();
            }
            for (var i = 0; i < enemies.length; i++) {
                if (enemies[i].dead === 0) {//draw enemies if not dead
                    enemies[i].draw();
                    enemies[i].state[enemies[i].currState].execute(enemies[i]);
                }
            }
            person.draw();
            person.move();
            ////bullet code
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
            for (i = 0; i < playerBullets.length; i++) {
                if (playerBullets[i].fire === 1) {
                    playerBullets[i].draw();
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

            rect(299-canvasX-(canvasX/12),299-canvasY-(canvasY/12), 33.3,33.3);
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
        };


        //other functions
        personObj.prototype.move = function () {
            var gridX = floor(this.x / 20);
            var gridY = floor(this.y / 20);
            if (keyArray[LEFT] === 1) {
                this.x = this.x - 1;
            }
            if (keyArray[RIGHT] === 1) {
                this.x = this.x + 1;
            }
            if (keyArray[UP] === 1) {
                this.y = this.y - 1;
            }
            if (keyArray[DOWN] === 1) {
                this.y = this.y + 1;
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
            //ellipse(0, 0, 20, 20);
            //ellipse(0, 5, 30, 15);

            popMatrix();
        };
        personObj.prototype.draw = function () {
            fill(0, 0, 0);
            noStroke();
            ellipse(this.x, this.y, 10, 10);
            rect(this.x - 1.5, this.y, 2, 17);
            switch (this.walkState) {
                case 0:
                    fill(255, 255, 255);
                    noStroke();
                    triangle(this.x - 5, this.y + 28, this.x - 0, this.y + 16, this.x + 5, this.y + 28);

                    fill(0, 0, 0);
                    triangle(this.x - 5, this.y + 28, this.x - 0, this.y + 16, this.x + 5, this.y + 28);
                    fill(255, 255, 255);
                    triangle(this.x - 3, this.y + 28, this.x - 0, this.y + 21, this.x + 3, this.y + 28);
                    break;

                case 1:
                    fill(255, 255, 255);
                    noStroke();
                    triangle(this.x - 5, this.y + 28, this.x - 0, this.y + 16, this.x + 5, this.y + 28);

                    fill(0, 0, 0);
                    triangle(this.x - 3, this.y + 28, this.x - 0, this.y + 16, this.x + 2, this.y + 28);
                    fill(255, 255, 255);
                    triangle(this.x - 1, this.y + 28, this.x - 0, this.y + 21, this.x + 1, this.y + 28);
                    break;
            }

            if (this.currFrame < (frameCount - 10)) {
                this.currFrame = frameCount; this.walkState++;
                if (this.walkState > 1) {
                    this.walkState = 0;
                }
            }

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
