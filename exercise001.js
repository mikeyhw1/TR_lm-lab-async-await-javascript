const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9
	const randomInt = Math.floor(Math.random() * 10);

	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});


// Task 1:
// console.log("Program started!")
// promise.then((value) => {
// 	console.log(`Yay! Promise resolved with response: ${value}`);
// }).catch((err) => {
// 	console.log(`Boo. Promise rejected with response: ${err}`);
// })
// console.log("End of Program!")


// Task 2:
console.log("Program started!")
// async function runPromise() {
try {
	const result = await promise
	console.log(`Yay! Promise resolved with response: ${result}`);
} catch (error) {
	console.log(`Boo. Promise rejected with response: ${error}`);
}
// }
// runPromise()
console.log("End of Program!")
