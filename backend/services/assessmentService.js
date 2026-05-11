const assessments = [
  { id: 1, title: "React Quiz" }
];

const assessmentService = {
  getAll: async () => {
    return assessments;
  }
};

module.exports = assessmentService;