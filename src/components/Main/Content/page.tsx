import Income from "./Income/page";
import { incomeData } from "@/app/data";

const ContentCard = () => {
  return (
    <div className="w-9/12 mt-8 mx-auto">
      <div className="flex justify-between mb-4">
        <div className="w-1/4 text-2xl text-center">Income date</div>
        <div className="w-1/4 text-2xl text-center">Income, USD</div>
        <div className="w-1/4 text-2xl text-center">USD/GEL rate</div>
        <div className="w-1/4 text-2xl text-center">Income, GEL</div>
      </div>
      <div className=" max-h-80 overflow-auto ">
        {incomeData.map((data) => {
          return (
            <li className="list-none" key={data.id}>
              <Income
                incomeDate={data.incomeDate}
                incomeUSD={data.incomeUSD}
                rate={data.rate}
              />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ContentCard;
