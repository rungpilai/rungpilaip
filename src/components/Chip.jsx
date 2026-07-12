const Chip = ({ tag, isSelected, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border ${
        isSelected
          ? "bg-(--color-primary-purple) text-white"
          : `bg-white text-(--color-card-meta) border-(--color-border) ${
            `hover:border-(--color-link-hover) hover:text-(--color-primary-purple)`}`
      }`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default Chip;
