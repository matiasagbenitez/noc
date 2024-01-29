# noc

NOC is a console application crafted in NodeJS with Typescript, intended for acquiring foundational knowledge of the framework, adopting good development practices, and adhering to clean code principles. This versatile application excels in monitoring a designated service to validate the connection and storing the results through three distinct mechanisms: in the file system, within a MongoDB database, and in a PostgreSQL database. Furthermore, it includes functionality for sending emails using the Gmail SMTP server (NodeMailer), complete with attachment files such as logs.

## Requirements

- NodeJS (v18.19.0 or higher is recommended)
- NPM (v10.2.3 or higher is recommended)
- Docker (and Docker Compose for running the database containers)

## Installation

1. Clone the repository

```bash
git clone https://github.com/matiasagbenitez/noc
```

2. Install the dependencies

```bash
npm install
```

3. Create a .env file in the root directory and fill it with the following environment variables:

```bash
PORT=3000
MAILER_SERVICE=
MAILER_EMAIL=
MAILER_SECRET_KEY=
PROD=false

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

POSTGRES_URL=
POSTGRES_USER=
POSTGRES_DB=
POSTGRES_PASSWORD=
```

4. Run docker-compose to start the database containers

```bash
docker-compose up -d
```

5. Run the prisma migrations to create the database tables

```bash
npx prisma migrate dev --name init
```

6. Run the application

```bash
npm run dev
```

This repository serves as an educational and practical resource for those looking to explore the mentioned technologies and learn to develop robust and scalable console applications with NodeJS and Typescript.
