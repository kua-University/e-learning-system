const enrollments = [];

const enrollmentService = {
  enroll: async (data) => {
    enrollments.push(data);
    return { message: "Enrolled successfully" };
  }
};

module.exports = enrollmentService;