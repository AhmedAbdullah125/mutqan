import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';
import ArticleCard from './ArticleCard';
import { articles } from './Data';

const LatestArticles = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useTheme();
  const isRTL = i18n.language === 'ar';

  const [articleDisplay, setArticleDisplay] = useState({
    count: 0,
    maxCount: 0,
    step: 0
  });

  useEffect(() => {
    updateDisplayCounts();
    window.addEventListener('resize', updateDisplayCounts);
    return () => window.removeEventListener('resize', updateDisplayCounts);
  }, []);

  const updateDisplayCounts = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setArticleDisplay({ count: 3, maxCount: 6, step: 3 });
    } else if (width >= 768) {
      setArticleDisplay({ count: 2, maxCount: 6, step: 2 });
    } else {
      setArticleDisplay({ count: 1, maxCount: 3, step: 2 });
    }
  };

  const loadMore = () => {
    setArticleDisplay(prev => ({
      ...prev,
      count: Math.min(prev.count + prev.step, prev.maxCount)
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`relative py-20 overflow-hidden font-cairo ${
      isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="relative container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('latestArticles.title')}
          </h2>

          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              className={`h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-6`}
            />
          </div>

          <p className={`${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          } text-lg max-w-2xl mx-auto leading-relaxed`}>
            {t('latestArticles.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isRTL ? 'direction-rtl' : ''
          }`}
        >
          <AnimatePresence mode="wait">
            {articles.slice(0, articleDisplay.count).map((article, index) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                layout
                className="h-full"
              >
                <ArticleCard {...article} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center space-y-6">
          {articleDisplay.count < articleDisplay.maxCount ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className={`px-8 py-3 rounded-lg font-medium
                ${isDarkMode 
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500'
                  : 'bg-gradient-to-r from-emerald-600 to-blue-600'
                } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {t('latestArticles.loadMore')}
            </motion.button>
          ) : (
            <Link
              to="/blog"
              className={`inline-flex items-center gap-3 px-8 py-3 rounded-lg font-medium
                ${isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-50'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <span>{t('latestArticles.viewAll')}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
