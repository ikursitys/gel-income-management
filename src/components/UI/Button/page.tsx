import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="  w-56 h-12 bg-field-btn border-2 border-add-border ">
      <p className="text-2xl h-inherit py-2 text-center ">{children}</p>
    </button>
  );
};

export default Button;
