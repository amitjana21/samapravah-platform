import { WHATSAPP_BUSINESS_NUMBER } from '../config/contact';

/**
 * Builds a formatted WhatsApp message for a confirmed booking.
 */
export function formatBookingWhatsAppMessage(booking) {
  const description = booking.description?.trim() || '—';

  return [
    '*New Service Booking — Sama Pravah*',
    '',
    `*Booking ID:* ${booking.id}`,
    `*Customer Name:* ${booking.customerName}`,
    `*Phone Number:* ${booking.mobile}`,
    `*Address:* ${booking.address}`,
    `*Service:* ${booking.serviceName}`,
    `*Date & Time:* ${booking.estimatedVisit}`,
    `*Issue:* ${booking.issueType}`,
    `*Issue Description:* ${description}`,
    '',
    'Please confirm my appointment. Thank you! 🙏',
  ].join('\n');
}

/**
 * Returns a wa.me URL that opens WhatsApp with the booking message pre-filled.
 */
export function getWhatsAppBookingUrl(booking, phone = WHATSAPP_BUSINESS_NUMBER) {
  const text = formatBookingWhatsAppMessage(booking);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
