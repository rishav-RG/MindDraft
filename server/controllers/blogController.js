// Required modules import kar rahe hain
import fs from "fs";
import Blog from "../models/Blog.js";
import imagekit from "../configs/imageKit.js";
import Comment from "../models/Comment.js";
import main from "../configs/gemini.js";

// Blog add karne wali function ki definition
// Step 1: Function define karo
const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    if (!title || !description || !category || !isPublished) {
      return res.json({ success: false, message: "Missing fields required" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    const image = optimizedImageUrl;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get all published blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ✅ Get a blog by its ID
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params; // 🔧 FIXED: .parse ❌ -> .params ✅

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body; // 🔧 FIXED: .parse ❌ -> .params ✅

    await Blog.findByIdAndDelete(id);

    //Delete all the comments associated with the blog
    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog status updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body; // ✅ Corrected here

    await Comment.create({ blog, name, content }); // ✅ Now content is defined

    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getBlogComment = async (req, res) => {
  try {
    // Get blogId from params instead of body for GET requests
    const { blogId } = req.params;

    // Validate blogId
    if (!blogId) {
      return res.status(400).json({
        success: false,
        message: "Blog ID is required",
      });
    }

    // Add pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get comments with pagination
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total comments count
    const total = await Comment.countDocuments({
      blog: blogId,
      isApproved: true,
    });

    // Send paginated response
    res.status(200).json({
      success: true,
      comments,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalComments: total,
      },
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching comments",
    });
  }
};

export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;

    const enhancedPrompt = `
You are a professional blog writer.
Write a detailed, engaging blog post on the topic: "${prompt}".
Use a friendly tone, short paragraphs, and include a catchy introduction and a strong conclusion.
Use simple words so beginners can understand.
Avoid technical jargon unless necessary.
    `;

    const content = await main(enhancedPrompt);
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Step 2: Ab default export karo
export default addBlog;
