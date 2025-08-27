export function Badge({ className = "", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-xl px-2.5 py-1 text-xs font-medium bg-white text-black ${className}`}
    >
      {children}
    </span>
  );
}
