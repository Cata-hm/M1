const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];

for ( let i = ; i < arr1.length; i++) {
    console.log(arr1[i]);
    for (let j = 0; j < arr2.length; j++);
    console.log(arr2[j]);
    console.log(arr1[i]+ arr2[j]);
}

const arr1 = [1, 2, 3, 4, 5, 6,7 ,8];



for(let i=0; i<arr1.length; i++) {
    console.log(arr1[i]);
    for(let j=0; j<arr1.length; j++) {
        console.log(arr1[j]);
    }
}

//se debe optimizar los pasos que se realizan en la programación anterior
// 1 + 1
// 1 + 2
// 1 + 3
// 1 + 4
// 1 + 5
// 1 + 6
// 1 + 7
// 1 + 8

// 2 + 3
// 2 + 4
// 2 + 5
// 2 + 6
// 2 + 7
// 2 + 8

// 3 + 4
// 3 + 5
// 3 + 6
// 3 + 7
// 3 + 8

// 4 + 5
// 4 + 6
// 4 + 7
// 4 + 8

// 5 + 6
// 5 + 7
// 5 + 8

// 6 + 7
// 6 + 8

// 7 + 8