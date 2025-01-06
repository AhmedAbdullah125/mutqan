import { Eye } from 'lucide-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';

const ProjectCard = ({ 
  id, // Add this prop
  title, 
  titleEn, 
  description, 
  descriptionEn, 
  image, 
  tech, 
  currentLang 
}) => {
  const { isDarkMode } = useTheme();
  const displayTitle = currentLang === 'ar' ? title : titleEn;
  const displayDescription = currentLang === 'ar' ? description : descriptionEn;
  const isArabic = currentLang === 'ar';

  return (
    <section 
      className={`group relative rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 h-full flex flex-col ${
        isDarkMode 
          ? 'bg-gray-900 border border-white/10' 
          : 'bg-white border border-gray-200'
      }`}
    >
      {/* Image and tech stack section remains the same */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={image}
          alt={displayTitle}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-1 left-0 right-0 flex justify-center">
          <div className="flex flex-wrap gap-1.5 px-3 justify-center">
            {tech.map((item) => (
              <span
                key={item}
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  isDarkMode
                    ? 'bg-black/60 text-blue-400 border border-blue-500/20'
                    : 'bg-white/80 text-blue-600 border border-blue-200'
                } backdrop-blur-sm`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 text-center flex-1 flex flex-col">
        <h3 
          className={`text-xl font-semibold mb-3 font-cairo ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-500 to-blue-400`}
        >
          {displayTitle}
        </h3>
        
        <p 
          className={`mb-4 flex-1 font-cairo ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {displayDescription}
        </p>

        <div className="mt-auto">
          <Link
            to={`/project/${id}`}
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <span className="font-cairo font-medium">
              {isArabic ? "المزيد" : "More"}
            </span>
            <Eye size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <div 
        className={`absolute inset-0 border rounded-xl transition-colors duration-300 pointer-events-none ${
          isDarkMode 
            ? 'border-white/10 group-hover:border-blue-500/50'
            : 'border-gray-200 group-hover:border-blue-400/50'
        }`} 
      />
    </section>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired, // Add this
  title: PropTypes.string.isRequired,
  titleEn: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionEn: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLang: PropTypes.string.isRequired
};

export default ProjectCard;
