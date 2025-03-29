import { Link } from "react-router-dom";
import useCategory from "../utils/useCategory";
const ButtonList = () => {
  const category = useCategory();
  if (!category)
    return (
      <div className="w-full flex items-center gap-6 p-2 h-16 mb-4 overflow-x-auto max-sm:p-1 max-sm:h-10 max-sm:gap-2 animate-pulse">
        {Array(7)
          .fill()
          .map((_, index) => (
            <div
              className="w-32 h-8 rounded-md bg-zinc-200  flex-shrink-0 max-sm:p-2 max-sm:h-6"
              key={index}
            ></div>
          ))}
      </div>
    );
  return (
    <div className="w-full flex items-center gap-6 p-2 h-16 mb-4 overflow-x-auto max-sm:p-1 max-sm:h-10 max-sm:gap-2">
      {category?.map((item) => (
        <Link
          to={`/?categoryId=${item.id}`}
          key={item.id}
          className="w-fit h-8 rounded-md bg-zinc-200 p-3 flex items-center gap-4 hover:bg-zinc-300 transition-colors cursor-pointer flex-shrink-0 max-sm:p-2 max-sm:h-6"
        >
          <h2 className="text-sm font-semibold max-sm:text-xs">{item.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
