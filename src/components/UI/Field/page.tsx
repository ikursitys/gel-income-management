import { ReactNode } from "react";

const Field = ({ children }: { children: ReactNode }) => {
  return (
    <div className="  w-56 h-12 bg-field-btn border-2 border-add-border ">
      <p className="h-inherit py-2 text-center ">{children}</p>
    </div>
  );
};

export default Field;
