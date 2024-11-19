MemberProject
Overview
The MemberProject is a Node.js web application that serves as a private clubhouse where members can write anonymous posts.

Non-members can see posts but not their authors.
Members can view the full details of posts, including authorship.
Users can sign up, log in, post messages, and upgrade their membership using a passcode.
The project demonstrates the use of Express, Passport.js for authentication, PostgreSQL for data persistence, and EJS for server-side rendering.

Features
Authentication: Secure sign-up and log-in functionality using Passport.js and bcrypt.
Authorization: Role-based access for members and non-members.
Posting System: Users can create posts with titles and content.
Membership Upgrade: Users can upgrade their account to "Member" by entering a passcode.
Session Management: Secure session handling using express-session.
Responsive Design: Dynamic content rendering with EJS.
Directory Structure
bash
Copy code
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
1. app.js
Purpose: The main entry point of the application.
Responsibilities:
Initializes middleware (body-parser, express-session, passport).
Configures Passport.js for authentication.
Sets up the application to use membersRouter for routing.
Starts the server.
Key Interactions:
Delegates route handling to membersRouter.js.
Uses membersController.js to process logic for routes.
2. routes/membersRouter.js
Purpose: Defines routes for handling user actions and interactions.
Responsibilities:
Routes GET and POST requests to the appropriate controller functions.
Handles:
Home page (/)
Posting new messages (/new-message)
Membership upgrade (/become-a-member)
Log-in (/log-in)
Sign-up (/sign-up)
Log-out (/log-out)
Key Interactions:
Calls functions from membersController.js for each route.
Handles session-based user interaction.
3. controllers/membersController.js
Purpose: Contains all the logic for processing user actions and managing data flow between views and the database.
Responsibilities:
Render Pages:
Home page: Fetch and display posts.
Sign-up and log-in forms.
Handle User Actions:
Add a new message.
Upgrade user membership.
Authenticate users with Passport.js.
Log users out.
Key Interactions:
Queries the database using functions in queries.js.
Renders views using EJS templates in /views/.
4. db/pool.js
Purpose: Manages the database connection pool.
Responsibilities:
Provides a reusable pool of database connections for queries.
Key Interactions:
Used by queries.js and membersController.js to interact with the PostgreSQL database.
5. db/queries.js
Purpose: Encapsulates database queries into reusable functions.
Responsibilities:
Fetch Messages: Retrieves messages based on user type (e.g., "Anonymous" for non-members).
Insert Message: Adds a new message to the database.
Membership Upgrade: Updates the user's membership status in the database.
Key Interactions:
Executes SQL queries using pool.js.
6. views/
Purpose: Contains EJS templates for server-side rendering.
Responsibilities:
index.ejs: Displays messages, log-out link, and forms for adding messages and upgrading membership.
signUp.ejs: Provides the sign-up form for new users.
logIn.ejs: Provides the log-in form for existing users.
Key Interactions:
Renders data passed from membersController.js.
Database Schema
1. users Table
Stores user account details.

Column	Type	Description
username	VARCHAR(50)	Primary key. Unique user ID.
password	TEXT	Hashed password for security.
user_type	VARCHAR(20)	User role: 'user' or 'member'.
2. user_messages Table
Stores messages posted by users.

Column	Type	Description
message_id	SERIAL	Primary key. Auto-increment ID.
username	VARCHAR(50)	Foreign key linked to users.
message_title	VARCHAR(100)	Title of the message.
message	TEXT	Content of the message.
timestamp	TIMESTAMP	Time the message was created.
Setup Instructions
Clone the repository:

bash
Copy code
git clone <repository-url>
cd MemberProject
Install dependencies:

bash
Copy code
npm install
Set up PostgreSQL:

Create the users and user_messages tables using the schema provided above.
Configure pool.js with your database credentials:

javascript
Copy code
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});
Start the server:

bash
Copy code
node app.js
Open the app in your browser:

arduino
Copy code
http://localhost:3000
Future Improvements
Implement flash messages for better user feedback (e.g., incorrect password, log-out success).
Add an admin role with permissions to delete messages.
Enhance UI with a front-end framework like React or Bootstrap.
Use an ORM (e.g., Sequelize) to manage database interactions.
Contributing
Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature-name").
Push the branch (git push origin feature-name).
Create a pull request.
License
This project is licensed under the MIT License.