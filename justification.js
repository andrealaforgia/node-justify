//Create a function that will justify the column 
//when a string is passed along with maxcol the funtion has to justify the column
//string will always be euqal or < than maxCol

//Plan:
//Will check the length of the word if the word length is euqal to maxCol will return that str
// Else will check the length of each word and compare it to the column
//will fit the words in each column depending on the length of the word
//if only one word can be fitted in the column then will have space after the word to meet the column requirement 
//if two words or more words can be fit in a column will fit the words and have even spaces between them to meet the column requirement
//in order to have even spaces between two or more workds will count the words and subtract that from the maxCol and will divide the spaces evenly

//['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'] maxCol=13
//I will check the word 'the' how many spaces does that take
//I will check the word 'quick' after putting a space after 'the' so far it takes 9 spaces in a column
//I will check if I can fit the next word which is 'brown' 
//if we include brown with spaces it takes up more than 13 spaces in a column therfore we cant include 'brown'
//I will only fit 'the' 'quick' in the first row and will evenly use space after 'the' and 'quick'
//spaces that we need to evenly distributed after putting 'the', 'quick' is 13 - 8 = 5 which is the total word length of both the words
//we will put 3 spaces after 'the' and 2 spaces after 'quick' which would look like below
//['the   quick  ']
// will repeat the process for all the other words and the final outcome should look like below:
//['the   quick  ','brown   fox  ', 'jumped  over ', 'the lazy dog ']







function justify(str, maxCol) {
    let justifiedLines = []
    // ... write your code here
    return justifiedLines;
}


exports.justify = justify;