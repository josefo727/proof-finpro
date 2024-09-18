import os
from dotenv import load_dotenv
import smtplib
from smtplib import (
    SMTPRecipientsRefused,
    SMTPSenderRefused,
    SMTPDataError,
    SMTPException,
)
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = os.getenv("SMTP_PORT")
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL")
NO_REPLY_EMAIL = os.getenv("NO_REPLY_EMAIL")

print(SMTP_SERVER, SMTP_PORT, ADMIN_EMAIL, NO_REPLY_EMAIL)


def send_email_to_admin(full_name: str, email: str, message: str):
    try:
        msg = MIMEMultipart()
        msg["From"] = NO_REPLY_EMAIL
        msg["To"] = ADMIN_EMAIL
        msg["Subject"] = f"Nuevo mensaje de {full_name}"

        # Cuerpo del correo
        body = f"Has recibido un nuevo mensaje de contacto.\n\nNombre: {full_name}\nCorreo: {email}\nMensaje: {message}"
        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.sendmail(msg["From"], msg["To"], msg.as_string())
        server.quit()
    except SMTPRecipientsRefused as e:
        print(f"Destinatario rechazado: {str(e)}")
    except SMTPSenderRefused as e:
        print(f"Remitente rechazado: {str(e)}")
    except SMTPDataError as e:
        print(f"Error en los datos enviados: {str(e)}")
    except SMTPException as e:
        print(f"Error en el envío de correo: {str(e)}")
    except Exception as e:
        print(f"Error general: {str(e)}")


def send_thank_you_email(to_email: str, full_name: str):
    try:
        msg = MIMEMultipart()
        msg["From"] = NO_REPLY_EMAIL
        msg["To"] = to_email
        msg["Subject"] = "¡Gracias por contactarnos!"

        body = f"Hola {full_name},\n\nGracias por contactarnos. Pronto nos pondremos en contacto contigo.\n\nSaludos,\nFinPro"
        msg.attach(MIMEText(body, "plain"))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.sendmail(msg["From"], msg["To"], msg.as_string())
        server.quit()
    except SMTPRecipientsRefused as e:
        print(f"Destinatario rechazado: {str(e)}")
    except SMTPSenderRefused as e:
        print(f"Remitente rechazado: {str(e)}")
    except SMTPDataError as e:
        print(f"Error en los datos enviados: {str(e)}")
    except SMTPException as e:
        print(f"Error en el envío de correo: {str(e)}")
    except Exception as e:
        print(f"Error general: {str(e)}")
