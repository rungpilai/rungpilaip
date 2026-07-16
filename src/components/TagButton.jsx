import { TAGS } from "../utils/works";

const TagButton = ({ tag = TAGS[0], isSelected, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border text-sm ${
        isSelected
          ? "bg-(--color-primary) text-white"
          : `bg-white text-(--color-text-tertiary) border-(--color-border) ${
            `hover:border-(--color-primary-active) hover:text-(--color-primary)`}`
      }`}
      onClick={() => onClick(tag)}
    >
      {tag.title}
    </button>
  );
};

export default TagButton;
