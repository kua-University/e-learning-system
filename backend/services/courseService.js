const courses = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Node.js Backend" }
];

const courseService = {
  getAllCourses: async () => {
    return courses;
  }
};

module.exports = courseService;