const expr = document.getElementById('prev');
const resl = document.getElementById('curr');
const numbtn = document.querySelectorAll('.btn-number');
const opt = document.querySelectorAll('.btn-operator');
const equal = document.querySelector('.btn-equals');





const del = document.querySelector('.btn-del');
const per = document.querySelector('.btn-per');

let EXPRESSIONS = "";

function addToExp(value) {
    EXPRESSIONS += value;
    expr.textContent = EXPRESSIONS;
}

for (let num of numbtn) {
    num.onclick = (e) => {
        let txt = e.target.textContent;
        addToExp(txt);
    };
}

const clearAll = () => {
    EXPRESSIONS = "";
    expr.textContent = "0";
    resl.textContent = "0";
};

for (const sign of opt) {
    sign.onclick = (e) => {
        const txt = e.target.textContent;
        const lastChar = EXPRESSIONS.at(-1);
        const operators = ["+", "−", "×", "÷", "%"]; 
        if (operators.includes(lastChar)) {
            return;
        }
        addToExp(txt);
    };
}

per.onclick = () => {
    if (EXPRESSIONS === "") return;

    const lastChar = EXPRESSIONS.at(-1);
    const operators = ["+", "−", "×", "÷", "%"]; 
    if (operators.includes(lastChar)) {
        return;
    }
    addToExp("%");
};

function calcu8() {
    if (EXPRESSIONS === "") return;

    let lastIndex = EXPRESSIONS.length - 1;
    let operators = ["+", "−", "×", "÷"]; 
    if (operators.includes(EXPRESSIONS[lastIndex])) {
        return;
    }

    let formexp = EXPRESSIONS
        .replaceAll("÷", "/")
        .replaceAll("×", "*")
        .replaceAll("−", "-")
        .replaceAll("%", "/100");

    let result = eval(formexp);

    if (EXPRESSIONS.includes('÷') || EXPRESSIONS.includes('%')) {
        result = Number(result.toFixed(2)); 
    }
    resl.textContent = result;
}

equal.onclick = () => {
    calcu8();
};

function delChar() {
    EXPRESSIONS = EXPRESSIONS.slice(0, -1);

    if (EXPRESSIONS === "") {
        expr.textContent = "0";
    } else {
        expr.textContent = EXPRESSIONS;
    }
}

del.onclick = () => {
    delChar();
};