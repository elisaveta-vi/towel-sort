
// You should implement your task here.

module.exports = function towelSort(matrix) {

	if (matrix === undefined) {
		return [];
	} else {

		let result = [];
		for (let i = 0; i < matrix.length; i++) {
			let strArray = i % 2 === 0 ? matrix[i] : matrix[i].reverse();
			result = [...result, ...strArray];
		}

		return result;
	}
}
