# Sticky Note Chrome Extension

A simple and lightweight Chrome extension that lets you create, edit, and store sticky notes directly inside your browser. Notes are automatically saved using Chrome Storage and persist between sessions.

## Features
- Create sticky notes instantly
- Auto-save using Chrome Storage
- Clean and minimal interface
- Works offline
- One-click access from the Chrome toolbar

## Installation (Run Locally)

Follow these steps to install and run the extension locally on your machine.

### 1. Clone the Repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

### 2. Open Chrome Extensions Page
1. Open Google Chrome
2. Go to: chrome://extensions/
3. Enable "Developer mode" in the top-right corner

### 3. Load the Unpacked Extension
1. Click "Load unpacked"
2. Select the folder you cloned (the extension root directory)
3. The extension will now appear in your Chrome toolbar

## How to Use
1. Click the extension icon in your toolbar
2. Type your notes in the popup window
3. The notes auto-save and remain even after closing the browser
4. Reopen the popup anytime to edit or view your notes

## Project Structure
manifest.json      - Extension configuration  
popup.html         - UI layout  
popup.js           - Logic and Chrome Storage handling  
styles.css         - Styling  
icons/             - Extension icons  

## Development
- Edit popup.html and styles.css to update the UI
- Edit popup.js to change note behavior or storage logic
- After making changes, visit chrome://extensions/ and click the "Reload" button for this extension
