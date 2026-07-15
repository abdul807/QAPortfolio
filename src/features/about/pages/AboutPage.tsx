import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Certificates } from '../components/Certificates';
import { useAboutData } from '../hooks/useAboutData';

export default function AboutPage() {
  const { experiences, education, certificates } = useAboutData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-lg text-[rgb(var(--foreground))]/60 max-w-2xl mx-auto">
            Learn more about my journey, experience, and what drives me to create
            exceptional digital experiences
          </p>
        </div>

        <div className="space-y-20">
          <Experience experiences={experiences} />
          <Education education={education} />
          <Certificates certificates={certificates} />
        </div>
      </div>
    </div>
  );
}