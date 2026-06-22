import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">

        <SummaryCard
          title="Income"
          amount="25000"
        />

        <SummaryCard
          title="Expense"
          amount="12000"
        />

        <SummaryCard
          title="Balance"
          amount="13000"
        />

        <SummaryCard
          title="Budget Left"
          amount="8000"
        />

      </div>

    </div>
  );
}

export default Dashboard;