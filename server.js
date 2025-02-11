import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://ramkumar007xx:Ram%402003@cluster0.sdt7g.mongodb.net/Blogs"; 

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected Locally"))
  .catch(err => console.log("MongoDB Connection Error:", err));

const blogSchema = new mongoose.Schema({
id:Number,
  title: String,
  url: String,
  email: String,
  description: String,
  Comments: [String]
}, { collection: "FinalBlogs" });

const Blog = mongoose.model("FinalBlogs", blogSchema);

app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.post("/blogs", async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog.save();
  res.json(newBlog);
});

app.delete("/blogs/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

app.put("/blogs/:id", async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBlog);
});

app.listen(5000, () => console.log("Server running on port 5000"));
