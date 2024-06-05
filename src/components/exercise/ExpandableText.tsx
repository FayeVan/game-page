import { useState } from "react";

interface props {
  maxChars?: number; // 最大字符数
  children: string; // 子元素
}

const ExpandableText = ({ maxChars = 100, children }: props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const truncatedText = isExpanded
    ? children
    : children.substring(0, maxChars) + "...";
  return (
    <>
      <p>{truncatedText}</p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "收起" : "展开"}
      </button>
    </>
  );
};

export default ExpandableText;
