/** Support helpline (tap-to-call) */
export const SUPPORT_PHONE = '18007262435';

/**
 * Business WhatsApp in international format (country code + number, no + or spaces).
 * Set VITE_WHATSAPP_NUMBER in .env (e.g. 919876543210) for production.
 */
export const WHATSAPP_BUSINESS_NUMBER = (
  import.meta.env.VITE_WHATSAPP_NUMBER ?? '919876543210'
).replace(/\D/g, '');
