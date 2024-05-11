function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function erlangB(B, A, n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += (A ** i) / factorial(i);
    }
    return ((A ** n) / factorial(n)) * (1 / sum) - B;
}

function bisect(func, a, b, tol) {
    let c = (a + b) / 2;
    while ((b - a) / 2 > tol) {
        if (func(c) === 0) {
            break;
        } else if (func(a) * func(c) < 0) {
            b = c;
        } else {
            a = c;
        }
        c = (a + b) / 2;
    }
    return c;
}

function calculateErlangB() {
    const variable = document.getElementById('variable').value;
    let A, n, B;

    if (variable === 'A') {
        n = parseInt(prompt('Digite o valor de n:'));
        B = parseFloat(prompt('Digite o valor de B:'));
        A = bisect(x => erlangB(B, x, n), 0, 1000, 1e-4);
        document.getElementById('result').innerText = `O valor de A é: ${A.toFixed(4)}`;
    } else if (variable === 'n') {
        A = parseFloat(prompt('Digite o valor de A:'));
        B = parseFloat(prompt('Digite o valor de B:'));
        n = bisect(x => erlangB(B, A, x), 0, 1000, 1e-4);
        document.getElementById('result').innerText = `O valor de n é: ${n.toFixed(4)}`;
    } else if (variable === 'B') {
        A = parseFloat(prompt('Digite o valor de A:'));
        n = parseInt(prompt('Digite o valor de n:'));
        B = bisect(x => erlangB(x, A, n), 0, 1, 1e-4);
        document.getElementById('result').innerText = `O valor de B é: ${B.toFixed(4)}`;
    }
}

document.getElementById('calculate').addEventListener('click', calculateErlangB);
