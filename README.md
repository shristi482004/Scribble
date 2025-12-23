# Scribble – A Backend-Powered Note Making Application

## Overview

Scribble is a simple, aesthetic, and backend-powered note-making web application that allows users to create, view, edit, and delete notes in a clean and distraction-free interface. The project focuses on clarity, usability, and learning core backend concepts rather than over-engineering.

This application was built as my **first backend project**, with the goal of understanding how a frontend communicates with a backend, how data is persisted, and how server-side rendering works using templating engines.

---

## Motivation

The primary motivation behind Scribble was to move beyond static frontend projects and build something that actually stores, retrieves, and manages data. Instead of using a database initially, I intentionally chose file-based storage to deeply understand how data persistence works at a fundamental level.

This project helped me bridge the gap between:
- Frontend UI design
- Backend logic
- Server-side rendering
- Real-world CRUD workflows

---

## Features

- Create notes with a title and description  
- View all notes on the home page as individual cards  
- Read full note content on a separate page  
- Edit (rename) existing notes  
- Delete notes dynamically without reloading the page  
- Clean, human-readable titles on the frontend  
- Safe and consistent file handling on the backend  
- Soft pastel UI with subtle animations  

---

## Technologies Used

### Backend
- Node.js  
- Express.js  
- File System module (`fs`)  

### Frontend
- EJS (Embedded JavaScript Templates)  
- Tailwind CSS  
- Vanilla JavaScript (for dynamic delete behavior)  

### Other Tools
- Google Fonts (Poppins)  
- Git & GitHub for version control  

---

## Project Structure

scribble/
│
├── files/               # Stores all note files (.txt)
│
├── views/
│   ├── index.ejs        # Home page (list of notes)
│   ├── show.ejs         # Full note view
│   ├── edit.ejs         # Rename note page
│
├── public/              # Static assets (if any)
│
├── app.js               # Main Express server
│
├── package.json
└── README.md


---

## Application Workflow

### 1. Creating a Note
- User enters a title and description.
- On submission, the backend:
  - Converts the title into a safe filename using underscores.
  - Appends a `.txt` extension.
  - Stores the description inside the file.
- User is redirected back to the home page.

### 2. Displaying Notes
- Backend reads the `files/` directory.
- Filenames are passed to the frontend.
- Frontend converts filenames into readable titles by:
  - Removing `.txt`
  - Replacing underscores with spaces
- Each note is displayed as a card.

### 3. Reading a Note
- Clicking “Read More” opens a new route with the filename.
- Backend reads the file content.
- Full description is rendered on a separate page.

### 4. Editing a Note Name
- Clicking the pencil icon opens the edit page.
- Old name is displayed as read-only for clarity.
- User enters a new name.
- Backend renames the file safely while preserving the content.

### 5. Deleting a Note
- Clicking the delete icon triggers JavaScript interception.
- A POST request is sent using the Fetch API.
- Backend deletes the file.
- The card is removed from the DOM smoothly without reloading the page.

---


