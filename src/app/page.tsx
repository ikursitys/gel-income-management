"use client";

import ContentNav from "@/components/Main/Nav/page";
import ContentCard from "@/components/Main/Content/page";
import Total from "@/components/Main/Total/page";
import { useState } from "react";
import AddIncome from "@/components/AddIncome/page";

const incomeData = [];

export default function Home() {
  const [addIsShown, setAddIsShown] = useState<boolean>(false);

  const onAdd = () => {
    setAddIsShown((prev) => !prev);
  };
  return (
    <>
      <ContentNav month="November" year="2023" />
      <ContentCard />
      {!addIsShown && (
        <>
          <Total />
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
      {addIsShown && <AddIncome onAdd={onAdd} />}
    </>
  );
}
