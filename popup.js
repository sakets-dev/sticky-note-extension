const note = document.getElementById("note");
const container = document.getElementById("note-container");

// Load saved note, position, and size
chrome.storage.local.get(["stickyNoteHTML", "position", "dimensions"], (data) => {
  if (data.stickyNoteHTML) note.innerHTML = data.stickyNoteHTML;

  if (data.position) {
    container.style.top = data.position.top;
    container.style.left = data.position.left;
  }

  if (data.dimensions) {
    container.style.width = data.dimensions.width;
    container.style.height = data.dimensions.height;
  }
});

// Save note on input (keep formatting)
note.addEventListener("input", () => {
  chrome.storage.local.set({ stickyNoteHTML: note.innerHTML });
});

// Keyboard shortcuts
note.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
    e.preventDefault();
    document.execCommand("bold");   // apply bold to selected text
  }
});

// --- Draggable logic ---
let isDragging = false, offsetX, offsetY;

container.addEventListener("mousedown", (e) => {
  if (e.target === note) return; // don’t drag while editing
  isDragging = true;
  offsetX = e.clientX - container.offsetLeft;
  offsetY = e.clientY - container.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    container.style.left = (e.clientX - offsetX) + "px";
    container.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    chrome.storage.local.set({
      position: {
        top: container.style.top,
        left: container.style.left
      }
    });
  }
});

// --- Save size after resize ---
new ResizeObserver(() => {
  chrome.storage.local.set({
    dimensions: {
      width: container.style.width,
      height: container.style.height
    }
  });
}).observe(container);
