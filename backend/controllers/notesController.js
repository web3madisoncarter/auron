const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");

// In-memory storage for notes
let notes = [];
let nextId = 1;

// Create a new note
exports.createNote = asyncErrorHandler(async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Title and content are required",
    });
  }

  const note = {
    id: nextId++,
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  notes.push(note);

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    data: note,
  });
});

// Get all notes
exports.getAllNotes = asyncErrorHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    count: notes.length,
    data: notes,
  });
});

// Get a single note by ID
exports.getNoteById = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const note = notes.find((n) => n.id === parseInt(id));

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  res.status(200).json({
    success: true,
    data: note,
  });
});

// Update a note
exports.updateNote = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const noteIndex = notes.findIndex((n) => n.id === parseInt(id));

  if (noteIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  if (title) notes[noteIndex].title = title;
  if (content) notes[noteIndex].content = content;
  notes[noteIndex].updatedAt = new Date().toISOString();

  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    data: notes[noteIndex],
  });
});

// Delete a note
exports.deleteNote = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const noteIndex = notes.findIndex((n) => n.id === parseInt(id));

  if (noteIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  const deletedNote = notes.splice(noteIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    data: deletedNote,
  });
});

