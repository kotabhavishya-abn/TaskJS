// static/script.js
async function sendOTP() {
    const email = document.getElementById('email').value;
    const response = await fetch('/forgot-password/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });
    const data = await response.json();
    alert(data.message);
}

async function resetPassword() {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const response = await fetch('/reset-password/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, new_password: newPassword, confirm_password: confirmPassword }),
    });
    const data = await response.json();
    alert(data.message);
}
