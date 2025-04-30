const mongoose = require('mongoose');

// Structure of the tasks items 
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status:{type:String, setStatus:{Completed, In Progress, Yet not started }},
  priority: {type: String, setPriority:{Normal,High, Low, Completed}},
  assignedTo:{type:String},
  dueDate:{type:Date},
  description:{type:String}
});

module.exports = mongoose.model('Task', taskSchema);