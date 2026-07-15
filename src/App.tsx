import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
const AboutPage = lazy(() => import('@/features/about/pages/AboutPage'));
const ProjectsPage = lazy(() => import('@/features/projects/pages/ProjectsPage'));
const ContactPage = lazy(() => import('@/features/contact/pages/ContactPage'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;