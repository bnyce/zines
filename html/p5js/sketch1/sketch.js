function setup() {
	winX = 500;
	winY = 500;
	createCanvas(winX, winY);
	background(0);
	
	speed_x = 3;
	speed_y = 5;
	circle_x = 0;
	circle_y = 0;
	value = 0;
	
}
function c() {
	circle(circle_x, circle_y, 20);
}
function draw() {

c();

	circle_x = circle_x + 1 * speed_x;
	circle_y = circle_y + 1 * speed_y;
	
	if(circle_x > winX || circle_x < 0) {
		speed_x = -speed_x;
	}	
	if(circle_y > winY || circle_y < 0) {
		speed_y = -speed_y;
	}
}