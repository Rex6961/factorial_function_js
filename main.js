/* two options how calculate a factorial*/

/*This is iteration factorial function*/
function calculateTimeCompleteIterationFactorial(numberFactorial) {
    let factorial = 1;
    const start = Date.now();
    for (let i=1; i<=numberFactorial; i++) {
        factorial *= i;
    }
    const end = Date.now();
    const elapsed = end - start;
    return elapsed;
}

/*This is recursive factorial function*/
var factorial = 1;
const start = Date.now();

function calculateTimeCompleteRecursiveFactorial(numberFactorial) {
    if (numberFactorial == 1) {
        return
    } else {
        factorial *= numberFactorial
        calculateTimeCompleteRecursiveFactorial(numberFactorial - 1)
    }
    const end = Date.now();
    const elapsed = end - start;
    return elapsed;
}

/*This is example iteration factorial function sees how running
 recursive factorial function*/
function factorialStack(number) {
    let callStack = []
    callStack.push({"returnAddr": "start", "number": number});
    let returnValue;

    while (callStack.length > 0) {
        let number = callStack[callStack.length - 1]["number"];
        let returnAddr = callStack[callStack.length - 1]["returnAddr"];

        if (returnAddr == "start") {
            if (number == 1) {
                returnValue = 1;
                callStack.pop();
                continue;
            } else {
                callStack[callStack.length - 1]["returnAddr"] = "after recursive call";
                callStack.push({"returnAddr": "start", "number": number - 1});
                continue;
            }
        } else if (returnAddr == "after recursive call") {
            returnValue = number * returnValue;
            callStack.pop()
            continue;
        }
    }
    return returnValue;
}

let number = Number(prompt('Enter !factorial'));

document.write(factorialStack(number) + "<br/>");
document.write(calculateTimeCompleteIterationFactorial(number) + "<br/>");
document.write(calculateTimeCompleteRecursiveFactorial(number) + "<br/>");
