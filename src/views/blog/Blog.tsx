import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Blog = () => {
  const [content, setContent] = React.useState("");
  React.useEffect(() => {
    fetch(
      "https://data.taoofcoding.tech/api/singletons/get/myddd_electron_md?token=e4a33de943082eda2be42ee4e4a2ea"
    ).then((response) => {
      response.json().then((data) => {
        setContent((prev) => data.content);
      });
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col md:overflow-y-scroll">
      <article className="prose prose-slate dark:prose-invert max-w-none p-4 md:m-4 md:shadow shadow-black dark:shadow-slate-500 rounded-lg">
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </article>
    </div>
  );
};

export default Blog;
