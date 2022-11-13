var last_position_of_x, last_position_of_y;


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width=screen.width;
    new_width=screen.width-70;
    new_height=screen.height-300;

    if (width<992)
    {

         document.getElementById("myCanvas").width=new_width;
         document.getElementById("myCanvas").height=new_height;
         document.body.style.overflow="hidden";

    }
    canvas.addEventListener("touchstart" , my_touchstart);
    
    function my_touchstart(e)
    {
        
        console.log("touchstart");
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y= e.touches[0].clientY-canvas.offsetTop;

    }
   
    canvas.addEventListener("touchmove" , my_touchmove);
    function my_touchmove(e)
    {
         console.log("my_touchmove");
         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){

    mouse_event="mouseDown";

}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e){

    mouse_event="mouseUp";

}

canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e){

    mouse_event="mouseLeave";

}

canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e){

    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouse_event == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth = width_of_line;
        
        console.log("last position of x="+last_position_of_x+"last position of y="+last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);

        console.log("current position of x="+current_position_of_x+"current position of y="+current_position_of_y);
        ctx.lineTo(current_position_of_x , current_position_of_y);
        ctx.stroke();

    }

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;

}





