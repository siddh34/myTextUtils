# The command FROM node:18 Grabs node js version 18

# WORKDIR is the directory where we will be save our application files in docker container

# RUN npm install means it installs node js

# COPY use to copy specified files into /app

# CMD ["npm", "start"]: runs the npm start command

FROM node:18 

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]
