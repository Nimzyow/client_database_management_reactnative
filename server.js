const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("dadapplicationexpo/build"));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "dadapplicationexpo", "build", "index.html")
    )
  );
}

app.get("/", (req, res) =>
  res.json({
    msg: "Lets hope this application will work for mobile applciations now."
  })
);

app.use("/api/users", require("./routes/users"));
app.use("/api/clients", require("./routes/clients"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
