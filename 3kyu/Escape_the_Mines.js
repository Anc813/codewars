function solve(map, miner, exit) {
	var path = [];
	var w = map.length;
	var h = map[0].length;

	return convert(search(path, miner.x, miner.y));

	function convert(path) {
		var result = [];
		for(var i=1; i<path.length; i++) {
			var dx = path[i].x - path[i-1].x;
			var dy = path[i].y - path[i-1].y;
			if (dx) result.push(~dx ? 'right' : 'left');
			if (dy) result.push(~dy ? 'down' : 'up' );
		}
		return result;
	}

	function search (path, x, y) {
		var newpath = path.concat({x:x, y:y});
		// check is exit
		if (x == exit.x && y == exit.y) return newpath;

		// check wrong cell
		if (x < 0 || y < 0 || x >= w || y >= h) return false;
		if (!map[x][y]) return false;

		// check already was here
		var exists = path.some(function (e) {
			return e.x == x && e.y == y;
		})

		if (exists) return false;

	  	return search(newpath, x-1, y) || 
			search(newpath, x+1, y) ||
			search(newpath, x, y-1)  ||
			search(newpath, x, y+1);
	}
}
