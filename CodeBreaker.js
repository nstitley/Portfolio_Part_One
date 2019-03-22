var Project1 =  ( function() {

    var difficulty = prompt("Please enter difficulty setting (Very Easy, Easy, Hard, Very Hard)", "Easy");
    var diffUnk = true;
    var endCount = 0;

    var secret = [3];
    var secret2 = [4];
    var guessNum = "";

    while(diffUnk) {

        if (difficulty == null || difficulty == "") {

            alert("Cancelled.");

        } else if (difficulty == "Very Easy") {

            alert("Guess a 3 digit code with the values of each digit being 0 through 6.");

            for(i = 0; i < 3; ++i) {

                secret[i] = Math.floor(Math.random() * 7);
                guessNum += secret[i].toString();
            }

            diffUnk = false;

        } else if (difficulty == "Easy") {

            alert("Guess a 3 digit code with the values of each digit being 0 through 9.");

            for(i = 0; i < 3; ++i) {

                secret[i] = Math.floor(Math.random() * 10);
                guessNum += secret[i].toString();
            }

            diffUnk = false;

        } else if (difficulty == "Hard") {

            alert("Guess a 4 digit code with the values of each digit being 0 through 6.");

            for(i = 0; i < 4; ++i) {

                secret2[i] = Math.floor(Math.random() * 7);
                guessNum += secret2[i].toString();
            }

            diffUnk = false;

        } else if (difficulty == "Very Hard") {

            alert("Guess a 4 digit code with the values of each digit being 0 through 9.");

            for(i = 0; i < 4; ++i) {

                secret2[i] = Math.floor(Math.random() * 10);
                guessNum += secret2[i].toString();
            }

            diffUnk = false;

        } else {

            cancel = alert("Difficulty not found.");
        }

    }

    return {

        onClick: function() {

            var userInput = document.userGuess.guess.value;
            var numCheck = parseInt(userInput);

            var output = document.getElementById("output");
            var tr = output.insertRow(-1);

            var winText;
            var newPara;
            var results;

            var userGuess;
            var userCorrect;
            var userMisplaced;

            var correctNum = 0;
            var misplacedNum = 0;
            
            if(difficulty != null) {

                    if(userInput == guessNum) {

                        userGuess = document.createElement("td");
                        userGuess = tr.insertCell(0);
                        userGuess.innerHTML = userInput;
                        tr.appendChild(userGuess);

                        if (guessNum.length == 3) {

                            correctNum = 3;

                        } else {

                            correctNum = 4;

                        }

                        userCorrect = document.createElement("td");
                        userCorrect = tr.insertCell(1);
                        userCorrect.innerHTML = correctNum;
                        tr.appendChild(userCorrect);

                        userMisplaced = document.createElement("td");
                        userMisplaced = tr.insertCell(2);
                        userMisplaced.innerHTML = misplacedNum;
                        tr.appendChild(userMisplaced);
                        tr = output.insertRow(-1);

                        endCount++;

                        newPara = document.createElement("p");
                        winText = document.createTextNode("Congratulations! You have guessed the code! It only took you " + endCount + " guess(es)! Refresh the page to play again.");
                        newPara.appendChild(winText);
                        results = document.getElementById("results");
                        results.appendChild(winText);
        
                    } else if (userInput.length < guessNum.length || userInput.length > guessNum.length)  {

                        alert("Please try again.");

                    } else if (!Number.isInteger(numCheck)) {

                        alert("Please enter integers only.")

                    } else if (endCount == 12) {

                        alert("Game Over! You could not guess the code in time!");

                    } else if (userInput != guessNum)  {

                        userGuess = document.createElement("td");
                        userGuess = tr.insertCell(0);
                        userGuess.innerHTML = userInput;
                        tr.appendChild(userGuess);
                        
                        userCorrect = document.createElement("td");
                        userCorrect = tr.insertCell(1);

                        if(guessNum.length == 3) {

                            for(i = 0; i < 3; ++i) {

                                var userCheck = String(userInput).charAt(i);
                                var secretCheck = String(guessNum).charAt(i);
    
                                if(userCheck == secretCheck) {
    
                                    correctNum++;
                                }
    
                            }

                        }

                        if(guessNum.length == 4) {

                            for(i = 0; i < 4; ++i) {

                                var userCheck = String(userInput).charAt(i);
                                var secretCheck = String(guessNum).charAt(i);
    
                                if(userCheck == secretCheck) {
    
                                    correctNum++;
                                }
    
                            }

                        }

                        userCorrect.innerHTML = correctNum;
                        tr.appendChild(userCorrect);

                        userMisplaced = document.createElement("td");
                        userMisplaced = tr.insertCell(2);

                        if(guessNum.length == 3) {

                            for(i = 0; i < 3; ++i) {

                                var userCheck = String(userInput).charAt(i);
    
                                for(z = 2; z >= 0; --z) {
                                    
                                    var secretCheck = String(guessNum).charAt(z);
                                    if(userCheck == secretCheck && z != i) {
    
                                        misplacedNum++;
                                    } 
                                }
                            }
                        }

                        if(guessNum.length == 4) {

                            for(i = 0; i < 4; ++i) {

                                var userCheck = String(userInput).charAt(i);
    
                                for(z = 3; z >= 0; --z) {
                                    
                                    var secretCheck = String(guessNum).charAt(z);
                                    if(userCheck == secretCheck && z != i) {
    
                                        misplacedNum++;
                                    } 
                                }
                            }
                        }

                        userMisplaced.innerHTML = misplacedNum;
                        tr.appendChild(userMisplaced);

                        tr = output.insertRow(-1);

                        endCount++; 

                    }
            }
        }
    };
})();