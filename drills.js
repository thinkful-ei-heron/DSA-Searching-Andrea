/* eslint-disable indent */
'use strict';
const BinarySearchTree = require('./bst');
const Queue = require('./queue');

/*
#1.1
Find 8
3, 5, 6, 8, 11, 12, 14, 15, 17, 18 -> start
11 will be midpoint, everything to the right will not be checked
3, 5, 6, 8
5 will be midpoint, everything to the left will not be checked
6, 8
6 will be midpoint, the right will be checked
8 found, 4 steps taken


#1.2
Find 16
3, 5, 6, 8, 11, 12, 14, 15, 17, 18
11 will be midpoint, left not checked because < 16
12, 14, 15, 17, 18
15 will be the midpoint, everything on left not checked because < 16
17, 18
return null
*/

//#3 Find a book
//look for a book
// need library, Dewey decimal(dd), title, start, and end of array
//using binary search tree
function findABook(library, dd, title, start = 0, end = library.length) {
	while (start < end) {
		let index = Math.floor((start + end) / 2);
		//this will check midpoint to see if it has the correct dd and title
		if (library[index].dd === dd) {
			return library[index];
		}
		if (library[index].dd > dd) {
			findABook(library, dd, index - 1);
		}
		if (library[index].dd < dd) {
			findABook(library, dd, index + 1, end);
		}
	}
	return 'Sorry your book was not found';
}

/*
#4.1 Searching in a BST
in-order: 14 15 19 25 27 35 79 89 90 91
pre-order: 35 25 15 14 19 27 89 79 91 90
post-order: 14 19 15 27 25 79 90 91 89 35

#4.2
post-order: 5 7 6 9 11 10 8
pre-order:  8 6 5 7 10 9 11
*/

//#5 Diff tree traversals
//add in, post, pre to bst.js
function main() {
	const newTree = new BinarySearchTree();
	const dataset = [ 25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22 ];
	dataset.forEach((val) => newTree.insert(val));
	// console.log(newTree.inOrder()); //[4, 10, 12, 15, 18, 22,24, 25, 31, 35, 44, 50,66, 70, 90]
	// console.log(newTree.preOrder()); //[25, 15, 10,  4, 12, 24,18, 22, 50, 35, 31, 44, 70, 66, 90]
	// console.log(newTree.postOrder()); //[4, 12, 10, 22, 18, 24,15, 31, 44, 35, 66, 90,70, 50, 25]
}
// main();

//#6 Find next Commanding Officer
//create tree with ranking of cammanding officers
//create queue of ranking
//more experienced on left side

const CT = new BinarySearchTree();
CT.insert(10, 'Captain Picard');
CT.insert(8, 'Commander Riker');
CT.insert(7, 'Lt. Cmdr. Worf');
CT.insert(9, 'Lt. Cmdr. LaForge');
CT.insert(6, 'Lieutenant security-officer');
CT.insert(12, 'Commander Data');
CT.insert(14, 'Lt. Cmdr. Crusher');
CT.insert(13, 'Lieutenant Selar');

const CQ = new Queue();

function nextInCommand(CT) {
	//queue left side of the tree starting with most experienced
	if (CT.left) {
		CQ.enqueue(CT.left);
	}
	//queue right side the bottom most right will be the least experienced
	if (CT.right) {
		CQ.enqueue(CT.right);
	}
	// will dequeue and show the next in command
	if (CQ.first) {
		nextInCommand(CQ.dequeue());
		// console.log(`${CQ.dequeue()} will be the next in command`);
	}
}
// nextInCommand(CT);
// console.log(CT);
