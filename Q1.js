const DiagonalProdSum = (matrix, n) => {
    let first = 0, secondary = 0, i = 0;

    for (i = 0; i < n; i++) {
        first = first + matrix[i][i];             // adding first Principal diagonal
        secondary = secondary + matrix[i][n - i - 1];     // adding secondary diagonal
    }

    console.log("First Principal Diagonal:", first)
    console.log("Secondary Diagonal:", secondary)

}

// Driver code

let a = [
    [1, 2, 3],
    [4, 5, 5],
    [7, 8, 9]
]


DiagonalProdSum(a, 3);