import { TAGS } from "../utils/works";

const TagButton = ({ tag = TAGS[0], isSelected, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition-all duration-200 ease-out ${
        isSelected
          ? "bg-(--color-primary) text-white"
          : `bg-white text-(--color-text-subtitle) border-(--color-border) ${
            `hover:text-white hover:bg-(--color-primary-border) hover:border-transparent active:bg-(--color-primary-active)`}`
      }`}
      onClick={() => onClick(tag)}
    >
      {tag.title}
    </button>
  );
};

export default TagButton;
