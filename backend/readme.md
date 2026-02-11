# 🛡️ E-Cyber-Crime-Portal (Backend)

> Backend server for **E-Cyber-Crime-Portal**, implementing RBAC with **Admin, Investigator, and User** roles, JWT authentication, complaint management, OTP verification, and profile management.

---'

### 👁️ View Demo Video

[CLICK HERE](https://drive.google.com/file/d/1-1ZXHL2njBMpeqICbCowbMPat0GKGuDq/view?usp=sharing) ✔️👆

--- 

## 🎯 Project Overview

This backend powers the **Cyber Crime Complaint Portal** with three roles:

- **Admin**:  
  - Manage users & investigators (Add, Edit, Delete)  
  - Assign complaints to investigators  
  - View all complaints and update status  
  - Update own profile  

- **Investigator**:  
  - View assigned complaints  
  - Resolve complaints & add notes  
  - Update own profile  
  - Dashboard stats  

- **User**:  
  - Create complaints  
  - Update own profile  
  - Dashboard stats  

---

## 🛠️ Technology & Tools

| Category       | Tools & Languages |
|----------------|-----------------|
| **Backend**    | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge) ![Multer](https://img.shields.io/badge/Multer-CC3333?style=for-the-badge) |
| **Tools**      | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![MongoDB Compass](https://img.shields.io/badge/MongoDB_Compass-47A248?style=for-the-badge) ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge) |

---

## ⚡ Features

- ✅ RBAC (Admin, Investigator, User roles)  
- ✅ JWT Token Authentication & Authorization  
- ✅ OTP Verification for signup/login  
- ✅ CRUD operations for users, investigators & complaints  
- ✅ Complaint assignment & resolution notes  
- ✅ Profile update for all roles  
- ✅ Multer Image Upload for complaints  
- ✅ Change Password & Forgot/Reset Password functionality  
- ✅ Admin dashboard APIs, Investigator & User dashboards  

---


## 💻 Backend Installation

1. Clone the repository:  
```bash
git clone <your-repo-url>
cd backend
```

2. Create a .env file in the backend root with the following:
```
PORT=7000
MONGODB_ATLAS_URL=<your-mongodb-atlas-url>
SECRET_KEY=<your-secret-key>
EMAIL=<your-email>
PASS=<your-app-password>
```

3. Install dependencies:
```
npm install
```

4. Start the backend server:
```
npm run dev
```