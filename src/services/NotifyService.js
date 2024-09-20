import { Notify } from "quasar";

class NotifyService {
  static success(message) {
    Notify.create({
      type: "positive",
      message: message,
    });
  }
  static error(message) {
    Notify.create({
      type: "negative",
      message: message,
    });
  }
  static warning(message) {
    Notify.create({
      type: "warning",
      message: message,
    });
  }
  static info(message) {
    Notify.create({
      type: "info",
      message: message,
    });
  }
}

export default NotifyService;
