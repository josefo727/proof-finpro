# FinPro Landing Page with FastAPI and Next.js

This is a full-stack project consisting of a frontend built with Next.js (TypeScript, TailwindCSS) and a backend using FastAPI (Python). The project handles form submissions and sends emails using an SMTP server (Mailpit for development). Both frontend and backend services are containerized using Docker.

## Project Structure

```
.
├── back                 # Backend (FastAPI) application
│   ├── app              # FastAPI app code
│   │   ├── api.py       # API routes
│   │   ├── email.py     # Email sending logic
│   │   ├── models.py    # Data models
│   ├── Dockerfile       # Docker configuration for the backend
│   ├── main.py          # Entry point for FastAPI
│   └── requirements.txt # Python dependencies
├── front                # Frontend (Next.js) application
│   ├── app              # Next.js app code
│   ├── Dockerfile       # Docker configuration for the frontend
│   ├── next.config.mjs  # Next.js configuration
│   ├── public           # Static assets
│   │   ├── images       # Image assets
├── docker-compose.yml   # Docker Compose file to run the entire app
└── README.md            # Project documentation
```

> [!IMPORTANT] First, in the `back` directory, copy the `.env.example` file to `.env`.

## Running the Project with Docker Compose

To run both the frontend and backend using Docker Compose, follow these steps:

1. **Build and run the containers**:
   
   In the root directory of the project, run the following command:

   ```bash
   docker-compose up --build
   ```

   This command will build and start all necessary services, including the **frontend**, **backend**, and **Mailpit** (used for capturing outgoing emails during development).

2. **Access the application**:

   - Frontend: Open your browser and go to [http://localhost:3000/](http://localhost:3000/) to access the landing page.
   - Mailpit: Open [http://localhost:8025/](http://localhost:8025/) to view any emails sent by the application.

3. **Sending a Test Email**:

   - When the contact form is submitted, an email will be sent to the admin and a thank you email will be sent to the user's email address.
   - You can verify the email flow by checking **Mailpit** at [http://localhost:8025/](http://localhost:8025/), where all the emails will be captured and displayed during development.

## Running the Project Without Docker

If you prefer not to use Docker for development, you can run both the frontend and backend locally on your machine. Follow the steps below for each part:

### Running the Backend Locally

1. Navigate to the `back` directory:
   
   ```bash
   cd back
   ```

2. Install the Python dependencies:
   
   ```bash
   pip install -r requirements.txt
   ```

3. Run the FastAPI server:

   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

4. The backend API will be available at [http://localhost:8000/](http://localhost:8000/).

### Running the Frontend Locally

1. Navigate to the `front` directory:

   ```bash
   cd front
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the Next.js development server:

   ```bash
   npm run dev
   ```

4. The frontend will be available at [http://localhost:3000/](http://localhost:3000/).

### Mailpit for Email Testing

Even without Docker, you can still use **Mailpit** for email testing. You will need to run Mailpit separately or configure your own SMTP server. For Mailpit, download and run it directly from the official source:

- [Mailpit GitHub Repository](https://github.com/axllent/mailpit)

Once Mailpit is running, adjust your `.env` file to point to the Mailpit SMTP server, typically on `localhost:1025`.

## Environment Variables

Ensure the following environment variables are set in the `.env` file for both frontend and backend:

```bash
# Backend (FastAPI)
SMTP_SERVER=mail  # Or "localhost" if running Mailpit separately
SMTP_PORT=1025
ADMIN_EMAIL=admin@finpro.com
NO_REPLY_EMAIL=no-reply@finpro.com

# Frontend (Next.js)
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## Notes

- **Mailpit** is used as a development SMTP server. It captures outgoing emails and makes them accessible via a web interface.
- The **Docker Compose** setup includes all necessary services, but you can also run everything locally without Docker.
- The project uses **TailwindCSS** for styling and **TypeScript** for type safety in the frontend.
```
