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
          li: ({ children }) => <li className="leading-[1.75]">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="mb-6 border-l-2 border-gold pl-5 text-[1.05rem] leading-[1.8] text-cream/90">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => <strong className="font-semibold text-cream">{children}</strong>,
          a: ({ href, children }) => (
            <Link href={href ?? "#"} className="text-gold underline-offset-4 hover:underline">
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
