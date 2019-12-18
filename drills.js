/* eslint-disable indent */
'use strict';

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
