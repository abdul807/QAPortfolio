import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Testimonials } from '../components/Testimonials';
import { useHomeData } from '../hooks/useHomeData';

export default function HomePage() {
  const { hero, skills, featuredProjects, testimonials } = useHomeData();

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      <Hero data={hero} />
      <Skills skills={skills} />
      <FeaturedProjects projects={featuredProjects} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}