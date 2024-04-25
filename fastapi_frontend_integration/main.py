from fastapi import FastAPI, HTTPException
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from fastapi.staticfiles import StaticFiles
import random
import string

app = FastAPI()

conf = ConnectionConfig(
    MAIL_USERNAME="kotabhavishya67@gmail.com", 
    MAIL_PASSWORD="shwm pkqb vplb ilar",   
    MAIL_FROM="kotabhavishya67@gmail.com",      
    MAIL_PORT=587,                         
    MAIL_SERVER="smtp.gmail.com",          
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)
otp_storage = {}

@app.post("/forgot-password/")
async def send_otp_for_password_reset(email: str):
    
    otp = ''.join(random.choices(string.digits, k=6))
    otp_storage[email] = otp
    message = f"<h3>Your OTP for password reset is:</h1> <b>{otp}</b>"
    message_schema = MessageSchema(
        subject="Password Reset OTP",
        recipients=[email],
        body=message,
        subtype="html"
    )
    fm = FastMail(conf)
    await fm.send_message(message=message_schema)
    return {"message": "OTP sent successfully"}

@app.post("/reset-password/")
async def reset_password(email: str, otp: str, new_password: str, confirm_password: str):
    if email in otp_storage and otp_storage[email] == otp:
        
        if new_password == confirm_password:
            
            print("Password for " + email + " updated to: " + new_password)
            
            del otp_storage[email]

            # Send confirmation email
            await send_confirmation_email(email)

            return {"message": "Password reset successful"}
        else:
            raise HTTPException(status_code=400, detail="New password does not match confirm password")
    else:
        raise HTTPException(status_code=400, detail="Invalid OTP")


async def send_confirmation_email(email: str):
    subject = "<h2>Password Reset Successful</h2>"
    message = "Your password has been reset successfully."

    message_schema = MessageSchema(
        subject=subject,
        recipients=[email],
        body=message,
        subtype="html"
    )

    fm = FastMail(conf)
    await fm.send_message(message=message_schema)

app.mount("/static", StaticFiles(directory="static"), name="static")
