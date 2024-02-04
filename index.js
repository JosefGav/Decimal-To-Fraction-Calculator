// let n = 0
// const  a = 0.0012;
// const r = 0.01;
// let sum = 0.34

// while (true) {
//     sum +=  a* Math.pow(r,n)
//     n++
//     console.log(sum)
// }

let constantField = document.getElementById("constant");
let repeatingField = document.getElementById("repeating");
let output  = document.getElementById("result")


class Fraction {
    constructor(numerator, denominator) {
        let gcd =  GCD(numerator,denominator);

        this.numerator = numerator / gcd
        this.denominator = denominator / gcd
    }

    simplify() {
        let gcd =  GCD(this.numerator,this.denominator);

        this.numerator = this.numerator / gcd
        this.denominator = this.denominator / gcd

        if (this.numerator < 0 && this.denominator < 0) {
            this.numerator = Math.abs(this.numerator)
            this.denominator = Math.abs(this.denominator)
        } else if (this.denominator < 0) {
            this.numerator *= -1
            this.denominator *= -1
        }
    }

    add(fraction) {
        let lcd = Math.abs(fraction.denominator * this.denominator) / GCD(fraction.denominator,this.denominator)
        
        this.numerator = this.numerator * (lcd/this.denominator) + fraction.numerator * (lcd/fraction.denominator)


        this.denominator = lcd

    }

    subtract(fraction) {
        let lcd = Math.abs(fraction.denominator * this.denominator) / GCD(fraction.denominator,this.denominator)


        this.numerator = this.numerator * (lcd/this.denominator) - fraction.numerator * (lcd/fraction.denominator)


        this.denominator = lcd

    }

    multiply(num) {
        this.numerator *= num
    }

    divide (fraction) {
        let tempFrac = new Fraction(this.numerator*fraction.denominator, this.denominator*fraction.numerator)
        this.numerator = tempFrac.numerator
        this.denominator = tempFrac.denominator
    }

    print() {
        console.log(this.numerator+"/"+this.denominator)
    }
}

function GCD (a, b) {
    a = Math.abs(a)
    b = Math.abs(b)

    if (!b) {
      return a;
    }
  
    return GCD(b, a % b);
}


function computeFraction() {
    let constant = constantField.value
    let repeating = repeatingField.value


    let repeatingLength = ("" + repeating).length

    let wholeLength  = ("" + constant).length  + repeatingLength


    let nonRepeating = new Fraction(constant,Math.pow(10,wholeLength-repeatingLength))

    let r = new Fraction(1,Math.pow(10,repeatingLength))

    let a = new Fraction(repeating,Math.pow(10,wholeLength))

    a.multiply(-1)

    r.subtract(new Fraction(1,1))

    a.divide(r)
    
    a.add(nonRepeating)

    a.simplify()

    let resultingFraction = a
    console.log("-------------------------")
    resultingFraction.print()
    displayFraction(resultingFraction)
}


function displayFraction(fraction) {
    output.innerHTML = fraction.numerator + "/" + fraction.denominator
}

// let  frac = new Fraction(4,9)
// frac.subtract(new Fraction(1,1))
// frac.print()
// frac.multiply(-1)


// frac.print()
// frac.multiply(-1)

// frac.subtract(new Fraction(1,1))


