export const BOOKING_STATUSES = [
  'Pending',
  'Technician Assigned',
  'In Progress',
  'Completed',
  'Cancelled',
];

export const TIME_SLOTS = [
  '9:00 AM – 11:00 AM',
  '11:00 AM – 1:00 PM',
  '1:00 PM – 3:00 PM',
  '3:00 PM – 5:00 PM',
  '5:00 PM – 7:00 PM',
  '7:00 PM – 9:00 PM',
];

export const TECHNICIANS = [
  'Rajesh Kumar',
  'Suresh Patel',
  'Amit Singh',
  'Vikram Reddy',
  'Manoj Sharma',
];

export const SERVICES = [
  { id: 'cleaning', name: 'Cleaning', brand: 'TidyUP', emoji: '🧹', priceFrom: 499, gradient: 'linear-gradient(135deg,#0ea5e9,#06b6d4)', issues: ['Deep Cleaning', 'Bathroom', 'Kitchen', 'Sofa', 'Full Home'] },
  { id: 'plumbing', name: 'Plumbing', brand: 'Expert Fix', emoji: '🔧', priceFrom: 299, gradient: 'linear-gradient(135deg,#2563eb,#3b82f6)', issues: ['Tap Leak', 'Pipe Burst', 'Drain Block', 'Water Heater', 'Low Pressure'] },
  { id: 'electrical', name: 'Electrical', brand: 'Safe Wire', emoji: '⚡', priceFrom: 349, gradient: 'linear-gradient(135deg,#f59e0b,#fbbf24)', issues: ['Switch Issue', 'Power Trip', 'Fan Install', 'Light Fitting', 'Short Circuit'] },
  { id: 'ac', name: 'AC Repair', brand: 'Cool Care', emoji: '❄️', priceFrom: 449, gradient: 'linear-gradient(135deg,#06b6d4,#22d3ee)', issues: ['Not Cooling', 'Water Leak', 'Gas Refill', 'Installation', 'Service'] },
  { id: 'fridge', name: 'Fridge Repair', brand: 'Fresh Fix', emoji: '🧊', priceFrom: 399, gradient: 'linear-gradient(135deg,#6366f1,#818cf8)', issues: ['Not Cooling', 'Frost Issue', 'Compressor', 'Leakage', 'Door Seal'] },
  { id: 'washing-machine', name: 'Washing Machine', brand: 'Spin Pro', emoji: '🫧', priceFrom: 399, gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)', issues: ['Not Spinning', 'Not Draining', 'Noise', 'Not Starting', 'Leakage'] },
  { id: 'cctv', name: 'CCTV Install', brand: 'Secure Home', emoji: '📹', priceFrom: 999, gradient: 'linear-gradient(135deg,#64748b,#94a3b8)', issues: ['New Install', 'Camera Fix', 'DVR Setup', 'Remote View', 'Maintenance'] },
  { id: 'damp-proofing', name: 'Damp Proofing', brand: 'Dry Walls', emoji: '💧', priceFrom: 1499, gradient: 'linear-gradient(135deg,#059669,#10b981)', issues: ['Wall Seepage', 'Terrace Leak', 'Bathroom', 'Basement', 'Paint Peel'] },
  { id: 'carpenter', name: 'Carpenter', brand: 'Wood Craft', emoji: '🪚', priceFrom: 499, gradient: 'linear-gradient(135deg,#b45309,#d97706)', issues: ['Furniture', 'Door Fitting', 'Modular Kitchen', 'Wardrobe', 'Custom Work'] },
];

export const TRUST_BADGES = [
  { icon: '✓', title: 'Verified Pros', desc: 'Background-checked technicians' },
  { icon: '₹', title: 'Fair Pricing', desc: 'Rates shown before booking' },
  { icon: '🔒', title: 'No Hidden Fees', desc: 'Pay only what we quote' },
  { icon: '⭐', title: '4.8 Rating', desc: '10,000+ happy homes' },
];

export const PRICING_POINTS = [
  { label: 'Inspection visit', price: '₹99', note: 'Adjusted in final bill' },
  { label: 'AC service', price: 'From ₹449', note: 'Gas refill extra' },
  { label: 'Deep cleaning', price: 'From ₹499', note: 'Per room basis' },
  { label: 'Plumbing repair', price: 'From ₹299', note: 'Parts quoted separately' },
];

export function getServiceById(id) {
  return SERVICES.find((s) => s.id === id);
}
