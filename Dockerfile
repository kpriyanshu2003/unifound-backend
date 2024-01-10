FROM node:21-alpine3.17
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV ADMIN_TOKEN=admin0
ENV PORT=3300
ENV MONGO_URL=mongodb+srv://unifound:rRa0Ij0Dioi4z8hb@cluster0.ohfl2ma.mongodb.net/
EXPOSE 3300
CMD ["npm", "start"]
