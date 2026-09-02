export type TrendDirection = 'up' | 'down' | 'neutral';

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  change?: string;
  trend?: TrendDirection;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'warning' | 'info';
}

export interface DashboardData {
  title: string;
  subtitle: string;
  metrics: KpiMetric[];
  activity: ActivityItem[];
}
