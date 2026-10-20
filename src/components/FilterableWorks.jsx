import { useState } from "react";
import { TAGS, WORKS } from "../utils/works";
import CardWork from "./CardWork";
import TagButton from "./TagButton";

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
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-4">
          {TAGS.map((tag) => (
            <TagButton
              key={tag.title}
              tag={tag}
              isSelected={selectedTag.title === tag.title}
              onClick={handleSelectTag}
            />
          ))}
        </div>
        <div className="mt-8 mb-4.5 self-stretch justify-start text-(--color-text-subtitle)">{workCount} {workCount > 1 ? "works": "work"}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
