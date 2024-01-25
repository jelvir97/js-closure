function guessingGame() {
    const num = Math.ceil(Math.random() * 100)
    let count = 0;
    let won = false;
    return function(guess){
        if(won) return "The game is over, you already won!"
        count++;
        if(guess === num){
            won = true;
            return `You win! You found ${num} in ${count} guesses.`
        }else if(guess > num ){
            return `${guess} is too high!`
        }
        return `${guess} is too low!`
    }
}

module.exports = { guessingGame };
