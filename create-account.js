function createAccount(pin, amount=0) {
    function verifyPIN(p){
        return p ===pin
    }
    return{
        'checkBalance' : function(p){
            if(verifyPIN(p)) return "$" + amount;
            return "Invalid PIN.";
        },
        'deposit' : function(p, amt){
            if(verifyPIN(p)){
                amount+= amt;
                return `Succesfully deposited $${amt}. Current balance: $${amount}.`
            }
            return "Invalid PIN.";
        },
        'withdraw': function(p, amt){
            if(verifyPIN(p)){
                if(amt>amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
                amount-= amt
                return `Succesfully withdrew $${amt}. Current balance: $${amount}.`
            }

            return "Invalid PIN.";
        },
        'changePin': function(p,newPin){
            if(verifyPIN(p)){
                pin = newPin;
                return "PIN successfully changed!"
            }
            return "Invalid PIN.";
        }
    }
}

module.exports = { createAccount };
