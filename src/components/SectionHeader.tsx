interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <div className={`mb-14 md:mb-20 ${center ? "text-center" : ""}`}>
      {tag && (
        <span className="tag mb-4 inline-block">{tag}</span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
        {title.split("||").map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-gradient">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-lavender/60 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      <div className="glow-line max-w-24 mx-auto mt-8 opacity-60" />
    </div>
  );
}
