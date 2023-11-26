import { PropsWithChildren } from "react";

interface ButtonProps {
  onClick: () => void;
  className: string;
}

export default function Button({ className, onClick, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
