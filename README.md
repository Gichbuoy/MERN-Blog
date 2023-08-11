# MERN Blog
Welcome to the Fullstack Blog Application built using the MERN (MongoDB, Express.js, React, Node.js) stack! 
- The MERN stack is a powerful combination of technologies that allows for efficient development of fullstack web applications.


### Features
* Building an extensive backend API with Node.js and Express.
* Extensive API testing with Postman.
* Integrating React with the backend in an elegant way, creating a great workflow.
* Building the frontend to work with the API.
* GET and POST request using MongoDB.



> MongoDB for data storage,
> Express.js for server-side logic,
> React for the front end, and
> Node.js for the runtime environment


### Getting Started
Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites
Node.js and npm installed (Download and install from **Node.js official website**)
MongoDB installed and running (Download and installation instructions can be found on the **MongoDB website**)

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
npm install
```

4. Install frontend dependencies
```
cd frontend
npm install -D tailwindcss
npx tailwindcss init -p => Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.
npm install --save react-router-dom => for navigating pages
npm init -y => initialize node package
npm install express
npm install -D concurrently nodemon  => tool that allows to run multiple commands 	concurrently to start both front and backend
```


### Usage
1. Start the server:
```
navigate to root dir
npm start server
```

2. Start the client/frontend
```
cd frontend
npm run frontend
```

3. To start both frontend and backend concurrently
```
npm run dev
```

4. Open your web browser and go to **http://localhost:3000** to access the application.


### Folder Structure
The project is organized as follows:

frontend: Frontend React application
node_modules: dependency files
public: Public assets for the client
server.js: Backend Express.js application



### Technologies Used
Frontend:

* React
* React Router
* ES6+
* Postman (for making API requests)
* Tailwind CSS

Backend:

* Express.js
* Node.js
* MongoDB (via Mongodb Compass && Mongoose)


### Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.

### License
This project is licensed under the [MIT License]().