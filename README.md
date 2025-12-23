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
├── app.js                     # Main Express server and routes
├── package.json               # Project metadata and dependencies
├── package-lock.json
├── README.md                  # Project documentation
│
├── files/                     # File-based storage for notes
│   ├── my_first_note.txt
│   ├── backend_basics.txt
│   └── sample_note.txt
│
├── views/                     # EJS templates
│   ├── index.ejs              # Home page (list of all notes)
│   ├── show.ejs               # Full note view page
│   └── edit.ejs               # Edit / rename note page
│
├── public/                    # Static assets
│   ├── css/                   # Custom styles (optional)
│   ├── js/                    # Client-side scripts
│   └── images/                # Screenshots and assets
│
└── node_modules/              # Installed dependencies



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


## Filename Strategy

To avoid filesystem and URL issues:
- Backend filenames are stored in a safe format:
- Frontend converts them into readable titles:

This separation ensures backend reliability while maintaining a clean and user-friendly frontend experience.

---

## How to Run the Project Locally

1. Clone the repository

2. Navigate into the project directory

3. Install dependencies

4. Start the server

5. Open your browser and visit

---

## Problems Faced and What I Learned

### Understanding Request Flow
Initially, I struggled to understand where data comes from in a backend application, especially the difference between URL parameters, request body data, and form inputs. This project helped me clearly differentiate when to use `req.params` versus `req.body`.

### File Handling Errors
I encountered multiple issues while renaming and deleting files due to unsafe filenames, incorrect paths, and disabled form inputs not being sent to the backend. These challenges taught me the importance of consistent file paths, defensive coding, and proper error handling.

### EJS Rendering Errors
Small mistakes such as using undefined variables or unsupported JavaScript syntax inside EJS caused rendering failures. This helped me understand how EJS compiles templates and why separating logic from presentation is important.

### Page Reload vs Dynamic Updates
Initially, deleting a note caused a full page reload. By learning to intercept events and use the Fetch API, I was able to improve the user experience and understand the concept of progressive enhancement.

---

## Personal Note

This is my **first backend project**, and Scribble represents an important learning milestone for me. The aim was not to build a perfect or production-ready application, but to deeply understand backend fundamentals and how they integrate with frontend interfaces.

I am continuously learning and improving, and this project will evolve as my understanding grows. Feedback, suggestions, and constructive criticism are always welcome.

---

## Future Improvements

- Migrate from file-based storage to a database such as MongoDB  
- Add confirmation modals for delete actions  
- Add validation and duplicate name checks  
- Improve error handling and user feedback  
- Refactor the codebase into an MVC architecture  
- Add authentication and user-specific notes  

---

## Conclusion

Scribble is a small but meaningful step in my backend development journey. It demonstrates core backend concepts, thoughtful UI integration, and practical problem-solving.

Thank you for taking the time to explore this project.


