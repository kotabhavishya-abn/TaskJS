async function sendOTP() {
    
    console.log('Sending OTP...');
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    console.log('Email:', email);

    if (!email) {
        alert('Please enter your email.');
        return;
    }

    try {
        const response = await fetch('/forgot-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        console.log('Response status:', response.status);
        console.log('Response status text:', response.statusText);

        const data = await response.json();
        console.log('Response from server:', data);
        if (response.ok) {
            alert(data.message);
        } else {
            alert(data.detail);
        }

        // Clear the email input field
        emailInput.value = '';

        document.getElementById('sendOTPSection').style.display = 'none';
        document.getElementById('enterOTPSection').style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}


async function resetPassword() {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    try {
        const response = await fetch('/reset-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp, new_password: newPassword, confirm_password: confirmPassword }),
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}
