import { useEffect, useState } from "react";
import { marked } from "marked";

type Props = {
  filePath: string; // e.g. "example.md"
};

export default function MarkdownViewer({ filePath }: Props) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch(`${filePath}`);
        const text = await res.text();

        // Optional: Configure marked if needed
        marked.setOptions({
          breaks: true,
          gfm: true,
        });

        // Ensure `marked` is awaited if it returns a Promise
        const html = await marked.parse(text); // ✅ Await marked.parse()
        console.log(html);
        setContent(html);
      } catch (err) {
        setContent("Failed to load markdown.");
        console.error(err);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
