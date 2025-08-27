import React from "react";

export function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
    />
  );
}
