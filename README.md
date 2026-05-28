# WebNote Frontend

React frontend for the WebNote application - a full-stack note-taking web app.

## 🎨 Features

- **Create Notes**: Write and save notes with title and content
- **Edit/Delete**: Update or remove existing notes
- **Image Support**: Add and manage images in notes
- **Export**: Print notes or download as PNG images
- **Responsive UI**: Beautiful Material-UI design that works on all devices
- **Real-time Sync**: Changes sync immediately with the backend

## 🛠️ Tech Stack

- **React 19** - Modern UI library with hooks
- **Material-UI (MUI)** - Professional component library
- **Axios** - Promise-based HTTP client
- **React-to-Print** - Print note functionality
- **HTML2Canvas** - Convert notes to images
- **Create React App** - Build tooling

## 📂 Project Structure

```
src/
├── components/
│   ├── App.jsx              # Main application component
│   ├── Header.jsx           # App header
│   ├── CreateArea.jsx       # Form to create notes
│   ├── Note.jsx             # Individual note component
│   ├── Notess.jsx           # Notes list container
│   ├── Footer.jsx           # App footer
│   ├── HandleImg.jsx        # Image handling
│   └── NoteTemplate.jsx     # Note template component
├── api/
│   └── notesApi.js          # API calls to backend
├── App.css                  # Application styles
├── index.js                 # Entry point
└── setupTests.js            # Test configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create .env file with:
REACT_APP_API_URL=http://localhost:5000
```

### Development Server

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000)

The app will reload when you make changes. Browser console shows lint errors.

## 📜 Available Scripts

### `npm start`
Runs the app in development mode with hot-reload.

### `npm run build`
Creates an optimized production build in the `build/` folder.
- Minified JavaScript
- Optimized images
- Ready for deployment

### `npm test`
Launches the test runner in interactive watch mode.

## 🧩 Key Components

### App.jsx
Main application component that manages overall state and layout.

### CreateArea.jsx
Form component for creating new notes. Handles input validation and submission.

### Note.jsx
Individual note card component. Displays note content with edit/delete/print/download options.

### Notess.jsx
Container component that fetches and displays all notes from the backend.

## 🔌 API Integration

API calls are centralized in `src/api/notesApi.js`:

```javascript
// Get all notes
getNotes()

// Create a note
createNote(noteData)

// Update a note
updateNote(noteId, noteData)

// Delete a note
deleteNote(noteId)
```

## 🎯 Environment Variables

Create a `.env` file in the project root:

```
REACT_APP_API_URL=http://localhost:5000
```

Note: All custom env variables must start with `REACT_APP_` to be accessible in the browser.

## 📦 Production Build

```bash
npm run build
```

Creates an optimized build ready for deployment. The `build` folder is production-ready and can be:
- Served by a static server
- Deployed to Vercel, Netlify, or similar services
- Deployed to cloud storage with CDN

## 🧪 Testing

```bash
npm test
```

Runs Jest tests with React Testing Library. Tests are automatically discovered from files ending with `.test.js`.

## 📚 Dependencies

- **@mui/material** - Material Design components
- **@mui/icons-material** - Material Design icons
- **axios** - HTTP requests
- **react-to-print** - Print functionality
- **html-to-image** - Image conversion
- **html2canvas** - Canvas-based rendering

## 🐛 Troubleshooting

### Backend connection error
- Verify backend is running on port 5000
- Check `REACT_APP_API_URL` environment variable
- Look at browser DevTools Network tab for failed requests

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Port 3000 already in use
```bash
PORT=3001 npm start
```

## 🔗 Related

- [Main README](../README.md) - Full project documentation
- [Backend Setup](../webnotebackend/) - Node.js/Express backend
- [React Documentation](https://react.dev)
- [Material-UI Docs](https://mui.com)

## 📝 Notes

- Frontend assumes backend is running on `http://localhost:5000`
- All HTTP requests use Axios for consistency
- CORS must be enabled on the backend
- Material-UI provides responsive design out of the box

---

**Built with React 19 & Material-UI**
