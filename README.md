# GitHub Profile Analyzer API
A backend service that analyzes GitHub user profiles using the GitHub Public API and stores useful insights in a MySQL database.



##  Features
- Analyze any GitHub user by username
- Fetch public profile data from GitHub API
- Store profile analytics in MySQL
- Get all analyzed profiles
- Get single analyzed profile



##  Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API
- Axios
- dotenv




##  Project Structure
```
GitHub-Profile-Analyzer/
│
├── config/
│   └── db.js
├── controllers/
│   └── profileController.js
├── Routes/
│   └── profileRoutes.js
├── services/
│   └── gitHubService.js
├── models/
│   └── profileModels.js
├── database/
│   └── schema.sql
├── server.js
├── test-db.js
├── .env
├── package.json
└── README.md
```

---

## Setup Instructions

### 1 Clone the repository
```bash
git clone <your-github-repo-link>
cd github-profile-analyzer
```

---

### 2 Install dependencies
```bash
npm install
```

---

### 3 Setup MySQL Database
* Install MySQL Server
* Open MySQL Workbench
* Run the SQL file located at:

database/schema.sql

This will create the database and required table.

---

### 4 Configure Environment Variables
```env
PORT=5050
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=github_analyzer
```

---

### 5 Test Database Connection
```
node test-db.js
```
Expected output:MySQL Connected Successfully


### 6 Start the Server
```
npm run dev
```
Server will run at:http://localhost:5050

---

### API Endpoints

### Analyze GitHub Profile
```
GET /git/analyzer/analyze/:username
```

### Get All Analyzed Profiles
```
GET /git/analyzer/profiles
```

### Get Single Profile
```
GET /git/analyzer/profiles/:username
```

---

### Author
*** Thanush.V ***
AI & Data Science Student
Full Stack Web Developer (MERN)

---
⭐ If you like this project, don’t forget to star the repository!