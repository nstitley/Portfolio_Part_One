# Code Breaker

In this program, the computer will randomly generate a secret numeric code. However, depending on the level of difficulty the user specifies within the program, the code will be either three digits in length or four digits in length. These digits will be composed of digits ranging either from one through six or from one through nine. This also depends on which difficulty setting the user specifies. The user's task is to guess all of the digits of the secret code, in the correct order, and in the least possible number of guesses. However, if the user is unable to guess the secret code after twelve guesses, the game is over.

## Getting Started

When you are on the project page [Code Breaker](https://github.com/nstitley/Portfolio_Part_One), you can press the 'Download ZIP' button which is located under the "Clone or Download" drop down box. This will allow you to download the most recent version of the code as a zip archive.

If you are not able to see the drop down box, it could because you are not on correct page. Look for a button on the left-most tab that you are allowed to click, which is labeled "<> Code".

## Prerequisites

For running JavaScript, you NEED a browser. You can use a text editor or just use the browser's scratchpad. Personally, I use Firefox for the browser and Notepad++ as the text editor.

Example: If you are gonna use Notepad++, make a new document in Notepad++ and save that document as a HTML document.

Here is some sample code for HTML:

//<html>
   //<head>
      //<title>Codebreaker!</title>
      //<meta charset="utf-8">
      //<script type="text/javascript" src="p1.js"></script>
   //</head> 
   //<body>
      //<div id="results"></div>
   //</body> 
//</html>

## Running the program

When you want run and/or test the program, you will have to first extract the files within the archive to a new folder. You will want to make sure that both files are within the same folder. Now you will be able to open the HTML file within the browser that you are using. The program should begin running within your browser. You can also utilize the web console to see certain outputs for testing cases.

## Program Discussion (Logic)

In response to each of the player's guesses, the computer provides clues which can help the player to crack the code through a process of deduction. The computer checks the digits guessed by the player, compares each of the digits to every one of the digits in the secret code, and determines whether each digit in the player's guess is of the correct identity and in the correct place (these are the "correct" digits), or whether each digit is of the correct identity but is not in the correct place (these are the "misplaced" digits).

With each guess, it counts the number of "correct" and "misplaced" digits, and displays these totals in the web page, alongside the player's guess, in ordered columns.  The player can use this information to determine which digits need to be exchanged or replaced, until the player's guess exactly matches the secret code.  The computer then prints a message of congratulations, along with the total number of guesses it took the player to crack the code.

## Contributing

If you want to contribute to this repository, please inform me about the change or changes you want to make. If you prefer, you can email me (nstitley@stu.jsu.edu) or use another other contacting method to contact me. I simply want to be informed about what changes are being made to the code. That way, I have no suprises when I want to use/make changes to it. Thanks! 

## Authors

* **Nolan Stitley** - [nstitley](https://github.com/nstitley)
