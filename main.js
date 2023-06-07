function preload() {
	gameover = loadSound("gameover.wav")
	jump = loadSound("jump.wav")
    kick = loadSound("kick.wav")
	scoin = loadSound("coin.wav")
	marioDie = loadSound("mariodie.wav")
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("jogo")

	video = createCapture(VIDEO)
	video.size(600,250)
	video.parent("vc")
	posenet = ml5.poseNet( video , modelo)
	posenet.on("pose", result )
}

function modelo(){
	console.log("AAAAA")
}

function result(lah){
	if(lah.length > 0){
		noseX = lah[0].pose.nose.x 
		noseY = lah[0].pose.nose.y
	}
}

function draw() {
	game()
}






