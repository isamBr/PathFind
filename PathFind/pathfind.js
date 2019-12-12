function pathfind(A, P, Q) {
	
// Implement your pathfinding function here
// Represent the grid as a 2-dimensional array
let rows = A.length;
let columns = A[0].length;
var grid = [];
for (var i=0; i<rows; i++) {
  grid[i] = [];
  for (var j=0; j<columns; j++) {
    grid[i][j] = '.';
  }
}

// first index as "distance from the top row"
// second index as "distance from the left-most column"

// Represent the grid with '#' is blocked 

for (let r= 0; r< rows; r++) { 
	for (let c= 0; c < columns; c++) 
	{ 
		if(A[r][c]==false)
			grid[r][c]="#";//blocked
	} 
} 
// Represent start point
grid[P[1]][P[0]] = "P";
// Represent end point
grid[Q[1]][Q[0]] = "Q";

console.log(grid);

// Start location will be in the following format:
// [distanceFromTop, distanceFromLeft]
var findShortestPath = function(startCoordinates, grid) {
	var distanceFromTop = startCoordinates[1];
	var distanceFromLeft = startCoordinates[0];
  
	// Each "location" will store its coordinates
	// and the shortest path required to arrive there
	var location = {
	  distanceFromTop: distanceFromTop,
	  distanceFromLeft: distanceFromLeft,
	  path: [],
	  status: 'P'
	};
  
	// Initialize the queue with the start location already inside
	var queue = [location];
  
	// Loop through the grid searching for the end point
	while (queue.length > 0) {
	  // Take the first location off the queue
	  var currentLocation = queue.shift();
  
	  // Explore North
	  var newLocation = exploreInDirection(currentLocation, 'North', grid);
	  if (newLocation.status === 'Q') {
		return newLocation.path;
	  } else if (newLocation.status === 'Valid') {
		queue.push(newLocation);
	  }
  
	  // Explore East
	  var newLocation = exploreInDirection(currentLocation, 'East', grid);
	  if (newLocation.status === 'Q') {
		return newLocation.path;
	  } else if (newLocation.status === 'Valid') {
		queue.push(newLocation);
	  }
  
	  // Explore South
	  var newLocation = exploreInDirection(currentLocation, 'South', grid);
	  if (newLocation.status === 'Q') {
		return newLocation.path;
	  } else if (newLocation.status === 'Valid') {
		queue.push(newLocation);
	  }
  
	  // Explore West
	  var newLocation = exploreInDirection(currentLocation, 'West', grid);
	  if (newLocation.status === 'Q') {
		return newLocation.path;
	  } else if (newLocation.status === 'Valid') {
		queue.push(newLocation);
	  }
	}
  
	// No valid path found
	return false;
  
  };
  
  // This function will check a location's status
  // (a location is "valid" if it is on the grid, is not an "obstacle",
  // and has not yet been visited by our algorithm)
  // Returns "Valid", "Invalid", "Blocked", or "Q"
  var locationStatus = function(location, grid) {
	var gridSize = grid.length;
	var dft = location.distanceFromTop;
	var dfl = location.distanceFromLeft;
  
	if (location.distanceFromLeft < 0 ||
		location.distanceFromLeft >= gridSize ||
		location.distanceFromTop < 0 ||
		location.distanceFromTop >= gridSize) {
  
	  // location is not on the grid--return false
	  return 'Invalid';
	} else if (grid[dft][dfl] === 'Q') {
	  return 'Q';
	} else if (grid[dft][dfl] !== '.') {
	  // location is either an obstacle or has been visited
	  return 'Blocked';
	} else {
	  return 'Valid';
	}
  };
  
  
  // Explores the grid from the given location in the given
  // direction
  var exploreInDirection = function(currentLocation, direction, grid) {
	  
	var newPath = currentLocation.path.slice();
	newPath.push(direction);
  
	var dft = currentLocation.distanceFromTop;
	var dfl = currentLocation.distanceFromLeft;
  
	if (direction === 'North') {
	  dft -= 1;
	} else if (direction === 'East') {
	  dfl += 1;
	} else if (direction === 'South') {
	  dft += 1;
	} else if (direction === 'West') {
	  dfl -= 1;
	}
  
	var newLocation = {
	  distanceFromTop: dft,
	  distanceFromLeft: dfl,
	  path: newPath,
	  status: 'Unknown'
	};
	newLocation.status = locationStatus(newLocation, grid);
  
	// If this new location is valid, mark it as 'Visited'
	if (newLocation.status === 'Valid') {
	  grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Visited';
	}
  
	return newLocation;
  };
  

 
  
  
  
  // OK. We have the functions we need--let's run them to get our shortest path!
  
	var path=findShortestPath(P,grid);
	if(P[0]==Q[0]&&P[1]==Q[1])
		return 0;
	else
	return path.length  ; 
	 
 
}

module.exports.pathfind = pathfind
