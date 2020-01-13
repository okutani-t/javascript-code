class Money {
    amount: number;

    constructor(amount: number) {
        this.amount = amount
    }

    public setAmountBig(amountBig: number) {
        const newAmountBig = amountBig * 10000
        const amountSmall = this.getAmountSmall() * 1000
        this.amount = newAmountBig + amountSmall
    }

    public setAmountSmall(amountSmall: number) {
        const newAmountSmall = amountSmall * 1000
        const amountBig = this.getAmountBig() * 10000
        this.amount = amountBig + newAmountSmall
    }

    public getAmountBig() {
        return Number(String(this.amount / 1000).slice(0, -1)) | 0
    }

    public getAmountSmall() {
        return Number(String(this.amount / 1000).slice(-1)) | 0
    }

    public getAmount() {
        return this.amount
    }
}

const money = new Money(10000)
console.log(money.getAmountBig())
console.log(money.getAmountSmall())
console.log(money.getAmount())

const money2 = new Money(1238000)
console.log(money2.getAmountBig())
console.log(money2.getAmountSmall())
console.log(money2.getAmount())

const money3 = new Money(1000)
console.log(money3.getAmountBig())
console.log(money3.getAmountSmall())
console.log(money3.getAmount())
