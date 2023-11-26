import { PropsWithChildren } from "react";

interface ButtonProps {
  onClick: (e: Event) => void;
  className: string;
}

export default function Button({ children, className }: PropsWithChildren<ButtonProps>) {
  return (
    <button className={className}>
      {children}
    </button>
  )
}
