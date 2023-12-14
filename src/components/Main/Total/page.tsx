// const totalProps = {
//     monthUSD,
//     monthGEL,
//     annualUSD,
//     annualGEL,
//   }: {
//     monthUSD: number;
//     monthGEL: number;
//     annualUSD: number;
//     annualGEL: number;
//   }

import Field from "@/components/UI/Field/page";

const Total = () => {
  return (
    <div className="h-auto text-2xl mt-10 flex justify-evenly ">
      <div className="">
        <div className=" mx-auto flex justify-evenly items-center">
          <p className="pr-4 w-1/2">total, USD</p>
          <Field>36500</Field>
        </div>

        <div className=" mx-auto flex justify-evenly mt-5 items-center">
          <p className="pr-4 w-1/2">total, GEL</p>
          <Field>94900</Field>
        </div>
      </div>
      <div className="">
        <div className="flex justify-evenly items-center">
          <p className="pr-4 w-1/2">annual, USD</p>
          <Field>36500</Field>
        </div>

        <div className="flex justify-evenly mt-5 items-center">
          <p className="pr-4 w-1/2">annual, GEL</p>
          <Field>94900</Field>
        </div>
      </div>
    </div>
  );
};

export default Total;
