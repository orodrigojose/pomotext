const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") throw new Error("Denied Permission");
  },
  notify({ title, body, icon }) {
    const options = { body, icon };
    new Notification(title, options);
  },
};

export default Notifyer;
