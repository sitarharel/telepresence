document.onkeydown = checkKey;
document.onkeyup = (e) => {
    console.log("done")
};

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log('up')
        $("#up").mousedown()
    }
    else if (e.keyCode == '40') {
        console.log('down')
        $("#down").mousedown()
    }
    else if (e.keyCode == '37') {
        console.log('left')
        $("#left").mousedown()
    }
    else if (e.keyCode == '39') {
        console.log('right')
        $("#right").mousedown()
    }

}
