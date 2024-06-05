import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // 使用useState函数声明一个状态变量，初始值为-1
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // 定义一个函数，用于处理点击事件
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* 如果items数组为空，则显示No items found. */}
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {/* 遍历items数组，为每个item添加一个li标签，并添加一个onClick事件，用于处理点击事件 */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              handleClick(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
