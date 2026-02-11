# 🛡️ E-Cyber-Crime-Portal (Frontend)

This is the **frontend** part of the **E-Cyber-Crime-Portal** project, built using **React.js** and **Bootstrap**.  
It provides a responsive UI for **Users, Investigators, and Admins** to manage complaints, dashboards, and profiles.

---

### 👁️ View Demo Video

[CLICK HERE](https://drive.google.com/file/d/1-1ZXHL2njBMpeqICbCowbMPat0GKGuDq/view?usp=sharing) ✔️👆

--- 

## 🚀 Features

- **🔐 Role-Based Access Control (RBAC):** Three roles – `Admin`, `Investigator`, `User`.
- **👤 User:**
  -  Create and track complaints
  -  Update profile
  -  Dashboard to view own complaints
  
- **🕵️ Investigator:**
  -  View assigned complaints
  -  Resolve complaints & add notes
  -  Update profile
  -  Dashboard to see assigned/resolved stats
    
- **🛠️ Admin:**
  -  Full management of users and investigators
  -  Assign complaints to investigators
  -  View all complaints
  -  Dashboard with total stats (users, investigators, complaints)
    
- **✨ Other Features:**
  -  OTP verification
  -  JWT Authentication & Authorization
  -  Image upload using `multer`
  -  Change password / Reset password
  -  Responsive tables & cards
  -  Alerts & notifications

---

## 🛠️ Tech & Tools Used

| Category       | Tools / Languages                       |
|----------------|----------------------------------------|
|  Frontend    | React.js, Bootstrap                     |
|  Backend     | Node.js, Express.js                     |
|  Database    | MongoDB, Mongoose                       |
|  Auth        | JWT, RBAC, OTP Verification             |
|  File Upload | Multer                                  |
|  Testing/API | Postman                                 |
|  DB Tools    | MongoDB Compass, Atlas                  |
|  Deployment  | Vercel (Frontend), Render (Backend)     |

---

## Frontend Installation

```bash
git clone <your-repo-url>
cd backend
```

2. Create a .env file in the frontend root with the following:
```
VITE_BACKEND_SERVER_URL=http://localhost:7000
```

3. Install dependencies:
```
npm install
```

4. Start the backend server:
```
npm run dev
```
