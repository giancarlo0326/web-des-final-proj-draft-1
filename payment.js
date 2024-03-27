document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardNumber');
    const holderNameInput = document.getElementById('holderName');
    const passcodeInput = document.getElementById('passcode');
    const payNowBtn = document.getElementById('payNowBtn');

    // Function to validate card number
    function validateCardNumber(cardNumber) {
        const regex = /^\d{4} \d{4} \d{4} \d{4}$/;
        return regex.test(cardNumber);
    }

    // Function to add spaces to card number
    function formatCardNumber(cardNumber) {
        // Remove all non-numeric characters
        const numericValue = cardNumber.replace(/\D/g, '');
        // Add space every 4 characters
        const formattedValue = numericValue.replace(/(\d{4})/g, '$1 ').trim();
        return formattedValue;
    }

    // Function to validate holder's name
    function validateHolderName(holderName) {
        const regex = /^[a-zA-Z\s]{12,}$/;
        return regex.test(holderName);
    }

    // Function to validate passcode
    function validatePasscode(passcode) {
        const regex = /^\d{0,4}$/;
        return regex.test(passcode);
    }

    // Function to check if all fields are valid
    function validateForm() {
        const cardNumber = cardNumberInput.value.trim();
        const holderName = holderNameInput.value.trim();
        const passcode = passcodeInput.value.trim();

        if (!validateCardNumber(cardNumber)) {
            alert("Please enter a valid card number.");
            return false;
        }

        if (!validateHolderName(holderName)) {
            alert("Please enter a valid holder's name with minimum 12 characters.");
            return false;
        }

        if (!validatePasscode(passcode)) {
            alert("Please enter a valid 4-digit passcode.");
            return false;
        }

        return true;
    }

    // Event listener for the pay now button
    payNowBtn.addEventListener('click', function() {
        if (validateForm()) {
            // Clear cart items upon successful payment
            clearCartItems();
            // Redirect to history page
            window.location.href = 'history.html';
        }
    });

    function clearCartItems() {
        localStorage.removeItem('cartItems');
    }

    // Event listener for card number input to add spaces as the user types
    cardNumberInput.addEventListener('input', function(event) {
        const formattedValue = formatCardNumber(event.target.value);
        event.target.value = formattedValue;
    });

    // Allow backspace in passcode input
    passcodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' || /\d/.test(event.key)) {
            return;
        }
        event.preventDefault();
    });
});
