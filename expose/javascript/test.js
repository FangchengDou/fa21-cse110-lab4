// function sumValues(num1, num2, add) {
//     if (add) {
//         const result = 0;
//         result = num1 + num2;
//         console.log('values added: ', result);
//     } else return;
//     console.log('final result: ', result);
// }
// sumValues(10, 10, true);

// function discountPrices(prices, discount) {
//     const discounted = [];
//     const length = prices.length;
//     for (let i = 0; i < length; i++) {
//         const discountedPrice = prices[i] * (1 - discount);
//         discounted.push(discountedPrice);
//     }
//     // console.log(i);
//     // console.log(discountedPrice);
//     // console.log(finalPrice);
//     // console.log(length);
//     return discounted
// }
// console.log(discountPrices([100, 200, 300], 0.5));

// let student = {
//     name: 'Sarah',
//     major: 'Computer Science',
//     'grad Year': '2022',
//     greeting: function () { console.log('hello'); },
//     'aaa': {
//         name: 'thoma',
//         course: 'cse 110'
//     },
//     courseload: ['cs', '134', 'df']
// };
// console.log(student.courseload[1])

// function modifyArray(array, callback) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(doSomething(array[i]));
//     }
//     return newArr;

// }

// function doSomething(num) {
//     return num * 2;
// }

// console.log(modifyArray([1, 2, 3], doSomething))

function printNums() {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 1000);
    setTimeout(function () { console.log(3); }, 0);
    a()
    console.log(4)
}
printNums();
function a() {
    console.log(55)
}