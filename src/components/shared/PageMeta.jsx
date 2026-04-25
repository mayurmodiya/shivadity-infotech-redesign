import { useEffect } from 'react';

const PageMeta = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description);
    }
  }, [description, title]);

  return null;
};

export default PageMeta;
