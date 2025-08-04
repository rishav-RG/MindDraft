export const getComments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const comments = await Comment.find({
      blog: req.params.blogId,
      isApproved: true,
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Comment.countDocuments({
      blog: req.params.blogId,
      isApproved: true,
    });

    res.json({
      comments,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
