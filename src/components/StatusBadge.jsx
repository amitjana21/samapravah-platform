const STATUS_CLASS = {
  Pending: 'pending',
  'Technician Assigned': 'assigned',
  'In Progress': 'progress',
  Completed: 'done',
  Cancelled: 'cancelled',
};

export default function StatusBadge({ status }) {
  const mod = STATUS_CLASS[status] || 'pending';
  return <span className={`badge badge--${mod}`}>{status}</span>;
}

export function StatusTrack({ status }) {
  const steps = ['Pending', 'Technician Assigned', 'In Progress', 'Completed'];

  if (status === 'Cancelled') {
    return <p className="text-muted" style={{ textAlign: 'center', padding: '8px 0' }}>Booking cancelled</p>;
  }

  const idx = steps.indexOf(status);

  return (
    <div className="status-track">
      {steps.map((step, i) => (
        <div
          key={step}
          className={`status-track__step ${i < idx ? 'status-track__step--done' : ''} ${i === idx ? 'status-track__step--current' : ''}`}
        >
          <div className="status-track__dot">{i < idx ? '✓' : i + 1}</div>
          <span className="status-track__label">{step.split(' ')[0]}</span>
        </div>
      ))}
    </div>
  );
}
