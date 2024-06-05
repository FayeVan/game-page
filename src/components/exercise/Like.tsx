import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface props {
  onClick: () => void;
}

export const Like = ({ onClick }: props) => {
  const [like, setLike] = useState(false);

  return (
    <>
      {like ? (
        <FaHeart
          color="red"
          size={20}
          onClick={() => {
            setLike(!like);
            onClick();
          }}
        />
      ) : (
        <FaRegHeart
          size={20}
          onClick={() => {
            setLike(!like);
            onClick();
          }}
        />
      )}
    </>
  );
};
