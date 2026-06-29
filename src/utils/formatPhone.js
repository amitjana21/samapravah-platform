export function formatPhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");

  if (digits.length === 10) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }

  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }

  return String(phone || "");
}

export function getWhatsAppUrl(number) {
  return `https://wa.me/${String(number || "").replace(/\D/g, "")}`;
}

export function getTelUrl(phone) {
  return `tel:${String(phone || "").replace(/\D/g, "")}`;
}
