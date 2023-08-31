# Use an official Node.js runtime as the base image
FROM node

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 80
EXPOSE 80

# Start the application
CMD [ "npm", "start" ]
