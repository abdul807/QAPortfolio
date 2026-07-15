interface ProjectFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-gold to-accent text-white shadow-lg shadow-gold/20'
              : 'glass-card hover:bg-gold/10 text-[rgb(var(--foreground))]'
          }`}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}