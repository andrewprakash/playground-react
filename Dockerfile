FROM node:8.9.0
WORKDIR /app
ADD package.json /app
EXPOSE 80
RUN npm install