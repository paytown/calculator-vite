import { PropsWithChildren } from "react";

interface ButtonProps {
  onClick?: (e: Event) => void;
}

export default function Button({ children }: PropsWithChildren<ButtonProps>) {
  return (
    <button className="button">
      {children}
    </button>
  )
}
