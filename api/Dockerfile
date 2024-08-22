# Use an official Node runtime as a parent image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json .

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .


EXPOSE 3002

# Define the command to run your app
CMD ["npm", "start"]
