import { useState } from "react";
import "./App.css";
import "./expense-tracker/components/Form/Form";
import Form from "./expense-tracker/components/Form/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter/ExpenseFilter";
import categories from "./expense-tracker/categories";

function App() {
  const [seletedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visbileExpenses = seletedCategory
    ? expenses.filter((e) => e.category === seletedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <Form
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visbileExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
