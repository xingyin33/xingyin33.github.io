
window.onload = loadElement;
function loadElement() {
	var mainHeight = document.getElementById('main').offsetHeight;
	var sidebarHeight = document.getElementById('sidebar-content').offsetHeight;
	while (sidebarHeight < mainHeight) {
		var node = document.createElement("div");
		var textnode = document.createTextNode("TICK");
		node.appendChild(textnode);
		document.getElementById('sidebar-content').appendChild(node);
		sidebarHeight = document.getElementById('sidebar-content').offsetHeight;
	}
}
