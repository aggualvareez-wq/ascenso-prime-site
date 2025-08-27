export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-xl border bg-black border-gray-600 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/30 ${className}`}
      {...props}
    />
  );
}
