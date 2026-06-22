import {
  FiHome,
  FiDollarSign,
  FiPieChart,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white">

      <div className="p-6 text-2xl font-bold">
        Tracker
      </div>

      <nav className="flex flex-col gap-4 p-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FiHome />
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FiDollarSign />
          Transactions
        </Link>

        <Link
          to="/budget"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FiPieChart />
          Budget
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;