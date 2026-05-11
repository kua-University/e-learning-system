const notifications = [];

const notificationService = {
  send: async (message) => {
    notifications.push(message);
    return { message: "Notification sent" };
  },

  getAll: async () => {
    return notifications;
  }
};

module.exports = notificationService;