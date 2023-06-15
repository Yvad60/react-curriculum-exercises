import { FC, ReactNode } from "react";

interface Props {
  children : ReactNode
}

const AnimalListItem: FC<Props> = ({ children }) => {
  return (
    <li className="w-full px-16 py-4 text-center border-b border-gray-300">
      {children}
    </li>
  );
};

export default AnimalListItem;
