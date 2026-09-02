'use client';

export default function ErrorState({ reset }: { reset: () => void }) {
  return (
    <main className="dashboard-shell">
      <section className="error-state" role="alert">
        <p className="eyebrow">Something went wrong</p>
        <h1>Dashboard data could not be loaded.</h1>
        <p>The UI provides a recoverable error state instead of leaving the page blank.</p>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </section>
    </main>
  );
}
