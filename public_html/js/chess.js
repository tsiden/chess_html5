alert(1);

var pawn=document.getElementById("pawn");
pawn.onmousedown=function(e){
	var coords=getCoords(pawn);
	var shiftX=e.pageX-coords.left;
	var shiftY=e.pageY-coords.top;

	pawn.style.position='absolute';
    document.body.appendChild(pawn);
    moveAt(e);

    pawn.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        pawn.style.left = e.pageX - shiftX + 'px';
        pawn.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    pawn.onmouseup = function() {
        document.onmousemove = null;
        pawn.onmouseup = null;
    };

};

pawn.ondragstart = function() {
	return false;
};


function getCoords(elem) { // кроме IE8-
	var box = elem.getBoundingClientRect();

	return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

}
