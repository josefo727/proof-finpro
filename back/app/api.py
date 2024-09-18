from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from app.email import send_email_to_admin, send_thank_you_email

router = APIRouter()


class ContactForm(BaseModel):
    fullName: str
    email: EmailStr
    message: str


@router.post("/api/send-email/")
async def send_email_route(contact: ContactForm):
    try:
        # Enviar correo a la administración
        send_email_to_admin(contact.fullName, contact.email, contact.message)

        # Enviar correo de agradecimiento al usuario
        send_thank_you_email(contact.email, contact.fullName)

        return {"message": "Emails sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error sending emails: {str(e)}")
