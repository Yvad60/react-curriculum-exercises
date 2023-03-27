import { useState } from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import Showdown from "showdown";

export default function Editor({ activeNote, updateNote }) {
  const [selectedTab, setSelectedTab] = useState("write");
  const mdConverter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <div>
      <ReactMde
        value={activeNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        minEditorHeight={90}
        minPreviewHeight={80}
        heightUnits="vh"
        generateMarkdownPreview={async (markdown) =>
          await mdConverter.makeHtml(markdown)
        }
      />
    </div>
  );
}
