module.exports = function toReadable (number){
    let result = "";
    if(number == 0) return "zero";
    let digit = ['', 'one','two','three','four', 'five','six','seven','eight','nine'];
    let tens = ['', 'ten', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let special = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let lastTwo = number % 100;
    if( lastTwo >= 10 && lastTwo <=19){
        result = special[lastTwo - 10];
    } else{
        let lastDigit = lastTwo % 10;
        let secondDigit = Math.floor(lastTwo / 10);
        result = tens[secondDigit] + (secondDigit == 0 || lastDigit == 0 ? "" : " ") + digit[lastDigit];
    }
    if(number >= 100){
        let firstDigit = Math.floor(number / 100);
        result = digit[firstDigit] + " " + "hundred" + (lastTwo == 0 ? "" : " ") + result;
    }

    return result;
}