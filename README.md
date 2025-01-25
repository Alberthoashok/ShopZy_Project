ShopZee Project
A React-based web application featuring a user authentication system, product shop, and additional components for skills, stores, about us, and contact pages.

Features
Authentication System:
Sign In and Sign Up pages.
Conditional rendering based on authentication status.
Shop Page: Browse products fetched from an API.
Skills Page: Showcase user skills or additional resources.
Stores Page: Display available stores.
About Page: Information about the application.
Contact Us Page: Provide support contact details.
Routing: Navigation between components using react-router-dom.
Technologies Used
Frontend Framework: React
Routing: React Router (react-router-dom)
State Management: React State Hooks
Styling: CSS
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (>= 14.x)
npm or yarn package manager
Git
Setup Instructions
Clone the Repository

bash
Copy
Edit
git clone https://github.com/YourUsername/ShopZee_project.git
cd ShopZee_project
Install Dependencies

bash
Copy
Edit
npm install
Run the Application

bash
Copy
Edit
npm start
The application will open at http://localhost:3000.

Build the Application (for production)

bash
Copy
Edit
npm run build
Push to GitHub (optional)

bash
Copy
Edit
git add .
git commit -m "Initial Commit"
git push origin main
Project Structure
java
Copy
Edit
ShopZee_project/
│
├── public/
│   ├── index.html
│   └── logo192.png
│
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── ContactUs.js
│   │   ├── Header.js
│   │   ├── Shop.js
│   │   ├── SignIn.js
│   │   ├── SignUp.js
│   │   ├── Skills.js
│   │   └── Stores.js
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
Key Components
Authentication System
SignIn.js

Contains the login form.
Updates the isAuthenticated state on successful login.
SignUp.js

Registration form for new users.
After successful signup, users are redirected to the login page.
Conditional Routing

If authenticated, users are redirected to the /shop page.
Otherwise, users see the /signin or /signup pages.
Pages
Shop.js: Displays products from an external API.
Skills.js: Allows users to manage or view skills.
Stores.js: Lists stores available in your application.
About.js: Provides details about the application.
ContactUs.js: Displays support contact information.
Usage
Authentication

Navigate to /signin or /signup.
Upon successful login, access all pages.
Navigation

Navigate between pages using the top navigation bar.
Conditional rendering ensures authentication before accessing restricted pages.
