

# _Galactic Age Calculator_

#### _Prompts user to input data and outputs age on other planets and aged to be lived. Created on 9/5/20, updated on 9/10/20_

#### By _**Grant Eadie**_

## Description

_This application will prompt the user to input their age, amount of beets consumed per week, amount of laughter per day, amount of tweets posted per day, and their star sign. The application will then output their age on each planet and their predicted life time. If the user has lived past their life time, it will output the amount of time they have lived past it._

## Setup/Installation Requirements

* _Download main folder_
* _Be sure to have all folders and images_
* _terminal: $ npm install_
* _terminal: $ npm run start_
* _Fill out survey and click Submit_

## Specs

How to test: In planets.test.js, input any number where "60" is currently located. Check that the number is also changed in the first test instance to your inputted number. On your own, calculate how your number will be effected from each test using the test descriptions (ie. for Venus it would be 60 / .62 = 97).

Spec: Create object classes in each planet js file and confirm export.

Spec: Create function to return inputted age divided by Venus's Earth years rounded to the nearest whole number.
  Input: "60"
  Output: "97"

Spec: Create function to return inputted age divided by Mercury's Earth years rounded to the nearest whole number.
  Input: "60"
  Output: "250"

Spec: Create function to return inputted age divided by Jupiter's Earth years rounded to the nearest whole number.
  Input: "60"
  Output: "5"

Spec: Create function to return inputted age multiplied by Mars' Earth years rounded to the nearest whole number.
  Input: "60"
  Output: "32"

Spec: Create function to return inputted beets consumed per week as a factor of final age expectancy output. If less than 5, added 15 years, otherwise add 25 years.
  Input: "4"
  Output: "15"

Spec: Create function to return inputted laughter per day as a factor of final age expectancy output. If less than 5, added 15 years, otherwise add 25 years.
  Input: "7"
  Output: "25"

Spec: Create function to return inputted tweets posted per day as a factor of final age expectancy output. If more than 3, added 15 years, otherwise add 25 years.
  Input: "2"
  Output: "25"

Spec: Create function to return inputted Star Sign as a factor of final age expectancy output. If fire or earth sign, added 15 years, other add 25 years.
  Input: "Virgo"
  Output: "17"

Spec: Create function to return total age expectancy as added by the four previous functions. 
  Input: "4 (beets per week), 7 (moments of laughter per day), 2 (tweets per day), Virgo"
  Output: 87 years old

Spec: Create function to return age subtracted from life expectancy to display amount of years left to live. If age is more than life expectancy, returns amount of years lived after expectancy.
  Input: "95 (years old), 4 (beets per week), 7 (moments of laughter per day), 2 (tweets per day), Virgo"
  Output: 8 years over the life limit

  Input: "27 (years old), 4 (beets per week), 7 (moments of laughter per day), 2 (tweets per day), Virgo"
  Ouput: 60 years left to live

## Known Bugs

_No known bugs. UI is fully functioning._

## Support and contact details

_Please constact Grant Eadie at grantleadie@gmail.com for any questions._

## Technologies Used

_Created in Visual Studio Code using HTML, CSS, and Javascript. Libraries include jQuery and Bootstrap. Plugins include webpack, Jest, ESLint, and Babel._

### License

MIT License

Copyright (c) [2020] [GRANT EADIE]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2016 **_{GRANT EADIE}_**


  
