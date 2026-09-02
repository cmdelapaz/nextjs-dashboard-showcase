import type { KpiMetric } from '@/types/dashboard';

interface KpiCardProps {
  metric: KpiMetric;
}

export function KpiCard({ metric }: KpiCardProps) {
  const trendLabel = metric.trend === 'up' ? 'Increasing' : metric.trend === 'down' ? 'Decreasing' : 'Stable';

  return (
    <article className="kpi-card" aria-label={`${metric.label}: ${metric.value}`}>
      <p className="kpi-label">{metric.label}</p>
      <div className="kpi-row">
        <strong className="kpi-value">{metric.value}</strong>
        {metric.change ? (
          <span className={`kpi-change kpi-change--${metric.trend ?? 'neutral'}`} title={trendLabel}>
            {metric.change}
          </span>
        ) : null}
      </div>
    </article>
  );
}
