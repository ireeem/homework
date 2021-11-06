//1

function findPrime(...numbers) {
    let primeNumbers = []
    let nonPrimeNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        let prime = 0
        if (numbers[i] >= 2) {
            for (let a = 2; a < numbers[i]; a++) {
                if (numbers[i] % a == 0) {
                    nonPrimeNumbers.push(numbers[i])
                    prime = prime + 1
                    break
                }
            }
            if (prime == 0) {
                primeNumbers.push(numbers[i])
            }
        } else {
            nonPrimeNumbers.push(numbers[i])
        }
    }
    console.log(numbers + " içinde sayıları bulunan:")
    console.log("Asal Sayılar: " + primeNumbers)
    console.log("Asal Olmayan Sayılar: " + nonPrimeNumbers)
}
findPrime(2, 19, 24, 37, 14, 12, 11, 1, -12)

//2
function friendNumbers(number1, number2) {
    let totalNumber1 = 0
    let totalNumber2 = 0
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            totalNumber1 = totalNumber1 + i
        }
    }
    for (let j = 0; j < number2; j++) {
        if (number2 % j == 0) {
            totalNumber2 = totalNumber2 + j
        }
    }
    if (number1 == totalNumber2 && number2 == totalNumber1) {
        console.log("(" + number1 + "," + number2 + ") arkadaş sayılardır.")
    } else {
        console.log("(" + number1 + "," + number2 + ") arkadaş sayı değildir.")
    }

}
friendNumbers(220, 284)
friendNumbers(1184, 1210)
friendNumbers(118, 121)

//3
for (let i = 1; i < 1000; i++) {
    let total = 0
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            total = total + j
        }
    }
    if (i * 2 == total) {
        console.log("Mükemmel sayı: " + i)
    }
}

//4

for (let i = 2; i < 1000; i++) {
    let prime = 0

    for (let a = 2; a < i; a++) {
        if (i % a == 0) {
            prime = prime + 1
            break
        }
    }
    if (prime == 0) {
        console.log(i + "Sayı asaldır")

    }
}