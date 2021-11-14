var buttong, buttonb,buttonJust, buttonImg, button1;
var girlRunsAnime, girlsRunningIMG, girlRunningImg, girlRuns;
var boyRunsAnime, boyRuns, boyRunningIMG, boyRunningImg;
var plastic, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, plasticsGroup;
var sapling, saplingImg, saplingsGroup;
var scene1Img, scene2Img, scene3Img, scene1, scene2, scene3;
var clouds, cloud1Img, cloud2Img, cloud3Img, cloud4Img, cloud5Img;
var poster, posterAnime;
var authority, authorityImg;
var authorityTalks, authorityTalksImg;
var eyes, eyesImg;
var nose, noseImg;
var instruction_plastic;
var gameState = "choose_character";


function preload() {
    posterAnime = loadImage("Plastic vs You!.gif");
    buttonImg = loadImage("button.png");
    button1 = loadImage("button (1).png");
    girlRunsAnime = loadAnimation("Girl_runs.gif");
    girlRunningImg = loadImage("Girl running.png");
    boyRunsAnime = loadAnimation("Boy runs.gif");
    boyRunningImg = loadImage("boy running.png");
    Img1 = loadImage("use&throwplates.png");
    Img2 = loadImage("straw.png");
    Img3 = loadImage("spoon.png");
    Img4 = loadImage("plasticCup.png");
    Img5 = loadImage("plasticBag2.png");
    Img6 = loadImage("plasticBag.png");
    Img7 = loadImage("fork.png");
    Img8 = loadImage("crushedPlasticCup.png");
    Img9 = loadImage("crushedBottles.png");
    Img10 = loadImage("crushedBottle.png");
    cloud1Img = loadImage("cloud.png");
    cloud2Img = loadImage("cloud1.png");
    cloud3Img = loadImage("cloud2.png");
    cloud4Img = loadImage("cloud4.png");
    cloud5Img = loadImage("cloud5.png");
    saplingImg = loadImage("sapling.png");
    scene1Img = loadImage("scene1.png");
    scene2Img = loadImage("scene2.png");
    scene3Img = loadImage("scene3.png");
    authorityImg = loadImage("Authority_lady.png");
    authorityTalksImg = loadImage("authority talking.gif");
    eyesImg = loadImage("authority eyes.png");
    noseImg = loadImage("nose.png");
    instruction_plastic = loadSound("Recording-_2_.mp3");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    buttong = createSprite(width/4,height/2);
    buttong.addImage(buttonImg);
    buttong.scale = 0.4;
    buttong.visible = false;

    buttonb = createSprite(width*3/4,height/2);
    buttonb.addImage(buttonImg);
    buttonb.scale = 0.4;
    buttonb.visible = false;

    girlsRunningIMG = createSprite(buttong.x,buttong.y-20);
    girlsRunningIMG.addImage(girlRunningImg);
    girlsRunningIMG.scale = 0.6;
    girlsRunningIMG.visible = false;

    boyRunningIMG = createSprite(buttonb.x,buttonb.y-20);
    boyRunningIMG.addImage(boyRunningImg);
    boyRunningIMG.scale = 0.4;
    boyRunningIMG.visible = false;

    poster = createSprite(width/2, height/2);
    poster.addImage(posterAnime);
    poster.scale = 0.5;

    buttonJust = createSprite(width/1.5,height/2);
    buttonJust.addImage(button1);
    buttonJust.scale = 0.2;
    buttonJust.visible = false;
    
}

function draw() {
    background("blue");
    if(gameState === "choose_character"){
        buttong.visible = true;
        buttonb.visible = true;
        girlsRunningIMG.visible = true;
        boyRunningIMG.visible = true;

        fill("yellow");
        textSize(21);
        text("Click the buttons below to choose your gender.",width/2.7,height/10);
    }

    if(mousePressedOver(buttong || girlsRunningIMG) && gameState === "choose_character") {
       gameState = "chooseScene_girl";
       buttong.visible = false;
       buttonb.visible = false;
       girlsRunningIMG.visible = false;
       boyRunningIMG.visible = false;
       poster.visible = false;

    }
    if(mousePressedOver(buttonb || boyRunningIMG) && gameState === "choose_character") {
       gameState = "chooseScene_boy";
       buttong.visible = false;
       buttonb.visible = false;
       girlsRunningIMG.visible = false;
       boyRunningIMG.visible = false;
       poster.visible = false;

    }

    if(gameState === "chooseScene_boy") {
        fill("yellow");
        textSize(21);
        var text1 = text("Boy power!", width/2.1, height/10);
        text1.lifetime = 5;
        chooseScene();
    }

    if(gameState === "chooseScene_girl") {
        fill("yellow");
        textSize(21);
        var text1 = text("Girl power!", width/2.1, height/10);
        text1.lifetime = 5;
        chooseScene();
    }
    if(mousePressedOver(scene1) && (gameState === "chooseScene_girl" || gameState === "chooseScene_boy")) {
        gameState = "instructions";
        scene1.x = scene1.width/2;
        scene1.y = height/2;
        scene1.scale = 1;
        scene2.visible = false;
        scene3.visible = false;
        instructions1();
        buttonJust.visible = true;
    }
    if(mousePressedOver(buttonJust) && gaameState === "instructions") {
        gameState = "plasticGame";

    }
    drawSprites();
}

function chooseScene() {
    scene1 = createSprite(width/50,height/5);
    scene1.addImage(scene1Img);
    scene1.scale = 0.3;

    scene2 = createSprite(width * 3/4,height/5);
    scene2.addImage(scene2Img);
    scene2.scale = 0.4;

    scene3 = createSprite(width/2,height/1.5);
    scene3.addImage(scene3Img);
    scene3.scale = 0.7;

    fill("yellow");
    textSize(21);
    text("Choose a scene from above",width/2.3,height/1.1);
}

function instructions1() {
    authority = createSprite(width/2,height/2);
    authority.addImage(authorityImg);

    authorityTalks = createSprite(authority.x,authority.y+10);
    authorityTalks.addImage(authorityTalksImg);
    authorityTalks.scale = 0.1;

    eyes = createSprite(authority.x,authority.y-75);
    eyes.addImage(eyesImg);
    eyes.scale = 0.18;

    nose = createSprite(authority.x-5,authority.y-40);
    nose.addImage(noseImg);
    nose.scale = 0.2;

    instruction_plastic.play();
}

function playPlasticGame() {
    authority.visible = false;
    authorityTalks.visible = false;
    eyes.visible = false;
    nose.visible = false;
    buttonJust.visible = false;
}