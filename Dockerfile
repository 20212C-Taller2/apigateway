FROM node:14

WORKDIR /app/
COPY package.json package-lock.json ./
RUN npm ci

COPY bin/ routes/ services/ app.js ./
CMD npm start