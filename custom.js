// Javascript for Miscellaneous Functions of Armageddon - 2013

function documentInitiate()
{
	timeElapsed = 0;
	activeCategory(0, 0);
	window.setInterval(function(){categoryAutoChange()}, 1000);
}