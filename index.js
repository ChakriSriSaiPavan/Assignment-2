function reverseFunction() {
    const input = document.getElementById("Input").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("reversed").textContent = "Reversed: " + reversed;
}

function palindromeFunction() {
    const input = document.getElementById("Input").value;
    const reversedInput = input.split("").reverse().join("");
    const isPalindrome = input === reversedInput;
    const result = isPalindrome ? "It's a Palindrome" : "Not a palindrome";
    document.getElementById("palindrome").textContent = result;
}

function totalFunction() {
    const subtotal = parseFloat(document.getElementById("subtotalInput").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentageInput").value);
    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;
    document.getElementById("totalAmount").textContent = "Total Amount: $" + totalAmount;
}
