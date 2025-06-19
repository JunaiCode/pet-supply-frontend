type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="my-12">
      <h2 className="text-3xl text-center font-bold text-pink-600">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  );
}
