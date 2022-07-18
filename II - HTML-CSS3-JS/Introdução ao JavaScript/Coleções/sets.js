const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function elementosUnicos(array) {
	let unicos = new Set(array);
	return [...unicos];
}

console.log(elementosUnicos(arr));