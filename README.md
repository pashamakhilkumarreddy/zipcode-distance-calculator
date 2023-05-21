# Node Microservice Harness

### To run the application in local
- `npm run dev`

### To run the application in watch mode (using nodemon)
- `npm run start`

### To run the application using docker
- `docker build -t node-app .`
- `docker run -dit -p 127.0.0.1:5000:5000 node-app --env-file .env`