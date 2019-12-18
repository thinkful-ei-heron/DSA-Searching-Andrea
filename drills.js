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

