import { PushNotifications } from '@capacitor/push-notifications'

export const unlisten = async () => {
	await PushNotifications.removeAllListeners()
}

/**
 * Listen for push notifications events.
 * @param {import('../$types/listener-options.js').PushNotificationsListenerOptions} options
 */
export const listen = async options => {
	if (options.onregistration) await PushNotifications.addListener('registration', options.onregistration)

	if (options.onregistrationerror) await PushNotifications.addListener('registrationError', options.onregistrationerror)

	if (options.onnotification) await PushNotifications.addListener('pushNotificationReceived', options.onnotification)

	if (options.onaction) await PushNotifications.addListener('pushNotificationActionPerformed', options.onaction)
}

/**
 * Request permission for push notifications.
 * @returns {Promise<boolean>} true if user has granted permission, false otherwise.
 */
export const register = async () => {
	let permStatus = await PushNotifications.checkPermissions()

	if (permStatus.receive === 'prompt') {
		permStatus = await PushNotifications.requestPermissions()
	}

	if (permStatus.receive !== 'granted') {
		return false
	}

	await PushNotifications.register()

	return true
}

/**
 * Get a promise of the next batch of incoming notifications and log them to the console.
 * @returns {Promise<import('@capacitor/push-notifications').DeliveredNotifications>}
 */
export const delivered = async () => {
	const notificationList = await PushNotifications.getDeliveredNotifications()
	console.log('delivered notifications', notificationList)
	return notificationList
}
