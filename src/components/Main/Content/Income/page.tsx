import Field from "@/components/UI/Field/page";

const Income = ({
  incomeDate,
  incomeUSD,
  rate,
}: {
  incomeDate: Date;
  incomeUSD: number;
  rate: number;
}) => {
  const incomeGEL = Math.round(incomeUSD * rate * 100) / 100;
  return (
    <div className="flex flex-row justify-around text-xl text-center mt-4">
      <Field>{incomeDate.toDateString()}</Field>
      <Field>{incomeUSD}</Field>
      <Field>{rate}</Field>
      <Field>{incomeGEL}</Field>
    </div>
  );
};

export default Income;
