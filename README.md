# TravelBolg – Frontend (React + React Router + Context API + Tailwind CSS + daisyUI)

A responsive frontend for the TravelBolg project, allowing users to browse, create, update, and delete travel-related posts.

---

## ✨ Features

- **Homepage:** Displays a list of all available posts.
- **Create Post Page:** Form for adding a new post.
- **Post Details Page:** View a single post’s details with options to **update** or **delete** it.
- **Post Update Page:** Form for editing an existing post.
- Global state management using **React Context API**.
- Styled with **Tailwind CSS** and **daisyUI** for a modern, responsive UI.
- Routing handled by **React Router**.

---

## 🧰 Tech Stack

- **Framework:** React
- **Routing:** React Router
- **State Management:** Context API
- **Styling:** Tailwind CSS + daisyUI
- **API Integration:** Fetch calls to the TravelBolg backend

---

## 📦 Getting Started (Local)

### Prerequisites

- Node.js (v18+ recommended)
- Backend API running locally or hosted (see [TravelBolg Backend](../backend) for setup)

### Clone & Install

```bash
git clone <your-repo-url>
cd TravelBolg-frontend
npm install
```

---

## 🧭 Pages Overview

### 🏠 Homepage (/)

Fetches and displays all posts.

Each post links to its details page.

### ➕ Create Post Page (/create)

Form with fields: author, title, content, cover.

Sends POST request to backend.

Redirects to homepage on success.

### 📄 Post Details Page (/posts/:id)

Displays post title, author, content, cover image, and date.

Buttons:

Update → Navigates to /update/:id

Delete → Sends DELETE request, then navigates home.

### ✏️ Post Update Page (/update/:id)

Pre-filled form with existing post data.

Sends PUT request to backend.

Redirects to post details on success.
