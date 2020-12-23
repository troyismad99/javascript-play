/*
An island is surrounded by water and formed by
horizontal and vertical conections.
*/

var theCount = 0;

// 1 island
var gridOne = [
    ["1", "1", "1", "1", "0", ],
    ["1", "1", "0", "1", "0", ],
    ["1", "1", "0", "0", "0", ],
    ["0", "0", "0", "0", "0", ]
];

// three islands
var gridThree = [
    ["1", "1", "0", "0", "0", ],
    ["1", "1", "0", "0", "0", ],
    ["0", "0", "1", "0", "0", ],
    ["0", "0", "0", "1", "1", ]
];

function countIslands(grid) {

    var islandCount = 0;

    for(i=0; i< grid.length; i++){
        for(j=0; j< grid[i].length; j++){
            if (grid[i][j] === "1") {

                // mark island
                visitIsland(i, j, grid);

                // new island
                islandCount++;
            }
        }

    }

    return islandCount;
}

function visitIsland(row, col, grid) {

    grid[row][col] = "-1";

    // check the 4 possible directions
    if (grid[row - 1] && (grid[row - 1][col] === "1" )) {
        visitIsland(row - 1, col, grid);
    }

    if (grid[row + 1] && (grid[row + 1][col] === "1" )) {
        visitIsland(row + 1, col, grid);
    }

    if (grid[row][col + 1] === "1") {
        visitIsland(row, col + 1, grid);
    }

    if (grid[row][col - 1] === "1") {
        visitIsland(row, col - 1, grid);
    }

}

console.log(countIslands(gridOne));
console.log(countIslands(gridThree));


