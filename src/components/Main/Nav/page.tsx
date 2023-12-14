import arrowleft from "@/app/icons/arrowleft.svg";
import arrowright from "@/app/icons/arrowright.svg";
import Field from "@/components/UI/Field/page";
import Image from "next/image";

const ContentNav = ({ month, year }: { month: String; year: String }) => {
  return (
    <div className="mt-5 text-2xl mx-auto w-3/5 h-14 flex flex-row justify-evenly items-center ">
      <Image src={arrowleft} alt="arrow-left" />
      <Field>{month}</Field>
      <Field>{year}</Field>
      <Image src={arrowright} alt="arrow-right" />
    </div>
  );
};

export default ContentNav;
