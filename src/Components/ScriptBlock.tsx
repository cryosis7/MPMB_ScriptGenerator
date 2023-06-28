import { FormData } from "../App";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

const fileName = "ScottsItemGenerator.js";

interface ScriptBlockProps {
  content: FormData;
}

export const ScriptBlock: React.FC<ScriptBlockProps> = ({ content }) => {
  const listName = "MagicItemsList";
  const requiredSheetVersion = "13.0.6";

  if (content.name == null || typeof content.name != "string") {
    return <p>Failed to parse the content</p>;
  }

  let script = `var iFileName = "${fileName}";\n`;
  script += `RequiredSheetVersion("${requiredSheetVersion}");\n\n`;
  script += `${listName}["${content.name.toLowerCase()}"] = ${JSON.stringify(
    content,
    null,
    2
  )};`;

  return <SyntaxHighlighter language="JSON">{script}</SyntaxHighlighter>;
};
