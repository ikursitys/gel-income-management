const AddIncome = ({ onAdd }: { onAdd: () => void }) => {
  const date = new Date().toISOString();
  const [maxDate] = date.split("T");

  return (
    <>
      <div className="flex items-center justify-center text-2xl ">
        <div className="w-3/4 h-36  mt-10 bg-gradient-to-b from-add-grad-start to-add-grad-end rounded-xl flex flex-row items-center justify-around">
          <div>
            <label htmlFor="date">add income date</label>
            <input
              className="ml-4 w-56 h-12 bg-field-btn border-2 border-add-border text-center focus:bg-add-border "
              id="date"
              type="date"
              min="2023-01-01"
              max={maxDate}
            />
          </div>
          <div>
            <label htmlFor="usd">add income, USD</label>
            <input
              className="ml-4 w-56 h-12 bg-field-btn border-2 border-add-border text-center focus:bg-add-border"
              id="usd"
              type="number"
              min="0"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="w-40 h-14 my-7 text-2xl bg-add-border"
          onClick={onAdd}
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default AddIncome;
