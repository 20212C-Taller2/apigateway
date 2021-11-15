FROM node:14

WORKDIR /app/
COPY package.json package-lock.json ./
RUN npm ci

COPY bin ./bin
COPY routes ./routes
COPY services ./services
COPY app.js swagger.json ./

CMD npm start