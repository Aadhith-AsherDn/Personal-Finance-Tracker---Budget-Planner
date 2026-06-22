import { useEffect, useState } from "react";
import TransactionModal from "../components/TransactionModal";
import {
  getTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction
  
} from "../services/transactionService";


function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {loadTransactions(); }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateTransaction = async (transactionData) => {
    try {
      await createTransaction(transactionData);

      loadTransactions();

      setIsModalOpen(false);

    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTransaction = async (transactionData) => {
  try {

    await updateTransaction(
      selectedTransaction.transactionId,
      transactionData
    );

    loadTransactions();

    setSelectedTransaction(null);
    setIsModalOpen(false);

  } catch (error) {
    console.log(error);
  }
    };
  
  const handleDeleteTransaction = async (
        transactionId
      ) => {

        const confirmDelete = window.confirm(
          "Delete this transaction?"
        );

        if (!confirmDelete) return;

        try {

          await deleteTransaction(
            transactionId
          );

          loadTransactions();

        } catch (error) {

          console.log(error);

        }
  };
  const handleEditClick = (transaction) => {
  setSelectedTransaction(transaction);
  setIsModalOpen(true);
};

  return (

    
    <div>
      <div className="flex justify-between mb-6">

        <h1 className="text-4xl font-bold">
          Transactions
        </h1>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        onClick={() => {
            setSelectedTransaction(null);
            setIsModalOpen(true);
          }}
         >
        + Add Transaction
      </button>
      

      </div>
      


      <div className="bg-white rounded-lg shadow-lg text-justify">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Type</th>
              <th className="p-4">Category</th>
              <th className="p-4">Actions</th>
            </tr>

          </thead>

          <tbody>

            {transactions.map((item) => (

              <tr
                key={item.transactionId}
                className="border-b"
              >

                <td className="p-4">
                  {item.transactionId}
                </td>

                <td className="p-4">
                  {item.title}
                </td>

                <td className="p-4">
                  ₹{item.amount}
                </td>

                <td className="p-4">
                  {item.typeOf}
                </td>

                <td className="p-4">
                  {item.category}
                </td>
                <td className="p-4 text-justify">
                <button
                  className="text-blue-600 mr-3"
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </button>

                <button
                      className="text-red-600"
                      onClick={() =>
                        handleDeleteTransaction(
                          item.transactionId
                        )
                      }
                    >
                      Delete
              </button>
              </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
            <TransactionModal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedTransaction(null);
              }}
              onSubmit={
                selectedTransaction
                  ? handleUpdateTransaction
                  : handleCreateTransaction
              }
              transaction={selectedTransaction}
            />

    </div>
  );
}

export default Transactions;