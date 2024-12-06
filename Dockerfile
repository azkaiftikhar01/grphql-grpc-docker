# Step 1: Use an official Node.js image as the base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Expose the port your application runs on
EXPOSE 3000

# Step 7: Define the command to start your application
CMD ["node", "index.js"]
