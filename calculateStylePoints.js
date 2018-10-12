const calculateStylePoints = (styleNotes) => {
  const maxNoteToRemove = Math.max(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
  const minNoteToRemove = Math.min(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
    return styleNotes[0] + styleNotes[1] + styleNotes[2] + styleNotes[3] + styleNotes[4] - maxNoteToRemove - minNoteToRemove;
};

module.exports = calculateStylePoints;
  