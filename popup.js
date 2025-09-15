const note = document.getElementById("note");

// Load saved note
chrome.storage.local.get("stickyNote", (data) => {
  if (data.stickyNote) note.innerHTML = data.stickyNote;
});

// Save note on input
note.addEventListener("input", () => {
  chrome.storage.local.set({ stickyNote: note.innerHTML });
});
