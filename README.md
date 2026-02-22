# 🛡️ E-Cyber-Crime-Portal

> A full-fledged **RBAC (Role-Based Access Control)** system with **Admin, Investigator, and User** roles for managing cyber crime complaints.  

---

### 👁️ View Live Preview & Demo Video

[Live Preview](https://drive.google.com/file/d/1-1ZXHL2njBMpeqICbCowbMPat0GKGuDq/view?usp=sharing) 

[Demo Video](https://drive.google.com/file/d/1-1ZXHL2njBMpeqICbCowbMPat0GKGuDq/view?usp=sharing) 

--- 

## 🎯 Project Overview

This project implements a **Cyber Crime Complaint Portal** with three roles:

- **Admin**:  
  - Full management system  
  - Can view/update own profile  
  - Manage users & investigators (Add, Edit, Delete)  
  - Manage complaints: Assign to investigators, track status  

- **Investigator**:  
  - View assigned complaints  
  - Resolve complaints & add notes  
  - Update own profile  
  - Dashboard with stats & recent complaints  

- **User**:  
  - Create complaints  
  - Update own profile  
  - View dashboard with stats  

---

## 🛠️ Technology & Stack

| Category       | Tools & Languages |
|----------------|-----------------|
| **Frontend**   | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) |
| **Backend**    | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge) ![Multer](https://img.shields.io/badge/Multer-CC3333?style=for-the-badge) |
| **Tools**      | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![MongoDB Compass](https://img.shields.io/badge/MongoDB_Compass-47A248?style=for-the-badge) ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge) |

---

## ⚡ Features

- ✅ RBAC (Admin, Investigator, User roles)  
- ✅ JWT Token Authentication & Authorization  
- ✅ OTP Verification for signup/login  
- ✅ User/Investigator/Admin dashboards  
- ✅ CRUD operations for users, investigators & complaints  
- ✅ Multer Image Upload for complaints  
- ✅ Change Password & Forgot/Reset Password functionality  
- ✅ Complaint assignment & resolution notes  
- ✅ Profile update for all roles  

---

## 💻 Installation

### Backend

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

### Frontend
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
