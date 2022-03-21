function add() {
    background_img_tag = new Image();
    background_img_tag.onLoad = uploadBackgorund;
    background_img_tag.src = background_imgage;

    rover_img_tag = new Image();
    rover_img_tag.onLoad = uploadRover;
    rover_img_tag.src = rover_imgage;

}
function uploadBackgorund(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown , my_keydown");

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
        up();
        console.log("up");
    }
    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up()
{
    if (rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackgorund();
        uploadRover();
    }
}
function down()
{
    if (rover_y <=500)
    {
        rover_y = rover_y+ 10;
        console.log("When down arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackgorund();
        uploadRover();
    }
}
function left()
{
    if (rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackgorund();
        uploadRover();
    }
}
function right()
{
    if (rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackgorund();
        uploadRover();
    }
}