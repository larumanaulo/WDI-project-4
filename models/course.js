const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  stage: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: false }
});

const testSchema = new mongoose.Schema({
  stage: { type: Number, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  options: [{ type: String, required: true }]
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true},
  category: { type: String, required: false },
  description: { type: String, required: false },
  lessons: [ lessonSchema ],
  tests: [ testSchema ]
});



module.exports = mongoose.model('Course',courseSchema);
