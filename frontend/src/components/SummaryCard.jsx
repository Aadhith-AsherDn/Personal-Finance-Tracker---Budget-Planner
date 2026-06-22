function SummaryCard({
  title,
  amount,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        ₹{amount}
      </p>

    </div>
  );
}

export default SummaryCard;