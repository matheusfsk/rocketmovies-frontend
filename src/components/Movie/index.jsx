import { AiFillStar } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import { DivMain } from "./styles";
import { Tag } from "../../components/Tag";

export function Movie({ note, ...rest }) {
  function firstLetterUpperCase(tagName) {
    return tagName.charAt(0).toUpperCase() + tagName.slice(1);
  }

  return (
    <DivMain key={note.id} {...rest}>
      <h2>{note.title}</h2>
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          if (index + 1 <= note.rating) return <AiFillStar key={index} />;
          return <FiStar key={index} />;
        })}
      </div>
      <p>{note.description}</p>
      <div className="tags">
        {note.tags.map((tag) => (
          <Tag key={tag.id} title={firstLetterUpperCase(tag.name)} />
        ))}
      </div>
    </DivMain>
  );
}
