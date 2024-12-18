import React, { Suspense } from 'react';
import './i18n';
import './index.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // هذا يمنع Font Awesome من إضافة CSS بشكل تلقائي لأننا قد قمنا بإضافته يدويًا
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import { Header } from './components/1-header/Header';
import { Loading } from './components/shared/Loding';
import { useTheme } from './Context/ThemeContext';

// Lazy loading components for better performance
// Update the import path to match your file structure
const HeroSection = React.lazy(() => import('./components/2-hero/Hero'));
const Services = React.lazy(() => import('./components/3-services/Services'));
const WebService = React.lazy(() => import('./components/3-services/web/WebService'));
const MobileService = React.lazy(() => import('./components/3-services/mobile/MobileService'));
const CustomService = React.lazy(() => import('./components/3-services/custom/CustomService'));
const UIServices = React.lazy(() => import('./components/3-services/ui/UIServices'));
const AIService = React.lazy(() => import('./components/3-services/ai/AIService'));
const MarketingService = React.lazy(() => import('./components/3-services/marketing/MarketingService'));
const AllServicesPage = React.lazy(() => import('./components/3-services/AllservicesPage'));
const LatestWorks = React.lazy(() => import('./components/4-LatestWorks/LatestWorks'));
const Gallery = React.lazy(() => import('./components/4-LatestWorks/Gallery'));
const Steps = React.lazy(() => import('./components/5-steps/steps'));
const About = React.lazy(() => import('./components/6-about/About'));
const Testimonials = React.lazy(() => import('./components/7-Testimonials/Testimonials'));
const Contact = React.lazy(() => import('./components/8-Contact/Contact'));
const Footer = React.lazy(() => import('./components/9-Footer/Footer'));
const LatestArticles = React.lazy(() => import('./components/10-Blog/LatestArticles'));
const BlogPage = React.lazy(() => import('./components/10-Blog/BlogPage'));


function MainLayout() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`
      relative min-h-screen overflow-hidden
      transition-colors duration-300 ease-in-out
      ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}
    `}>
      <Header />
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <Services />
        <LatestWorks />
        <About />
        <Steps />
        <Testimonials />
        <LatestArticles />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Service Routes */}
            <Route path="/services/web" element={<WebService />} />
            <Route path="/services/mobile" element={<MobileService />} />
            <Route path="/services/custom" element={<CustomService />} />
            <Route path="/services/ui" element={<UIServices />} />
            <Route path="/services/ai" element={<AIService />} />
            <Route path="/services/marketing" element={<MarketingService />} />
            
            {/* All Services Page */}
            <Route path="/all-services" element={<AllServicesPage />} />

            <Route path="/latest-works"   element={<LatestWorks />} />
            
            {/* Gallery Route */}
            <Route path="/Gallery" element={<Gallery />} />

            {/* Blog Route */}
            <Route path="/blog" element={<BlogPage />} />

            
            {/* Main Route */}
            <Route path="/" element={<MainLayout />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}
