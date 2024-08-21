# Use an official Node.js runtime as a base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Command to serve the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]
