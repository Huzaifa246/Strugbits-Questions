
let N = 4;

function add(A, B, C) {
    let i, j;
    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            C[i][j] = A[i][j] * B[i][j];
}

// Driver code
let A = [[2, 4, 4, 4], [3, 2, 2, 2], [1, 5, 9, 1], [5, 5, 5, 5]]

let B = [[2, 4, 4, 4], [3, 2, 2, 2], [1, 5, 9, 1], [5, 5, 5, 5]];

// To store result
let C = new Array(N);
for (let k = 0; k < N; k++)
    C[k] = new Array(N);

let i, j;
add(A, B, C);

console.log("Result matrix is ");
for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
        console.table(C[i][j]);
    }
}