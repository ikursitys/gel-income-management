"use client";
import Navbar from "@/components/Navbar/page";
import ContentNav from "@/components/Main/Nav/page";
import ContentCard from "@/components/Main/Content/page";
import Total from "@/components/Main/Total/page";
import { useState } from "react";
import AddIncome from "@/components/AddIncome/page";

const incomeData = [];

export default function Home() {
  const [addIsShown, setAddIsShown] = useState<boolean>(false);

  const onAdd = () => {
    // incomeData.push({id: incomeDate, incomeDate: incomeDate, incomeUSD: incomeUSD, rate: 2.6})
    setAddIsShown((prev) => !prev);
  };
  return (
    <>
      <ContentNav month="November" year="2023" />
      {!addIsShown && (
        <>
          <ContentCard />
          <div className="mx-auto text-2xl flex justify-evenly">
            <button
              className="w-80  h-14 my-7 bg-add-border"
              onClick={() => {
                setAddIsShown((prev) => !prev);
              }}
            >
              + Add new income
            </button>
            <button className="w-80 h-14 my-7 bg-add-border">
              Show annual data
            </button>
          </div>
        </>
      )}
      {addIsShown && (
        <>
          <AddIncome />
          <div className="flex items-center justify-center">
            <button
              className="w-40 h-14 my-7 text-2xl bg-add-border"
              onClick={onAdd}
            >
              ADD
            </button>
          </div>
        </>
      )}
    </>
  );
}
