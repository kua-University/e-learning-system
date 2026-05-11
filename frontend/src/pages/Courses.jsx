import { useEffect, useState } from "react";
import API from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await API.get("/courses");
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    load();
  }, []);

  const enroll = async (courseId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.post("/enrollments", {
        userId: user?.id || 1,
        courseId
      });

      alert(res.data.message);
    } catch (err) {
      alert("Enrollment failed");
    }
  };

  return (
    <div className="container">
      <h2>Courses</h2>

      {courses.map((c) => (
        <div key={c.id} className="course-card">
          <h3>{c.title}</h3>
          <p>{c.description}</p>

          <button onClick={() => enroll(c.id)}>
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
}

export default Courses;