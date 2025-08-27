export function Button({ className = "", ...props }) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition " +
        "border border-transparent bg-slate-900 text-white hover:opacity-90 disabled:opacity-50 " +
        className
      }
      {...props}
    />
  );
}
