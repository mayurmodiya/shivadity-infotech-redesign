const SectionHeading = ({ badge, title, description, align = 'left' }) => {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {badge ? (
        <p className="mb-4 inline-flex rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
          {badge}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
