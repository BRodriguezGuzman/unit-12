alert(`Welcome to the Twenty game!`);

alert(`point of the game is to get 20 as close as possible.`);

var userp = 0;
var botp = 0;
var drawn = 0;
var botc = 0;

do {
    do {    
        do {
            var drawp = prompt(`Would you like to draw a card? (use y or n)`);
        } while ((drawp != `n`) && (drawp != `y`))
        
        if (drawp == `y`) {
            do {
                var ran = Math.floor(Math.random() * 11);
            } while (ran == 0)
            
            drawn = drawn + ran;
            alert(drawn);
        }
        
        if (drawn > 20) {
            break;
        }
    }   while (drawp != `n`)

    if (drawn > 20) {
        alert(`You broke and the bot has won!`);
        botc = botc + 1;
    } else {
        do {
            do {
                var rann = Math.floor(Math.random() * 11);
            } while (rann == 0)
            botc = botc + rann;       
        }   while (botc <= 16)
        
        alert(`The bot has ${botc}`);
        
        if (botc > 20) {
            alert(`The bot has lost and you won!`);
            userp = userp + 1;
        } else if (drawn == botc) {
            alert(`You both tied in numbers!`);
        } else if (drawn > botc) {
            alert(`You won against the bot by having a bigger number!`);
            userp = userp + 1;
        } else {
            alert(`The bot won against you by having a bigger a number!`);
            botc = botc + 1;
        }
    }
    
    do {
        var con = prompt(`Would you like to continue? (use y or n)`);
    } while ((con != `n`) && (con != `y`))

    if (con == `y`) {
        botc = botc * 0;
        drawn = drawn * 0;
    }

} while (con != `n`)

if (userp > botp) {
    alert(`You won and the bot lost!`);
} else if (userp < botp) {
    alert(`You lost and the bot won!`);
} else if (userp == botp) {
    alert(`You both tied`);
}

alert(`Thank you for playing the game!`);
