# README #

Follow the Steps to Set Up Access Subtraction API.

### What is this repository for? ###

* This is small api for subtraction of numbers 

### How do I get set up? ###

* git clone https://github.com/aksh7860/random-subtraction.git
* cd random-subtraction
* npm install && npm start
* Open PostMan and make a post request with url http://localhost:3000/api/subtractNumbers
* Post Params: Select content-type to json with selecting body as raw, Example Json 
    {
        "data" : {
            "questionCount" : 2,
            "hasBorrowing": false,
            "minuend": 4,
            "subtrahend": 3
        }
    } 
* For Testing npm test

### Logic for Storing The Questions
* I would have questions table which would be having columns such as minuend,subtrahend ,digits, ID. Now i would have another table options which would have 4 columns such as answerA,answerB,answerC,answerD,questionID , each options row would be mapped to question tables by foreign key questionID

### Logic for Generating the Numbers
* My logic was if the borrowingFlag is true then i have to generate numbers in which any digit of first number except first one is smaller than second number so that it can borrow, so for last position i had generated a random no (1-6) and append to the first number and add 1 to random number and append to 2nd number . Then had switched these numbers for the first postion and in between all the numbers are same as last position
* If the borrowingFlag is false then we don't have to borrow anything so same number is generated for every position and then subracted 
* For the options part i just had added 1 to answer generated since generating four number would be similar to adding 1 to the firstnumbers and subtracting from the second number which would give me answer+1 in the end. This was the case for if the borrowing flag is set to true.

### Who do I talk to? ###

* Abhishek Kumar (abhi.kumar793@gmail.com)