var Money = /** @class */ (function () {
    function Money(amount) {
        this.amount = amount;
    }
    Money.prototype.setAmountBig = function (amountBig) {
        var newAmountBig = amountBig * 10000;
        var amountSmall = this.getAmountSmall() * 1000;
        this.amount = newAmountBig + amountSmall;
    };
    Money.prototype.setAmountSmall = function (amountSmall) {
        var newAmountSmall = amountSmall * 1000;
        var amountBig = this.getAmountBig() * 10000;
        this.amount = amountBig + newAmountSmall;
    };
    Money.prototype.getAmountBig = function () {
        return Number(String(this.amount / 1000).slice(0, -1)) | 0;
    };
    Money.prototype.getAmountSmall = function () {
        return Number(String(this.amount / 1000).slice(-1)) | 0;
    };
    Money.prototype.getAmount = function () {
        return this.amount;
    };
    return Money;
}());
var money = new Money(10000);
console.log(money.getAmountBig());
console.log(money.getAmountSmall());
console.log(money.getAmount());
var money2 = new Money(1238000);
console.log(money2.getAmountBig());
console.log(money2.getAmountSmall());
console.log(money2.getAmount());
var money3 = new Money(1000);
console.log(money3.getAmountBig());
console.log(money3.getAmountSmall());
console.log(money3.getAmount());
