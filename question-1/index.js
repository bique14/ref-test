const inputBox = document.getElementById("inputBox");
const dropdown = document.getElementById("dropdown");
const result = document.getElementById("result");

const type_ = {
  IS_PRIME: "isPrime",
  IS_FIBO: "isFibonacci",
};

inputBox.addEventListener("input", () => {
  const inp = Math.round(parseInt(inputBox.value));
  if (inp < 0) {
    inputBox.value = 1;
  }

  if (dropdown.value == type_.IS_PRIME) {
    result.innerText = isPrime(inp);
  } else if (dropdown.value == type_.IS_FIBO) {
    result.innerText = isFibonacci(inp);
  }
});

dropdown.addEventListener("change", (e) => {
  const inp = Math.round(parseInt(inputBox.value));
  result.innerText = dropdown.value;

  if (dropdown.value == type_.IS_PRIME) {
    result.innerText = isPrime(inp);
  } else if (dropdown.value == type_.IS_FIBO) {
    result.innerText = isFibonacci(inp);
  }
});

const isPrime = (num) => {
  let s = Math.sqrt(num);
  for (let i = 2; i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};

function isFibonacci(n) {
  function isPerfectSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }

  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}
