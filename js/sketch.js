

$(function() {
	$('.bt1').on('click', blackGrid);
	$('.bt2').on('click', leaveTrail);
	$('.bt3').on('click', darkenGrid);
});

function initializeGrid (width, height) {
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			if (j === 0) {
				$('#container').append('<div class="square leftmost"></div>');
			}
			else {
				$('#container').append('<div class="square"></div>');
			}
		}
	}
}

function removeGrid() {
	$('.square').remove();
}

function blackGrid () {
	removeGrid();
	var n = prompt("Enter your your desired grid size (n x n):");
	initializeGrid(n, n);
	$('.square').mouseenter(function () {
		$(this).css({'backgroundColor': '#000'});
	})
}

function leaveTrail () {
	removeGrid();
	var n = prompt("Enter your your desired grid size (n x n):");
	initializeGrid(n, n);
	$('.square').mouseenter(function() {
		$(this).css({'backgroundColor': '#000'});
	$('.square').mouseleave(function() {
		$(this).fadeOut('fast', function (){
			$(this).fadeIn('fast');
			$(this).css({'backgroundColor': '#fff'});
		});
	})
	})
}

function darkenGrid () {
	removeGrid();
	var n = prompt("Enter your your desired grid size (n x n):");
	initializeGrid(n, n);
	$('.square').mouseenter(function() {
		var backgroundColor = $(this).css('background-color');
		$(this).css({backgroundColor: shadeColor(backgroundColor, 10)});
	})
}

function shadeColor (color, percent) {

	var regex = /\d{1,3}/g;
	var colorArray = color.match(regex);

	var r = colorArray[0];
	var g = colorArray[1];
	var b = colorArray[2];

	r = parseInt(r - r * percent / 100);
	g = parseInt(g - g * percent / 100);
	b = parseInt(b - b * percent / 100);


	r = r.toString(16).length === 2 ? r.toString(16) : "0" + r.toString(16);
	g = g.toString(16).length === 2 ? g.toString(16) : "0" + g.toString(16);
	b = b.toString(16).length === 2 ? b.toString(16) : "0" + b.toString(16);

	return "#"+r+g+b;
};
