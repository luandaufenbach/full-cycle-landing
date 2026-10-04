type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
}: SectionHeadingProps) {
  const light = tone === 'light';

  return (
    <div className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.16em] ${light ? 'text-gold' : 'text-earth'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl ${light ? 'text-white' : 'text-primary'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-primary-100' : 'text-neutral-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
