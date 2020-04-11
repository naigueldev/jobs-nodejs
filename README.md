# NodeJs - Send Mail

Example project to send mail using Jobs and Queues.

## Used Redis-based queue for Node

https://github.com/OptimalBits/bull

## Configuration in .env file

Hint: Use https://mailtrap.io to create mail host for test

```
MAIL_HOST = smtp.mailtrap.io
MAIL_PORT = mail_port
MAIL_USER = user_hash
MAIL_PASS = password_hash

REDIS_HOST = 127.0.0.1
REDIS_PORT = 6379
```

## Executing this project

Install dependencies

```
npm install
```

Command to run server.js and queue.js

```
npm run dev
```

### Executing in Docker

Clone this project
Go to directory and run this command to create image from Dockerfile:

```
docker build . -t {image_name}
```

Run container:

```
docker run -p {port}:3333 -d {image_name}
```

{image_name} must be the same choice in the image build.
{port} must be replaced by your application port.
