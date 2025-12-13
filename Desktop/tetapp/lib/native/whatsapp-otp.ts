/**
 * WhatsApp Zero-tap OTP Native Bridge
 * Connects React Native to the Android native module for OTP auto-fill
 */

import { NativeModules, NativeEventEmitter, Platform, EmitterSubscription } from 'react-native';

// Get the native module (Android only)
const { WhatsAppOtpModule } = NativeModules;

// Event name for OTP received
const OTP_RECEIVED_EVENT = 'onOtpReceived';

// Create event emitter if module exists
let eventEmitter: NativeEventEmitter | null = null;
if (Platform.OS === 'android' && WhatsAppOtpModule) {
  eventEmitter = new NativeEventEmitter(WhatsAppOtpModule);
}

/**
 * Check if the native module is available
 * (Only available on Android with dev client build)
 */
export function isNativeModuleAvailable(): boolean {
  return Platform.OS === 'android' && WhatsAppOtpModule != null;
}

/**
 * Initiates handshake with WhatsApp to enable zero-tap OTP auto-fill
 * Should be called when user requests OTP
 */
export function initiateHandshake(): void {
  if (!isNativeModuleAvailable()) {
    console.log('WhatsApp OTP native module not available (iOS or Expo Go)');
    return;
  }

  try {
    WhatsAppOtpModule.sendOtpIntentToWhatsApp();
    console.log('WhatsApp OTP handshake initiated');
  } catch (error) {
    console.error('Failed to initiate WhatsApp OTP handshake:', error);
  }
}

/**
 * Subscribe to OTP received events from WhatsApp
 * The callback is called when WhatsApp broadcasts an OTP
 *
 * @param callback Function to call when OTP is received
 * @returns Subscription object to unsubscribe, or null if not available
 */
export function subscribeToOtp(callback: (otp: string) => void): EmitterSubscription | null {
  if (!isNativeModuleAvailable() || !eventEmitter) {
    console.log('WhatsApp OTP subscription not available (iOS or Expo Go)');
    return null;
  }

  try {
    const subscription = eventEmitter.addListener(OTP_RECEIVED_EVENT, (otp: string) => {
      console.log('OTP received from WhatsApp:', otp);
      callback(otp);
    });

    console.log('Subscribed to WhatsApp OTP events');
    return subscription;
  } catch (error) {
    console.error('Failed to subscribe to WhatsApp OTP events:', error);
    return null;
  }
}

/**
 * Unsubscribe from OTP events
 * @param subscription The subscription returned by subscribeToOtp
 */
export function unsubscribeFromOtp(subscription: EmitterSubscription | null): void {
  if (subscription) {
    try {
      subscription.remove();
      console.log('Unsubscribed from WhatsApp OTP events');
    } catch (error) {
      console.error('Failed to unsubscribe from WhatsApp OTP events:', error);
    }
  }
}

/**
 * Check if WhatsApp is installed on the device
 * @returns Promise that resolves to true if WhatsApp is installed
 */
export async function isWhatsAppInstalled(): Promise<boolean> {
  if (!isNativeModuleAvailable()) {
    // On iOS or Expo Go, we assume WhatsApp might be installed
    // OTP will still be sent, just no auto-fill
    return Platform.OS === 'ios';
  }

  try {
    return await WhatsAppOtpModule.isWhatsAppInstalled();
  } catch (error) {
    console.error('Failed to check WhatsApp installation:', error);
    return false;
  }
}

/**
 * Get detailed WhatsApp installation info
 * @returns Promise with info about which WhatsApp apps are installed
 */
export async function getWhatsAppInfo(): Promise<{ whatsapp: boolean; whatsappBusiness: boolean } | null> {
  if (!isNativeModuleAvailable()) {
    return null;
  }

  try {
    return await WhatsAppOtpModule.getWhatsAppInfo();
  } catch (error) {
    console.error('Failed to get WhatsApp info:', error);
    return null;
  }
}

// Export types
export type OtpSubscription = EmitterSubscription | null;
