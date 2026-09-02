import type { ActivityItem } from '@/types/dashboard';

interface ActivityListProps {
  items: ActivityItem[];
}

export function ActivityList({ items }: ActivityListProps) {
  if (items.length === 0) {
    return <p className="empty-state">No recent activity.</p>;
  }

  return (
    <div className="activity-list">
      {items.map((item) => (
        <article className="activity-item" key={item.id}>
          <span className={`activity-dot activity-dot--${item.status}`} aria-hidden="true" />
          <div>
            <div className="activity-heading">
              <h3>{item.title}</h3>
              <time>{item.timestamp}</time>
            </div>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
