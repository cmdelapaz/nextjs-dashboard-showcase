export default function Loading() {
  return (
    <main className="dashboard-shell" aria-busy="true" aria-label="Loading dashboard">
      <div className="skeleton skeleton--header" />
      <section className="metrics-grid">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="skeleton skeleton--card" key={index} />
        ))}
      </section>
      <div className="skeleton skeleton--panel" />
    </main>
  );
}
