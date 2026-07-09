const express = require("express");
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

const router = express.Router();

// POST /notes - Create a new note
router.route("/").post(createNote);

// GET /notes - Get all notes
router.route("/").get(getAllNotes);

// GET /notes/:id - Get a single note by ID
router.route("/:id").get(getNoteById);

// PUT /notes/:id - Update a note
router.route("/:id").put(updateNote);

// DELETE /notes/:id - Delete a note
router.route("/:id").delete(deleteNote);

module.exports = router;

