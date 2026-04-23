# React + Tailwind CSS Setup

This project is a modern web development boilerplate featuring **React**, **Tailwind CSS**, and **TypeScript**, bundled with **Vite**.

## 🚀 Technologies Used

- **React 19**: A JavaScript library for building user interfaces.
- **Tailwind CSS 4**: A utility-first CSS framework for rapidly building custom designs.
- **Vite 8**: A fast frontend build tool.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **ESLint**: For code linting and maintaining code quality.

## 📦 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (if applicable).
2. Navigate to the project directory:
   ```bash
   cd react-and-tailwind-setup
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server, run:

```bash
npm run dev
```

This will start Vite's dev server, typically accessible at `http://localhost:5173/`. The server will automatically reload when you make changes to the code.

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles TypeScript and builds the application for production.
- `npm run lint`: Runs ESLint to find and fix code style issues.
- `npm run preview`: Previews the production build locally.

## 📁 Project Structure

- `/src`: Contains the source code of the application.
  - `App.tsx`: The main component of the application.
  - `index.css`: The main CSS file where Tailwind directives are imported.
  - `main.tsx`: The entry point of the React application.
- `vite.config.ts`: Configuration file for Vite.
- `package.json`: Contains project dependencies and scripts.

## 🎨 Styling with Tailwind CSS

Tailwind CSS is already configured. You can start adding Tailwind utility classes directly to your JSX/TSX elements.

Example:
```tsx
function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click Me
    </button>
  );
}
```
