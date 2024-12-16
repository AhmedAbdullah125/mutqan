import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';

const ArticleCard = ({ title, excerpt, date, readTime, slug, thumbnail, index, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-6 rounded-xl backdrop-blur-xl border font-cairo ${
        isDarkMode ? 'border-white/10' : 'border-black/5'
      } overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300`}
    >
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        className={`absolute inset-0 bg-gradient-to-br ${
          isDarkMode 
            ? 'from-emerald-500/20 via-transparent to-yellow-500/20'
            : 'from-emerald-200/30 via-transparent to-yellow-200/30'
        } blur-xl`}
      />

      <Link to={`/blog/${slug}`} className="relative z-10 block">
        <div className="relative mb-6 overflow-hidden rounded-lg group-hover:shadow-lg transition-shadow duration-300">
          <img 
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-sm ${
              isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'
            } backdrop-blur-sm`}>
              {category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              {date}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              {readTime}
            </span>
          </div>
        </div>

        <h3 className={`text-xl font-bold mb-3 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
          isDarkMode 
            ? 'from-emerald-400 to-yellow-400'
            : 'from-emerald-600 to-yellow-600'
        } transition-all duration-300`}>
          {title}
        </h3>

        <p className={`${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        } leading-relaxed mb-4`}>
          {excerpt}
        </p>

        <div className="flex items-center text-sm font-medium">
          <span className={`${
            isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
          } group-hover:translate-x-1 transition-transform`}>
            اقرأ المزيد
          </span>
          <ArrowRight className="w-4 h-4 mr-1" />
        </div>
      </Link>
    </motion.article>
  );
};

export default ArticleCard;
