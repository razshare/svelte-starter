import {
  PushNotifications,
  type ActionPerformed,
  type PushNotificationSchema,
  type RegistrationError,
  type Token,
} from "@capacitor/push-notifications";

export const unlisten = async () => {
  await PushNotifications.removeAllListeners();
};

export const listen = async (options: {
  onnotification?: (notification: PushNotificationSchema) => void;
  onregistration?: (token: Token) => void;
  onregistrationerror?: (error: RegistrationError) => void;
  onaction?: (action: ActionPerformed) => void;
}) => {
  if (options.onregistration)
    await PushNotifications.addListener("registration", options.onregistration);

  if (options.onregistrationerror)
    await PushNotifications.addListener(
      "registrationError",
      options.onregistrationerror
    );

  if (options.onnotification)
    await PushNotifications.addListener(
      "pushNotificationReceived",
      options.onnotification
    );

  if (options.onaction)
    await PushNotifications.addListener(
      "pushNotificationActionPerformed",
      options.onaction
    );
};

export const register = async () => {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === "prompt") {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== "granted") {
    return false;
  }

  await PushNotifications.register();

  return true;
};

export const delivered = async () => {
  const notificationList = await PushNotifications.getDeliveredNotifications();
  console.log("delivered notifications", notificationList);
};
