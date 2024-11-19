MemberProject
Overview
The MemberProject is a Node.js web application that serves as a private clubhouse where members can write anonymous posts. Non-members can see posts but not their authors. Members can view the full details of posts, including authorship. Users can sign up, log in, post messages, and upgrade their membership using a passcode.
The project demonstrates the use of Express, Passport.js for authentication, PostgreSQL for data persistence, and EJS for server-side rendering.
Features
- Authentication: Secure sign-up and log-in functionality using Passport.js and bcrypt.
- Authorization: Role-based access for members and non-members.
- Posting System: Users can create posts with titles and content.
- Membership Upgrade: Users can upgrade their account to 'Member' by entering a passcode.
- Session Management: Secure session handling using express-session.
- Responsive Design: Dynamic content rendering with EJS.
Directory Structure
MemberProject/
├── db/
│   ├── pool.js          # Database connection pool
│   ├── queries.js       # Modularized database queries
├── controllers/
│   ├── membersController.js # Handles app logic and interactions
├── routes/
│   ├── membersRouter.js # Defines routes for user and member actions
├── views/
│   ├── index.ejs        # Home page view
│   ├── signUp.ejs       # User sign-up form
│   ├── logIn.ejs        # User log-in form
├── app.js               # Main application entry point
├── package.json         # Project metadata and dependencies
├── README.md            # Documentation file

Modules and Their Interactions
app.js
Main application entry point. Initializes middleware, configures Passport.js, sets up routes, and starts the server.
routes/membersRouter.js
Defines routes for user actions and interactions, delegating logic to membersController.js.
controllers/membersController.js
Handles app logic, processes user actions, and manages data flow between views and the database.
db/pool.js
Manages the database connection pool.
db/queries.js
Encapsulates database queries into reusable functions.
views/
Contains EJS templates for server-side rendering.
Database Schema
1. users Table
| Column       | Type         | Description                     |
|--------------|--------------|---------------------------------|
| username     | VARCHAR(50)  | Primary key. Unique user ID.    |
| password     | TEXT         | Hashed password for security.  |
| user_type    | VARCHAR(20)  | User role: 'user' or 'member'. |

2. user_messages Table
| Column         | Type         | Description                       |
|----------------|--------------|-----------------------------------|
| message_id     | SERIAL       | Primary key. Auto-increment ID.   |
| username       | VARCHAR(50)  | Foreign key linked to users.      |
| message_title  | VARCHAR(100) | Title of the message.             |
| message        | TEXT         | Content of the message.           |
| timestamp      | TIMESTAMP    | Time the message was created.     |

Setup Instructions
Clone the repository:
    git clone <repository-url>
    cd MemberProject
Install dependencies:
    npm install
Set up PostgreSQL:
    - Create the users and user_messages tables using the schema provided above.
Configure pool.js with your database credentials.
Start the server:
    node app.js
Open the app in your browser:
    http://localhost:3000
Future Improvements
Implement flash messages for better user feedback.
Add an admin role with permissions to delete messages.
Enhance UI with a front-end framework like React or Bootstrap.
Use an ORM (e.g., Sequelize) to manage database interactions.
