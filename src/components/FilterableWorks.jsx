import { useState } from "react";
import { TAGS, WORKS } from "../utils/works";
import CardWork from "./CardWork";
import Chip from "./Chip";

const FilterableWorks = ({ onWorkClick }) => {
  const [selectedTag, setSelectedTag] = useState(TAGS[0]);
  const [workCount, setWorkCount] = useState(WORKS.length);

  const handleSelectTag = (tag) => {
    setSelectedTag(tag.title === selectedTag.title ? TAGS[0] : tag);
    setWorkCount(WORKS
    .filter((work) =>
      tag
        .keywords
        ?.some(keyword => work.tags.includes(keyword)),
    ).length);
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-4">
          {TAGS.map((tag) => (
            <Chip
              key={tag.title}
              tag={tag}
              count={workCount}
              isSelected={selectedTag.title === tag.title}
              onClick={handleSelectTag}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS.filter((work) =>
            selectedTag.keywords?.some(keyword => work.tags.includes(keyword)),
          ).map((work) => (
            <CardWork key={work.slug} onClick={onWorkClick} {...work}  />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterableWorks;
