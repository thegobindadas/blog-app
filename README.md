# Blog Application

This is a full-stack blog application where users can create, read, update, and delete (CRUD) blog posts. The project leverages a modern stack, providing a seamless and responsive user experience with advanced text editing features.

## Features
- **User Authentication**: Secure user authentication using Appwrite.
- **Create, Read, Update, Delete (CRUD)**: Full blog management capabilities for users.
- **Rich Text Editor**: TinyMCE for creating and formatting blog content.
- **Responsive Design**: Tailwind CSS for a clean and responsive user interface.
- **Form Handling**: React Hook Form for efficient form management and validation.
- **State Management**: Redux Toolkit for efficient global state management.
- **Dynamic HTML Parsing**: Use of `html-react-parser` to modify and replace HTML elements in rendered content.

## Tech Stack

### Frontend
- **Vite + React**: For building a modular, component-based user interface.
- **Tailwind CSS**: A utility-first CSS framework that provides pre-built classes for easy and responsive design.
- **Redux Toolkit**: For centralized and efficient state management across the app.
- **TinyMCE**: An open-source rich text editor allowing users to create formatted blog content.
- **html-react-parser**: Used to parse HTML content and replace elements dynamically within the React application.
- **React Hook Form**: For handling form state and validation in a performant way.

### Backend (via Appwrite)
- **Authentication**: User registration and login system.
- **Database**: To store blog posts and user data.
- **Functions**: Backend logic to process user requests.
- **Storage**: Handles media uploads, such as images and other files.


### Usage
- Users can register/login to the platform.
- Authenticated users can create, edit, delete, and view blogs.
- Blog content is created using a rich text editor for easy formatting.
- The app supports uploading media (images) along with blog posts.

