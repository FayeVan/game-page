import React from "react";
import categories from "../categories";

interface props {
  onSelectCategory: (category: string) => void; // 定义一个回调函数，用于处理选择分类的事件
}

const ExpenseFilter = ({ onSelectCategory }: props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
