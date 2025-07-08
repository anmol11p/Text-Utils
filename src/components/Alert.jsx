// src/components/Alert.jsx
import React, { memo } from "react";

const Alert = memo(({ message, type = "success", visible }) => {
  if (!visible) return null;

  const baseStyle = "px-2 py-2 text-sm w-full fixed top-15 ";
  const typeStyle =
    type === "success"
      ? "bg-[#228B22] text-white"
      : type === "error"
      ? "bg-red-500 text-white"
      : "bg-blue-500 text-white";

  return <div className={`${baseStyle} ${typeStyle}`}>{message}</div>;
});

export default Alert;
