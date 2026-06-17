const { uploadOnCloudinary } = require("../utils/cloudinary");

const uploadFile = async (req, res) => {
  try {
    const localPath = req.file?.path;

    if (!localPath) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const uploadedFile = await uploadOnCloudinary(localPath);

    return res.status(200).json({
      success: true,
      data: uploadedFile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { uploadFile };
