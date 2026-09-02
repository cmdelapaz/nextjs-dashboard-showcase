import type { DashboardData } from '@/types/dashboard';

const fallbackData: DashboardData = {
  title: 'Operations Dashboard',
  subtitle: 'A typed, API-ready dashboard example for business workflows.',
  metrics: [
    { id: 'revenue', label: 'Revenue', value: '$48,920', change: '+12.4%', trend: 'up' },
    { id: 'jobs', label: 'Completed Jobs', value: '128', change: '+8.1%', trend: 'up' },
    { id: 'clients', label: 'Active Clients', value: '84', change: '+3.6%', trend: 'up' },
    { id: 'outstanding', label: 'Outstanding', value: '$6,240', change: '-5.2%', trend: 'down' }
  ],
  activity: [
    {
      id: '1',
      title: 'Invoice paid',
      description: 'Payment received for invoice INV-1042.',
      timestamp: '12 minutes ago',
      status: 'success'
    },
    {
      id: '2',
      title: 'Job scheduled',
      description: 'A new service job was added to tomorrow’s schedule.',
      timestamp: '37 minutes ago',
      status: 'info'
    },
    {
      id: '3',
      title: 'Follow-up required',
      description: 'A customer estimate has been open for three days.',
      timestamp: '1 hour ago',
      status: 'warning'
    }
  ]
};

export async function getDashboardData(): Promise<DashboardData> {
  const apiUrl = process.env.DASHBOARD_API_URL;

  if (!apiUrl) {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return fallbackData;
  }

  const response = await fetch(apiUrl, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Dashboard API request failed with status ${response.status}.`);
  }

  return response.json() as Promise<DashboardData>;
}
