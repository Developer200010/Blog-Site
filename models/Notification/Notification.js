const mongoose = require("mongoose");
// schema
const categorySchema = new mongoose.Schema(
  {
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
   },
   postId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
   },
   message:{
    type: String,
    required: true,
   },
   isRead:{
    type: Boolean, 
    default: false
   },
  },
  {
    timestamps: true,
  }
);
// model

module.exports = mongoose.model("Category", categorySchema);
