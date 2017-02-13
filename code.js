//
// this is just a stub for a function you need to implement
//
function getStats(txt) 
{
    return {
        nChars: calcCharNums(txt),
        nWords: calcWordNums(txt),
        nLines: calcLineNums(txt),
        nNonEmptyLines: calcNonEmptyLineNums(txt),
		maxLineLength: calcMaxLineLength(txt),
        averageWordLength: calcAverageWordLength(txt),
        palindromes: calcPalindromeNums(txt),
        longestWords: calcLongestWords(txt),
        mostFrequentWords: calcMostFrequentWords(txt)
    };
}

function calcCharNums(txt)
{
	let charCount = txt.length;
	return charCount;
}

function calcWordNums(txt)
{
	var wordCountSplit = txt.split(/[^a-z0-9]+/gi);
	
	let wordCount = wordCountSplit.length;
	
	if (wordCountSplit[0] === "")
	{
		wordCountSplit.shift();
		wordCount = wordCountSplit.length;
	}
	
	if (wordCountSplit[wordCount - 1] === "")
	{
		wordCountSplit.pop();
		wordCount = wordCountSplit.length;
	}
	return wordCount;
}	

function calcLineNums(txt)
{
	let lineCount = txt.split(/\r\n|\r|\n/).length;
	return lineCount;
}

function calcNonEmptyLineNums(txt)
{
	let count = 0;
	var lineSplit = txt.split(/\r\n|\r|\n/);
	for (let i = 0; i < lineSplit.length; i++)
	{
		if (/\S/.test(lineSplit[i]))
		{
			count++;
		}
	}
	return count;	
}

function calcMaxLineLength(txt)
{
	var longestCurrentLine = 0;
	let lineCount = txt.split(/\r\n|\r|\n/);
	for (let i = 0; i < lineCount.length; i++)
	{
		if (lineCount[i].length > longestCurrentLine)
		{
			longestCurrentLine = lineCount[i].length;
		}
	}
	
	return longestCurrentLine;
	
}

function calcAverageWordLength(txt)
{
	var wordCountSplit = txt.split(/[^a-z0-9]+/gi);
	let wordCount = wordCountSplit.length;
	
	if (wordCountSplit[0] === "")
	{
		wordCountSplit.shift();
		wordCount = wordCountSplit.length;
	}
	
	if (wordCountSplit[wordCount - 1] === "")
	{
		wordCountSplit.pop();
		wordCount = wordCountSplit.length;
	}
	
	var wordTotalLength = 0;
	for (let i = 0; i < wordCount; i++)
	{
		wordTotalLength = wordTotalLength + wordCountSplit[i].length;
	}
	
	var wordAverageLength = wordTotalLength / wordCount;
	return wordAverageLength;	
}

function calcPalindromeNums(txt)
{
	let wordCountSplit = txt.split(/[^a-z0-9]+/gi);
	
	let wordCount = wordCountSplit.length;
	
	if (wordCountSplit[0] === "")
	{
		wordCountSplit.shift();
		wordCount = wordCountSplit.length;
	}
	
	if (wordCountSplit[wordCount - 1] === "")
	{
		wordCountSplit.pop();
		wordCount = wordCountSplit.length;
	}
	
	let palindromeArray = [];
	
	for (var i = 0; i < wordCount; i++)
	{
		var actualWord = wordCountSplit[i];
		var actualToLowerCase = actualWord.toLowerCase();
		
		var checkPalindrome = actualToLowerCase.split("").reverse().join("");
		if ((checkPalindrome === actualToLowerCase) && (checkPalindrome.length > 1))
		{
			palindromeArray.push(actualToLowerCase);
		}

	}
	return palindromeArray;
	
}

function calcLongestWords(txt)
{
	let wordCountSplit = txt.split(/[^a-z0-9]+/gi);
	
	let wordCount = wordCountSplit.length;
	
	if (wordCountSplit[0] === "")
	{
		wordCountSplit.shift();
		wordCount = wordCountSplit.length;
	}
	
	if (wordCountSplit[wordCount - 1] === "")
	{
		wordCountSplit.pop();
		wordCount = wordCountSplit.length;
	}
	
	var tenLongestWords = [];
	wordCountSplit.sort(function(a, b)	//call our sort with our function on to wordCountSplit
	{
		return b.length - a.length || a.localeCompare(b); //sort is done by length first, then by alphabetical order, contains duplicates
	});
	
	var wordDuplicateCheck = [];	//save words so we can compare later if we have a duplicate
	var uniqueLongestWords = [];	//array for non duplicate sorted words
	for ( var j = 0; j < wordCountSplit.length; j ++)
	{
		if (!(wordCountSplit[j] in wordDuplicateCheck))			//if this is a new word
		{
			uniqueLongestWords.push(wordCountSplit[j]);			//add to unique array
			wordDuplicateCheck[wordCountSplit[j]] = true;		// add this word to duplicate check
		}
	}
	
	//uniqueLongestWords now has the unique(no duplicates) array of sorted (by length and alphabet) words 
	
	for (var i = 0; i < 10; i++)
	{
		if (uniqueLongestWords[i] != null)	//make sure we dont include null values if there isnt 10 words in the input
		{
			tenLongestWords.push(uniqueLongestWords[i]);	//take first 10 elements of word count (which is sorted correctly now) and copy into 10 longest word array
		}
	}
	
	return tenLongestWords;
	
}

