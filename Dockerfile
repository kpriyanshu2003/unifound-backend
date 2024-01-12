FROM node:21-alpine3.17
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV ADMIN_TOKEN=your_random_string
ENV PORT=3300
ENV MONGO_URL=your_mongodb_url
EXPOSE 3300
CMD ["npm", "start"]
