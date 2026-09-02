import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="article-body max-w-none">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 font-serif text-3xl text-cream">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-xl text-cream">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 text-[1.05rem] leading-[1.8] text-cream/88">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 list-disc space-y-2 pl-5 text-cream/88">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 list-decimal space-y-2 pl-5 text-cream/88">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-[1.75]">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="article-callout mb-6 border border-line-white bg-[rgba(5,5,5,0.45)] px-5 py-4 text-[1.05rem] leading-[1.8] text-cream/90">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => <strong className="font-semibold text-cream">{children}</strong>,
          table: ({ children }) => (
            <div className="article-table-wrap -mx-1 mb-6 overflow-x-auto px-1">
              <table className="w-full min-w-[640px] border-collapse text-left text-[0.95rem] text-cream/88">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b border-line-white text-cream">{children}</thead>
          ),
          tbody: ({ children }) => <tbody className="divide-y divide-line-white">{children}</tbody>,
          tr: ({ children }) => <tr className="align-top">{children}</tr>,
          th: ({ children }) => (
            <th className="px-4 py-3 text-[0.72rem] font-medium tracking-[0.12em] text-gold uppercase">
              {children}
            </th>
          ),
          td: ({ children }) => <td className="px-4 py-3 leading-[1.7]">{children}</td>,
          a: ({ href, children }) => (
            <Link href={href ?? "#"} className="break-words text-gold underline-offset-4 hover:underline">
              {children}
            </Link>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
