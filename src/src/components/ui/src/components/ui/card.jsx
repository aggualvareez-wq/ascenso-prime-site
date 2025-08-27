export function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">{children}</div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-bold">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-gray-700">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-2 border-t pt-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}
