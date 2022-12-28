function setup() {
	frameRate(2);
	i = 0;
	winX = 500;
	winY = 500;
	createCanvas(winX, winY);
	background(0);
	
	grid = 10;
	check = winX / grid; // 500 / 10 = 50
	bigcheck = check * 3;
	
}
function grid_a(x = 0,y = 0) {
	rect(x,y,check,check);
	ellipse(x,y,check,check);
}
function grid_b(x = 0, y = 0){
push();
translate(x,y);
grid_a(0,0);
fill('red'); // or fill(255,0,0) or fill(255,0,0,255)
grid_a(check * 2,0);
fill('green');
grid_a(check,check);
fill('blue');
grid_a(0,check * 2);
fill(0,0,255,102); //RGB, alpha (by default on scale to 255, but can be normalized to max 100)
grid_a(check * 2, check * 2);
pop();
}
function grid_c(x = 0, y = 0) {

grid_b();
grid_b(bigcheck * 2);	
grid_b(bigcheck,bigcheck);
grid_b(0,bigcheck * 2);
grid_b(bigcheck * 2,bigcheck * 2);
pop();
}
function draw() {
//noLoop();
grid_c();
i++;
if(i > 10) {
	clear();
	i = 0;
}
}