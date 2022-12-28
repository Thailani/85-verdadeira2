canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_heigth = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imgTag = new Image();
    background_imgTag.onlod = uploadBackground;
    background_imgTag.src = background_image;
    
    background_imgTag = new Image();
    background_imgTag = uploadBackground;
    background_imgTag.src = background_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_heigth);	

}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
    if(greencar_y >=0)
    {
        greencar_y = 10;
        console.log("Quando direcional cima for pressionada, x = " + greencar_x + " | y = " +greencar_y );
         uploadBackground();
         uploadgreencar();
    }
}

function down()
{
	if(rover_y <=500)
      { 
        rover_y =rover_y+ 10; 
        console.log("Quando direcional baixo for pressionada, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover(); 
        }
}

function left()
{
	
	if(rover_x >= 0) 
	{
	   rover_x =rover_x - 10;
	   console.log("Quando direcional esquerda for pressionada, x = " + rover_x + " | y = " +rover_y);
	   uploadBackground();
	   uploadrover();
	}
}

function right()
{
	
}
