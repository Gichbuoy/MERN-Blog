# MERN Blog
Welcome to the Fullstack Blog Application built using the MERN (MongoDB, Express.js, React, Node.js) stack! 
- This project aims to provide a comprehensive example of a modern web application for creating, reading, updating, and deleting blog posts. The MERN stack is a powerful combination of technologies that allows for efficient development of fullstack web applications.

### Table of Contents
Features
Getting Started
Prerequisites
Installation
Configuration
Usage
Folder Structure
Technologies Used
Contributing
License


### Features
User authentication and authorization (Sign Up, Sign In, Sign Out) using JSON Web Tokens (JWT)
Create, edit, and delete blog posts
View a list of all blog posts on the homepage
Responsive design for seamless user experience on various devices
Comments section for each blog post
Markdown support for writing blog content
User-friendly interface for managing blog posts
RESTful API design for backend operations
Error handling and validation to ensure data integrity
MongoDB for data storage, Express.js for server-side logic, React for the front end, and Node.js for the runtime environment


### Getting Started
Follow these instructions to get the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js and npm installed (Download and install from Node.js official website)
MongoDB installed and running (Download and installation instructions can be found on the MongoDB website)

### Installation
1. Clone this repository to your local machine using:
```
git clone https://github.com/Gichbuoy/MERN-Blog.git
```

2. Navigate to the project directory:
```
cd MERN-Blog
```

3. Install server dependencies:
```
cd server
npm install
```

4. Install frontend dependencies
```
cd ../client
npm install
```


### Usage
1. Start the server:
```
cd server
npm start
```

2. Start the client
```
cd client
npm start
```

3. Open your web browser and go to **http://localhost:3000** to access the application.


### Folder Structure
The project is organized as follows:

client: Frontend React application
server: Backend Express.js application
public: Public assets for the client
docs: Documentation files (README, images, etc.)

### Technologies Used
Frontend:

* React
* React Router
* Redux (optional, for state management)
* Axios (for making API requests)
* Markdown-to-HTML conversion library (e.g., marked)

Backend:

* Express.js
* MongoDB (via Mongoose)
* JSON Web Tokens (JWT) for authentication


### Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.

### License
This project is licensed under the [MIT License]().