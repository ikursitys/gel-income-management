import Navbar from "@/components/Navbar/page";
import ContentNav from "@/components/Main/Nav/page";
import ContentCard from "@/components/Main/Content/page";
import Total from "@/components/Main/Total/page";

export default function Home() {
  return (
    <>
      <ContentNav month="November" year="2023" />
      <ContentCard />
      <div className="mx-auto text-2xl flex justify-evenly">
        <button className="w-80  h-14 my-7 bg-add-border">
          + Add new income
        </button>
        <button className="w-80 h-14 my-7 bg-add-border">
          Show annual data
        </button>
      </div>
    </>
  );
}
