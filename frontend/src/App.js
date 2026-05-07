import React, { useState, useEffect } from "react";
import API from "./api";

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (user) loadCourses();
  }, [user]);

  const loadCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data);
  };

  const auth = async () => {
    try {
      if (isLogin) {
        const res = await API.post("/users/login", {
          name,
          password
        });

        setUser(res.data.user);
      } else {
        await API.post("/users/register", {
          name,
          password
        });

        alert("Registered successfully");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const addCourse = async () => {
    await API.post("/courses", { title: course });
    setCourse("");
    loadCourses();
  };

  const enroll = async (courseId) => {
    await API.post("/enroll", {
      userId: user.id,
      courseId
    });

    alert("Enrolled");
  };

  // LOGIN PAGE
  if (!user) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h2>{isLogin ? "Login" : "Register"}</h2>

          <input
            style={styles.input}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.btn} onClick={auth}>
            {isLogin ? "Login" : "Register"}
          </button>

          <p style={styles.link} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create account" : "Already have account"}
          </p>
        </div>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Welcome {user.name}</h2>

        <button style={styles.logout} onClick={() => setUser(null)}>
          Logout
        </button>

        <h3>Create Course</h3>

        <input
          style={styles.input}
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button style={styles.btn} onClick={addCourse}>
          Add
        </button>

        <h3>Courses</h3>

        {courses.map((c) => (
          <div key={c.id} style={styles.row}>
            {c.title}
            <button onClick={() => enroll(c.id)} style={styles.enroll}>
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// RESPONSIVE DESIGN
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef2f7",
    padding: "10px"
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textAlign: "center"
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    width: "100%"
  },

  btn: {
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px"
  },

  logout: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "6px"
  },

  link: {
    color: "#007bff",
    cursor: "pointer"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    border: "1px solid #eee",
    borderRadius: "6px"
  },

  enroll: {
    background: "green",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "5px"
  }
};

export default App;