const Chip = ({ tag, isSelected, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full border ${
        isSelected ? "bg-[#747BA0] text-white" : "bg-white text-[#666870] border-[#E9EAEC] hover:border-[#ACB0C6] hover:text-[#747BA0]"
      }`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default Chip;
