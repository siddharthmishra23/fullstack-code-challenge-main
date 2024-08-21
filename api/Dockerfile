# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Your app binds to port 3000, make sure you expose it.
EXPOSE 3000

# Define the command to run your app
CMD ["node", "index.js"]
