import { prisma } from "@mediumblogs/db";
import Express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string;[key: string]: any };
    }
  }
}

const addBlogs = async (req: Express.Request, res: Express.Response) => {
  const { title, summary, content, author, category, readTime, level } = req.body;

  try {
    // Validate required fields
    if (!title || !summary || !content || !author || !category || !readTime || !level) {
      return res.status(400).json({
        message: 'Missing required fields',
        required: ['title', 'summary', 'content', 'author', 'category', 'readTime', 'level']
      });
    }

    // Validate category enum
    const validCategories = ['GAMING', 'CODE_MAGIC', 'PIXEL_ART', 'TECH_LORE'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        message: 'Invalid category',
        validCategories
      });
    }

    // Validate level
    const validLevels = ['BEGINNER', 'EXPERT', 'LEGENDARY'];
    if (!validLevels.includes(level)) {
      return res.status(400).json({
        message: 'Invalid level',
        validLevels
      });
    }

    const newBlog = await prisma.blog.create({
      data: {
        title,
        content,
        summary,
        author,
        category: category as any,
        readTime,
        level
      }
    });

    console.log('New blog created:', newBlog);
    return res.status(201).json({
      message: "Blog Created Successfully",
      blog: newBlog
    });

  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}

const getBlogs = async (req: Express.Request, res: Express.Response) => {
  try {
    const blogs = await prisma.blog.findMany();
    return res.status(200).json({
      message: "Blogs fetched successfully",
      blogs
    })
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export { addBlogs, getBlogs };