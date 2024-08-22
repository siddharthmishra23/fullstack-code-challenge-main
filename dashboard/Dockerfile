# Stage 1: Build the application
FROM node:18-alpine as build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using 'serve'
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app/dist /app

# Install serve globally
RUN npm install -g serve

# Expose port 3000 (or any other port you want to use)
EXPOSE 3000

# Command to serve the application
CMD ["serve", "-s", ".", "-l", "3000"]