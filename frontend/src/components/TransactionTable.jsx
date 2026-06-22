function TransactionTable({ transactions }) {
  return (
    <table className="w-full bg-white rounded shadow">

      <thead>
        <tr className="border-b">

          <th className="p-3">Title</th>

          <th className="p-3">Amount</th>

          <th className="p-3">Type</th>

          <th className="p-3">Category</th>

          <th className="p-3">Date</th>

          <th className="p-3">Action</th>

        </tr>
      </thead>

      <tbody>

        {transactions.map((item) => (

          <tr key={item._id} className="border-b">

            <td className="p-3">
              {item.title}
            </td>

            <td className="p-3">
              ₹{item.amount}
            </td>

            <td className="p-3">
              {item.typeOf}
            </td>

            <td className="p-3">
              {item.category}
            </td>

            <td className="p-3">
              {item.date}
            </td>

            <td className="p-3">
              <button className="text-blue-500 mr-3">
                Edit
              </button>

              <button className="text-red-500">
                Delete
              </button>
            </td>

          </tr>

        ))}
        

      </tbody>
      

    </table>
    
  );
}


export default TransactionTable;