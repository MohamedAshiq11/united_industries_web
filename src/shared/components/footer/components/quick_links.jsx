import "../footer.css";
import react from "react";

const QuickLinks = ({ title, links }) => {
  return (
    <div className="quick-links">
      <div className="title">{title}</div>
      <ul>
        {links.map((link) => (
          <li>
            <a href={`#${link.link}`}>{link.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
