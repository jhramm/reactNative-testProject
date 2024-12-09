import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Text, View, TextInput, ScrollView, Pressable } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function AllStudents() {
  type StudentsInterface = {
    id: string;
    name: string;
    age: string;
    grade: string;
    email: string;
  };

  const [students, setStudents] = useState<StudentsInterface[]>([]);
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);

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
  }, [update]);

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentGrade, setStudentGrade] = useState("");

  const [updateStudentName, setUpdateStudentName] = useState("");
  const [updateStudentEmail, setUpdateStudentEmail] = useState("");
  const [updateStudentAge, setUpdateStudentAge] = useState("");
  const [updateStudentGrade, setUpdateStudentGrade] = useState("");
  const [updateStudentId, setUpdateStudentId] = useState("");
  const [editStudent, setEditStudent] = useState(false);


  const addStudent = () => {
    const payload = {
      name: studentName,
      email: studentEmail,
      age: studentAge,
      grade: studentGrade,
    };
    axios
      .post("https://pprc-backend.onrender.com/api/students/", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    forceUpdate();
  };
  const updateStudent = () => {
    const payload = {
      name: updateStudentName,
      email: updateStudentEmail,
      age: updateStudentAge,
      grade: updateStudentGrade,
    };
    axios
      .patch("https://pprc-backend.onrender.com/api/students/"+ updateStudentId, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    forceUpdate();
  };
  const deleteStudent = (id: any) => {
 
    axios
      .delete("https://pprc-backend.onrender.com/api/students/"+ id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    forceUpdate();
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      {!editStudent? 
      <>
         <View style={{ padding: 20, marginRight: 30 }}>
        <View style={{ height: 30 }}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Name:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Name: "
              onChangeText={setStudentName}
            />
          </View>

          <View style={{ height: 30 }}></View>
          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Email:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Email: "
              onChangeText={setStudentEmail}
            />
          </View>
        </View>
        <View style={{ height: 30 }}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Age:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Age: "
              onChangeText={setStudentAge}
            />
          </View>

          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Grade:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Grade: "
              onChangeText={setStudentGrade}
            />
          </View>
        </View>
        <Pressable onPress={addStudent}>
          <View
            style={{
              backgroundColor: "lightblue",
              width: 150,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 10,
              margin: "auto",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              Submit
            </Text>
          </View>
        </Pressable>
      </View>
      </>:  
      <>
         <View style={{ padding: 20, marginRight: 30 }}>
        <View style={{ height: 30 }}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Name:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Name: "
              onChangeText={setUpdateStudentName}
              value={updateStudentName}
            />
          </View>

          <View style={{ height: 30 }}></View>
          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Email:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Email: "
              onChangeText={setUpdateStudentEmail}
              value={updateStudentEmail}
            />
          </View>
        </View>
        <View style={{ height: 30 }}></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Age:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Age: "
              onChangeText={setUpdateStudentAge}
              value={updateStudentAge.toString()}
            />
          </View>r

          <View>
            <Text style={{ color: "white", marginBottom: 10 }}>
              {" "}
              Student Grade:
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: 150,
                height: 40,
                color: "black",
              }}
              placeholder="Student Grade: "
              onChangeText={setUpdateStudentGrade}
              value={updateStudentGrade}
            />
          </View>
        </View>
        <Pressable onPress={updateStudent}>
          <View
            style={{
              backgroundColor: "lightblue",
              width: 150,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 10,
              margin: "auto",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              Update Student
            </Text>
          </View>
        </Pressable>
      </View>
      </>}
   

      <Text
        style={{
          fontSize: 30,
          color: "white",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        All Students
      </Text>
      <ScrollView style={{ height: 300 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            flexDirection: "row",
            height: 1400,
          }}
        >
          {students.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  marginLeft: 20,
                  width: 200,
                  padding: 20,
                  backgroundColor: "lightblue",
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 20, color: "black" }}>
                  Student #{index + 1}
                </Text>
                <Text style={{ color: "black", fontSize: 17 }}>
                  {item.name}
                </Text>
                <Text style={{ color: "black", fontSize: 17 }}>
                  Age: {item.age}
                </Text>
                <Text style={{ color: "black", fontSize: 17 }}>
                  Grade: {item.grade}
                </Text>
                <Text style={{ color: "black", fontSize: 17 }}>
                  Email: {item.email}
                </Text>
                <Pressable onPress={()=> {
                  setEditStudent(true);
                  setUpdateStudentId(item._id);
                  setUpdateStudentName(item.name);
                  setUpdateStudentEmail(item.email);
                  setUpdateStudentAge(item.age);
                  setUpdateStudentGrade(item.grade);
                }}>
                  <View style={{backgroundColor: "#333", paddingVertical: 10, marginTop: 10, borderRadius: 8}}>
                    <Text style={{color: "white", textAlign: "center"}}>Edit</Text>
                  </View>
                </Pressable>
                <Pressable onPress={()=> {
                  deleteStudent(item._id);
                }}>
                  <View style={{backgroundColor: "red", paddingVertical: 10, marginTop: 10, borderRadius: 8}}>
                    <Text style={{color: "white", textAlign: "center"}}>Delete</Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
