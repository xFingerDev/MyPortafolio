const TechBadge: React.FC<{ tech: string }> = ({ tech }) => {
  return (
    <span
      key={tech}
      className="px-3 py-1 text-sm bg-stone-700
      text-gray-300 rounded-full border border-stone-900 
      hover:border-stone-600 hover:shadow-md transition-all duration-300
      hover:scale-[1.02]"
    >
      {tech}
    </span>
  );
};

export { TechBadge };
