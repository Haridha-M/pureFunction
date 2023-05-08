//1.Get the sum of two arrays...actually the sum of all their elements.P.S. Each array includes only integer numbers. Output is a number too.
arr1 = [11, 22, 33, 44, 55]
arr2 = [9, 8, 7, 6, 5]
let sum = 0
arr1.forEach(function (e) {
    sum += e
});
arr2.forEach(function (e) {
    sum += e
});
console.log(sum)

//2.Using a for loop print all even numbers up to and including n. Don’t include 0
n = 10
printEven = []
for (i = 2; i <= n; i += 2) {
    printEven.push(i)
} printEven.forEach((num) => {
    console.log(num)
}
)

//3.Using a for loop output the elements in reverse order
arr = [10, 5, 2, 7, 31]
reverse = []
for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}
reverse.forEach((e) => {
    console.log(e)
}
);


//4.Given two arrays of integers. Add up each element in the same position andcreate a new array containing the sum of each pair. Assume both arrays are of the same length.
arr1 = [1, 2, 3, 5, 6]
arr2 = [4, 5, 6, 8, 9]
const sumArray = [];
arr1.forEach((num, index) => {
    sumArray.push(num + arr2[index]);
});
console.log(sumArray);

//5.Given a string change the every second letter to an uppercase ‘Z’. Assumethere are no space.
arr = 'jjljfihfjfufjhfjahiurfjwhhwisjndfkfoj'
str = []
arr.split('').forEach((char, index) => {
    if (index % 2 == 1) {
        str += 'Z'
    } else {
        str += char
    }
})
console.log(str)

//6.Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
myString = "example string";
containsY = myString.includes("y");
console.log(containsY ? "yes" : "no");

//7.Given a number n Calculate the factorial of the number
factorial = (n) => {
    result = 1
    numbers = []
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    numbers.forEach((number) => {
        result *= number
    });
    return result
}
console.log(factorial(5))

//8.Write a program that will allow someone to guess a four-digit pin exactly 4times. If the user guesses the number correctly. It prints “That wascorrect!” Otherwise, it will print “Sorry that was wrong.” Program stops after the 4th attempt if they got it right.
pin = 7645
attempts = 0
function checkpin(guess) {
    attempts++;
    if (guess == pin) {
        console.log("It's correct")
        return true;
    } else {
        console.log("It's wrong")
        return false;
    }
};
const guesses = ["4677", "3222", "9786", "4436"];
guesses.forEach((guess) => {
    if (!checkpin(guess) && attempts >= 4) {
        console.log("Out of attempts.");
    }
});

//9.Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.Palindrome: a word, phrase, or sequence that reads the same backward asforward, e.g., madam or nurses run.
function isPalindrome(str) {
    str = str.replace();
    reversed_string = '';
    [str].forEach(function (char) {
        reversed_string = char + reversed_string;
    });
    return str === reversed_string;
}
str1 = 'madam'
str2 = 'level'
if (isPalindrome(str1) && isPalindrome(str2)) {
    console.log('Both strings are palindromes.');
} else {
    console.log('Not both strings are palindromes.');
}

//10.Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(n) {
    sum = 0
    numbers = []
    for (i = 0; i <= n; i++) {
        numbers.push(i)
    }
    numbers.forEach((e) => {
        sum += e;
    });
    return sum
}
console.log(summation(22))

