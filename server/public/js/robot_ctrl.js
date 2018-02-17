var pressed = false;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        if(!pressed) 
            upClick();
    }
    else if (e.keyCode == '40') {
        if(!pressed) 
            downClick()
    }
    else if (e.keyCode == '37') {
        if(!pressed) 
            leftClick()
    }
    else if (e.keyCode == '39') {
        if(!pressed) 
            rightClick()
    }
}

function doneClick(e) {
    pressed = false;
    move(0, 0);
}

function upClick(e) {
    pressed = true;
    move(1, 1);
    console.log('up')    
}

function downClick(e) {
    pressed = true;
    move(-1, -1);
    console.log('down')    
}

function leftClick(e) {
    pressed = true;
    move(-1, 1);
    console.log('left')    
}

function rightClick(e) {
    pressed = true;
    move(1, -1);
    console.log('right')    
}

function move(left, right) {
    $.post("robot/controls", { "left": left, "right": right });
}


$(document).ready(function() {              
    document.onkeydown = checkKey;
    document.onkeyup = (e) => {
        doneClick();
    };
    
    $("#up").mousedown(upClick).mouseup(doneClick);
    $("#left").mousedown(leftClick).mouseup(doneClick);
    $("#right").mousedown(rightClick).mouseup(doneClick);
    $("#down").mousedown(downClick).mouseup(doneClick);
});