export function Card({ className = "", ...props }) {
  return <div className={`rounded-2xl border ${className}`} {...props} />;
}
export function CardHeader({ className = "", ...props }) {
  return <div className={`p-5 border-b border-white/10 ${className}`} {...props} />;
}
export function CardContent({ className = "", ...props }) {
  return <div className={`p-5 ${className}`} {...props} />;
}
export function CardFooter({ className = "", ...props }) {
  return <div className={`p-5 border-t border-white/10 ${className}`} {...props} />;
}
export function CardTitle({ className = "", ...props }) {
  return <h3 className={`text-lg font-semibold ${className}`} {...props} />;
}
