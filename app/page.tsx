import { ActivityList } from '@/components/ActivityList';
import { DashboardHeader } from '@/components/DashboardHeader';
import { KpiCard } from '@/components/KpiCard';
import { getDashboardData } from '@/lib/dashboard-api';

export default async function DashboardPage() {
  const dashboard = await getDashboardData();

  return (
    <main className="dashboard-shell">
      <DashboardHeader title={dashboard.title} subtitle={dashboard.subtitle} />

      <section className="metrics-grid" aria-label="Key performance indicators">
        {dashboard.metrics.map((metric) => (
          <KpiCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className="content-grid">
        <article className="panel panel--wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Performance</p>
              <h2>Business Overview</h2>
            </div>
            <span className="period-chip">Last 30 days</span>
          </div>

          <div className="chart-placeholder" role="img" aria-label="Placeholder for a revenue trend chart">
            <div className="chart-bars" aria-hidden="true">
              {[38, 52, 45, 67, 58, 78, 72, 88, 76, 94, 86, 100].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <div>
              <strong>Typed data + reusable UI</strong>
              <p>This area is ready to connect to Chart.js, Recharts, or another visualization library.</p>
            </div>
          </div>
        </article>

        <aside className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Updates</p>
              <h2>Recent Activity</h2>
            </div>
          </div>
          <ActivityList items={dashboard.activity} />
        </aside>
      </section>
    </main>
  );
}
