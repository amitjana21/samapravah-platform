const KEY = 'samapravah-mobile-bookings';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function getBookings() {
  return load().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function generateId() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `SP-${y}${m}${day}-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function createBooking(data) {
  const list = load();
  const booking = {
    id: generateId(),
    ...data,
    status: 'Pending',
    technician: null,
    createdAt: new Date().toISOString(),
    estimatedVisit: `${data.date} · ${data.timeSlot}`,
  };
  list.unshift(booking);
  save(list);
  return booking;
}

export function updateBooking(id, updates) {
  const list = load();
  const i = list.findIndex((b) => b.id === id);
  if (i === -1) return null;
  list[i] = { ...list[i], ...updates };
  save(list);
  return list[i];
}

export function cancelBooking(id) {
  return updateBooking(id, { status: 'Cancelled' });
}

export function getCustomers() {
  const map = new Map();
  load().forEach((b) => {
    if (!map.has(b.mobile)) {
      map.set(b.mobile, { name: b.customerName, mobile: b.mobile, address: b.address, count: 0 });
    }
    map.get(b.mobile).count += 1;
  });
  return [...map.values()];
}

export function getAnalytics() {
  const list = load();
  const today = new Date().toISOString().slice(0, 10);
  return {
    total: list.length,
    pending: list.filter((b) => b.status === 'Pending').length,
    active: list.filter((b) => ['Technician Assigned', 'In Progress'].includes(b.status)).length,
    completed: list.filter((b) => b.status === 'Completed').length,
    today: list.filter((b) => b.date === today).length,
  };
}