function calcMostFrequentWords(txt)
{
	let wordCountSplit = txt.split(/[^a-z0-9]+/gi);
	
	let wordCount = wordCountSplit.length;
	
	if (wordCountSplit[0] === "")
	{
		wordCountSplit.shift();
		wordCount = wordCountSplit.length;
	}
	
	if (wordCountSplit[wordCount - 1] === "")
	{
		wordCountSplit.pop();
		wordCount = wordCountSplit.length;
	}
	
	//converting to lower case
	for (var z = 0; z < wordCountSplit.length; z ++)
	{
		wordCountSplit[z] = String(wordCountSplit[z]);
		wordCountSplit[z] = wordCountSplit[z].toLowerCase();
	}
	
	
	wordCountSplit.sort(function(a, b)	//call our sort with our function on to wordCountSplit
	{
		return b.length - a.length || a.localeCompare(b); //sort is done by length first, then by alphabetical order, contains duplicates
	});
	
	var mostFrequentWords = [];
	var frequencyOfWords = [];
	var previousWord;
	
	for (var i = 0; i < wordCountSplit.length; i++)
	{
		if ( i == 0 || wordCountSplit[i] !== previousWord)
		{
			mostFrequentWords.push(wordCountSplit[i]);
			frequencyOfWords.push(1);
		}
		else
		{
			frequencyOfWords[frequencyOfWords.length - 1]++;
		}
		previousWord = wordCountSplit[i];
	}
	
	var sortingArray = []; //array for sorting most frequent words first. Format is (frequency#)(Corresponding Word). Used to sort by number and then alphabetical
	for (var x = 0; x < mostFrequentWords.length; x++)
	{
		sortingArray[x] = "(" + frequencyOfWords[x] + ")" + mostFrequentWords[x];
	}
	
	var sortedWordByFreq = [];
	sortedWordByFreq = sortingArray.sort(function(a,b)	//sort by frequency# followed by alphabet if equal
	{
		return b.localeCompare(a); //since we want highet number first rather than lowest
	});
	
	var tenFreqWord = [];
	for (var currentWord = 0; (currentWord < 10) && (currentWord < sortedWordByFreq.length); currentWord++) //make sure we only take 10 words max, as well as ignoring null values if #words < 10
	{
		var substring = sortedWordByFreq[currentWord];
		tenFreqWord[currentWord] = substring;
	}

	return tenFreqWord;
}



//Palindrome : other attempts that did not work. Keeping here for personal note	
//-------------------------------------------------------------------------------------

//	var stringToTest = "temp";
//	var stringCheck = "temp";
//	var nextStringFlag = false;
//	for (var i = 0; i < 1; i++)
	//{
//		stringToTest = wordCountSplit[i].toLowerCase();
//		while (stringToTest.length > 1)
//		{
//			if (stringToTest.charAt[0] == stringToTest.charAt[stringToTest.length-1])
//			{
				//stringCheck = stringToTest.substring(1, stringToTest.charAt[stringToTest.length-1])
				//if (stringCheck.length > 1) //check if length >1 before cancelling loop so we can set conditionals
				//{
					//stringToTest = stringCheck; //begin while loop again
				//}
				//else
				//{
//					palindromeArray[i] = wordCountSplit[i]; //if beginning + last are equal and string size is <= 1, it is a palindrome
//					break; //break out of while loop to move to next word
				//}
//			}
	//		else
	//		{
	//			palindromeArray[i] = "ERROR TEST";
	//			break; //not palindrone if 2 letters arent equal, so break out of while loop and go to next word.
	//		}
	//	}
//	}
	
//	return palindromeArray;




//---palindrome attempt2



//	let palindromeArray = [];
//	palindromeArray[0] = "this should not be here";
	
//	for (var i = 0; i < wordCount; i++)
//	{
//		var actualWord = wordCountSplit[i];
//		var actualToLowerCase = actualWord.toLowerCase();
		
//		var reversedWord = ""
//		var j = 0;
//		while(j < actualWord)
//		{
	//		reversedWord = actualToLowerCase.charAt[j] + reversedWord; //we want to build a reversed word since reversed word == origin word when we compare
	//		j = j + 1;
	//	}
	//	if (actualToLowerCase == reversedWord)
//		{
	//		palindromeArray[i] = actualWord;
//		}
//	}
	
	//return palindromeArray;

//---------------------------------------------------------------------
//===============================MOST FREQUENT WORD ATTEMPT ====KEPT FOR PERSONAL NOTE============ BUG WITH MATCHING


//	for (var freqWord = 0; freqWord < mostFrequentWords.length; freqWord++)
//	{
//		var substring = mostFrequentWords[freqWord];
//		for (var g = 0; g < 10; g++)
//		{
//			if (sortedWordByFreq[g].includes(substring))
//			{
//				finalTestArray[freqWord] = substring;
//			}
//		}
			
//		if (substring.includes(mostFrequentWords[freqWord]))    works
//		{
//			finalTestArray[freqWord] = substring;
//		}


//		var toCompare = sort
//		finalTestArray[freqWord] = substring;	
		
	//		var substring = mostFrequentWords[freqWord];
	//		if(sortedWordByFreq[currentWord].includes(substring);)
	//		if(sortedWordByFreq[currentWord].includes(mostFrequentWords[freqWord]);)
	//		{
	//			frequentWordCombineNum[currentWord] = sortedWordByFreq[freqWord];
		//			frequentWordCombineNum[currentWord] = mostFrequentWords[freqWord] + frequencyOfWordsWithBrackets[freqWord];
	//		}
			
//			var flag = sortedWordByFreq[]
//			if ( sortedWordByFreq[currentWord].)
//			{
				
	//		}
//	}	

//================================================================================







