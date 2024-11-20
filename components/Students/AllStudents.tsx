import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AllStudents() {
  type StudentsInterface = {
    id: string;
    name: string;
    age: string;
    grade: string;
  };

  const [students, setStudents] = useState<StudentsInterface[]>([]);

  const getAllStudents = () => {
    axios
      .get("https://pprc-backend.onrender.com/api/students")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch(() => {
        console.log("Failed to get students");
      });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentGrade, setStudentGrade] = useState("");

  const addStudent = () => {
    const payload = {
      name: studentName,
      email: studentEmail,
      age: studentAge,
      grade: studentGrade,
    };
    axios
      .post("https://pprc-backend.onrender.com/api/students", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 20, marginRight: 30}}>
        <View style={{ height: 30 }}></View>
        <Text style={{ color: "white" }}> Student Name:</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            width: 350,
            height: 40,
            color: "black",
          }}
          placeholder="Student Name: "
          onChangeText={setStudentName}
        />

        <View style={{ height: 30 }}></View>
        <Text style={{ color: "white" }}> Student Email:</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            width: 350,
            height: 40,
            color: "black",
          }}
          placeholder="Student Email: "
          onChangeText={setStudentEmail}
        />

        <View style={{ height: 30 }}></View>
        <Text style={{ color: "white" }}> Student Age:</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            width: 350,
            height: 40,
            color: "black",
          }}
          placeholder="Student Age: "
          onChangeText={setStudentAge}
        />

        <View style={{ height: 30 }}></View>
        <Text style={{ color: "white" }}> Student Grade:</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            width: 350,
            height: 40,
            color: "black",
          }}
          placeholder="Student Grade: "
          onChangeText={setStudentGrade}
        />
        <Button
          style={{
            backgroundColor: "white",
            width: 350,
            height: 40,
            color: "black",
          }}
          title="submit"
          onPress={addStudent}
        >
          Submit
        </Button>
      </View>

      {students.map((item) => {
        return (
          <View key={item.id} style={{marginLeft: 20}}>
            <Text style={{ color: "black" }}>{item.name}</Text>
            <Text>{item.age}</Text>
            <Text>{item.grade}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}
