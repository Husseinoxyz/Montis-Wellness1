import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

/** Renders a small subset of Markdown: **bold**, *italic* and [links](/path or https://…). */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith('**')) {
          return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const className = 'font-medium text-[#007A59] underline decoration-[#007A59]/30 underline-offset-4 hover:decoration-[#007A59]';
          return href.startsWith('/') ? (
            <Link key={i} to={href} className={className}>{label}</Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener" className={className}>{label}</a>
          );
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
