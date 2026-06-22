import { useState } from "react";

function TransactionModal({
  isOpen,
  onClose,
  onSubmit,
}) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [typeOf, setTypeOf] = useState("expense");
  const [category, setCategory] = useState("food");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      amount,
      typeOf,
      category,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white p-6 rounded-lg w-96">

        <h2 className="text-2xl font-bold mb-4">
          Add Transaction
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount"
            className="w-full border p-2 mb-3"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            className="w-full border p-2 mb-3"
            value={typeOf}
            onChange={(e) => setTypeOf(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            className="w-full border p-2 mb-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="bills">Bills</option>
            <option value="entertainment">Entertainment</option>
          </select>

          <div className="flex gap-3">

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default TransactionModal;