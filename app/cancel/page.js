export default function CancelPage() {
  return (
    <main className="page">
      <div className="card status-card">
        <h1>Checkout cancelled</h1>
        <p>
          No payment was taken. <a href="/">Start again</a> whenever you're
          ready.
        </p>
      </div>
    </main>
  );
}
