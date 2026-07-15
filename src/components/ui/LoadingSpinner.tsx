export function LoadingSpinner() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gold/20 border-t-gold animate-spin" />
        <span className="sr-only">Loading content...</span>
      </div>
    </div>
  );
}