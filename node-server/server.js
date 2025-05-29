const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 80;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Handle file upload
app.post("/upload", upload.array("files"), (req, res) => {
  console.log("Files uploaded:", req.files);
  res.status(200).send("Files uploaded successfully.");
});

// List uploaded files
app.get("/files", (req, res) => {
  fs.readdir("uploads/", (err, files) => {
    if (err) {
      console.error("Failed to list files:", err);
      return res.status(500).send("Error listing files.");
    }
    res.json(files);
  });
});

// Delete a file
app.delete("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join("uploads", filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Failed to delete file:", err);
      return res.status(500).send("Error deleting file.");
    }
    res.status(200).send("File deleted successfully.");
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
