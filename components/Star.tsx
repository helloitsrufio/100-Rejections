import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

export default function Star(): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false); //the hook (useX)
  let clicked: JSX.Element;
  if (isFavorite) {
    clicked = filledStar;
  } else {
    clicked = emptyStar;
  }
  return (
    <div>
      <button
        onClick={() => {
          setIsFavorite(!isFavorite);
        }}
      >
        {clicked}
      </button>
    </div>
  );
}

const emptyStar = <StarBorderIcon className="text-gray-500" />;
const filledStar = <StarIcon className="text-yellow-500" />;
