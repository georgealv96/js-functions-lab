// 1. (completed) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
  return x >= y ? x : y
}

console.log(maxOfTwoNumbers(3, 3))

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function (num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1
  } else if (num2 >= num3) {
    return num2
  } else {
    return num3
  }
}

console.log(maxOfThree(5, 2, 2))

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(character) {
  character = character.toLowerCase()
  if (
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u'
  ) {
    return true
  } else {
    return false
  }
}

console.log(isCharAVowel('A'))

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function (numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

console.log(sumArray([2, 4, 5]))

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(numbers) {
  product = 1
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i]
  }
  return product
}

console.log(multiplyArray([2, 4, 5]))

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function (...args) {
  let counter = 0
  for (let i = 0; i < args.length; i++) {
    counter++
  }
  return counter
}

console.log(numArgs(2, 3, 4, 5, 6))

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(string) {
  let newString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  return newString
}

console.log(reverseString('hello world!'))

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function (arrayOfstrings) {
  let longestString = ''
  for (let i = 0; i < arrayOfstrings.length; i++) {
    if (arrayOfstrings[i].length >= longestString.length) {
      longestString = arrayOfstrings[i]
    }
  }
  return longestString
}

console.log(longestStringInArray(['Utah', 'Nebraska', 'Nevada', 'Idaho']))

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arrayOfstrings, num) {
  let newString = []
  for (let i = 0; i < arrayOfstrings.length; i++) {
    if (arrayOfstrings[i].length > num) {
      newString.push(arrayOfstrings[i])
    }
  }
  return newString
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

// Another way to do 9

function stringsLongerThan(arrayOfStrings, num) {
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length <= num) {
      arrayOfStrings.splice(i, 1)
    }
  }
  return arrayOfStrings
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
