import { useState } from "react";
import { TAGS, WORKS } from "../utils/works";
import CardWork from "./CardWork";
import Chip from "./Chip";

const FilterableWorks = () => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleSelectTag = (tag) => {
    setSelectedTag(tag === selectedTag ? "" : tag);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-4">
          <Chip
            tag="All"
            isSelected={selectedTag === ""}
            onClick={() => handleSelectTag("")}
          />
          {TAGS.map((tag) => (
            <Chip
              key={tag}
              tag={tag}
              isSelected={selectedTag === tag}
              onClick={handleSelectTag}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS.filter((work) =>
            selectedTag ? work.tags.includes(selectedTag) : true,
          ).map((work) => (
            <CardWork key={work.slug} {...work} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterableWorks;
