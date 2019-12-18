import React from 'react';
import dataSet from './dataSet';
class SearchAlgForm extends React.Component {
	state = {
		item: null,
		found: false,
		counter: 0
	};

	handleSubmit(e) {
		e.preventDefault();

		const item = parseInt(e.target.num.value);
		const searchType = e.target.searchType.value;

		if (searchType === 'linear') {
			this.setState(this.linearSearch(dataSet, item));
		}
		if (searchType === 'binary') {
			const sortData = dataSet.sort((a, b) => a - b);
			this.setState(this.binarySearch(sortData, item));
		}
	}

	linearSearch(arr, item) {
		let counter = 0;
		for (let i = 0; i < arr.length; i++) {
			counter++;
			if (arr[i] === item) {
				return {
					item,
					found: true,
					counter
				};
			}
		}
		return {
			item,
			found: false,
			counter
		};
	}

	binarySearch(arr, item, start = 0, end = arr.length - 1, counter = 0) {
		counter++;
		if (start > end) {
			return {
				item,
				found: false,
				counter
			};
		}
		const index = Math.floor((start + end) / 2);
		const midVal = arr[index];
		if (item === midVal) {
			return {
				item,
				found: true,
				counter
			};
		} else if (item > midVal) {
			return this.binarySearch(arr, item, index + 1, end, counter);
		} else if (item < midVal) {
			return this.binarySearch(arr, item, start, index - 1, counter);
		}
	}

	render() {
		return (
			<div className="App">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<label htmlFor="num">Search</label>
					<input type="number" id="num" name="num" required />
					<label htmlFor="linear">Linear</label>
					<input type="radio" name="searchType" id="linear" value="linear" required />
					<label htmlFor="binary">Binary</label>
					<input type="radio" name="searchType" id="binary" value="binary" />
					<button type="submit">Submit</button>
				</form>
				{this.state.item !== null && (
					<div>
						<p>Searching for number {this.state.item}</p>
						<p> {this.state.found ? '' : 'Number not found'}</p>
						<p>Count {this.state.counter} </p>
					</div>
				)}
			</div>
		);
	}
}

export default SearchAlgForm;
