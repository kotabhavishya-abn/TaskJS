async function sendOTP() {
    const email = document.getElementById('email').value;
    try {
        const response = await fetch('http://localhost:8000/forgot-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        
        const data = await response.json();
        if (response.ok) {
            // Handle successful response
            alert(data.message); // Display success message
        } else {
            // Handle error response
            alert(data.detail); // Display error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}


async function resetPassword() {
    // Similar fetch logic for resetting password
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