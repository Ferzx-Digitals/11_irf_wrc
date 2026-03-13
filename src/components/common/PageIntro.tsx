interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

const PageIntro = ({ eyebrow, title, description }: PageIntroProps) => {
  return (
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-forest-primary">
        {eyebrow}
      </p>
      <h1 className="mb-6 text-4xl font-bold text-forest-deep md:text-6xl">{title}</h1>
      <p className="mx-auto max-w-3xl text-lg text-forest-primary md:text-xl">{description}</p>
    </div>
  );
};

export default PageIntro;
