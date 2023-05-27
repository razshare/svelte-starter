import { ActionPerformed, PushNotificationSchema, RegistrationError, Token } from '@capacitor/push-notifications'

export type PushNotificationsListenerOptions = {
	onnotification?: (notification: PushNotificationSchema) => void
	onregistration?: (token: Token) => void
	onregistrationerror?: (error: RegistrationError) => void
	onaction?: (action: ActionPerformed) => void
}
