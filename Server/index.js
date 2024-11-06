const express = require("express");
const cors = require("cors");

const Students = require("./Models/Students");

require("./DB/conn");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

// Create a new student
app.post("/addStudent", async (req, res) => {
  try {
    const student = await new Students(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all students
app.get("/getAllStudents", async (req, res) => {
  try {
    const students = await Students.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single student by ID
app.get("/getStudentById/:id", async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) return res.status(404).send("No Student");
    res.send(student);
  } catch (error) {
    res.status(500).send(error, "Student not found");
  }
});

// Update a student by ID

app.patch("/updateStudentById/:id", async (req, res) => {
  try {
    const student = await Students.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).send("No Student found");
    }
    res.status(200).send(student);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Server error", error });
  }
});


// Delete a student by ID

app.delete("/deleteStudentById/:id", async (req, res) => {
  try {
    const student = await Students.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send("No Student found");
    }
    res.status(200).send(student);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
