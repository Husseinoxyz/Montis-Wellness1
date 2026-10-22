import { useContext, useEffect } from 'react';
import { HeadContext, buildHeadTags, fullTitle, type SeoProps } from '../lib/seo';

export default function Seo(props: SeoProps) {
  const collector = useContext(HeadContext);
  if (collector) collector.seo = props;

  const key = JSON.stringify(props);
  useEffect(() => {
    document.title = fullTitle(props.title);
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
    document.head.insertAdjacentHTML('beforeend', buildHeadTags(props));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return null;
}
