import { FormValues } from "../App";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

interface ScriptBlockProps {
  content: FormValues;
}

export const ScriptBlock: React.FC<ScriptBlockProps> = ({ content }) => {
  const listName = "MagicItemsList";
  const requiredSheetVersion = "13.0.6";

  if (content.name == null) {
    return <p>Failed to parse the content</p>;
  }

  let script = `RequiredSheetVersion("${requiredSheetVersion}");\n`;
  script += `${listName}["${content.name.toLowerCase()}"] = ${JSON.stringify(
    content, null, 2
  )};`;

  return <SyntaxHighlighter language="JSON">{script}</SyntaxHighlighter>;
};
