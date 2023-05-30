import { FC, MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-2 text-lg font-medium text-white bg-blue-800 rounded hover:bg-blue-900"
    >
      {children}
    </button>
  );
};
