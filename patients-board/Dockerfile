FROM node:18-alpine
WORKDIR /patients-board

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "dev"]