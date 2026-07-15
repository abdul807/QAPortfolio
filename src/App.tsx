import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/features/home/pages/HomePage'));
const AboutPage = lazy(() => import('@/features/about/pages/AboutPage'));
const ProjectsPage = lazy(() => import('@/features/projects/pages/ProjectsPage'));
const ContactPage = lazy(() => import('@/features/contact/pages/ContactPage'));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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