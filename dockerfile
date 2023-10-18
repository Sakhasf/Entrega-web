FROM node:18-alpine

ENV DB_HOST postgres
ENV DB_PORT  5432
ENV DB_USERNAME  test
ENV DB_PASSWORD password
ENV DB_NAME databasename

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]