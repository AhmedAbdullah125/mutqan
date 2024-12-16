import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext'; // استخدام الثيم

const Testimonials = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  const testimonials = [
    { name: t('testimonials.ahmedName'), role: t('testimonials.ahmedRole'), text: t('testimonials.ahmedText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.sarahName'), role: t('testimonials.sarahRole'), text: t('testimonials.sarahText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.fahadName'), role: t('testimonials.fahadRole'), text: t('testimonials.fahadText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.nouraName'), role: t('testimonials.nouraRole'), text: t('testimonials.nouraText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.khaledName'), role: t('testimonials.khaledRole'), text: t('testimonials.khaledText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.mohamedName'), role: t('testimonials.mohamedRole'), text: t('testimonials.mohamedText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.monaName'), role: t('testimonials.monaRole'), text: t('testimonials.monaText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.laylaName'), role: t('testimonials.laylaRole'), text: t('testimonials.laylaText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.yasserName'), role: t('testimonials.yasserRole'), text: t('testimonials.yasserText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.aliName'), role: t('testimonials.aliRole'), text: t('testimonials.aliText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.zahraName'), role: t('testimonials.zahraRole'), text: t('testimonials.zahraText'), image: '/Public/assets/ahmed.jpg' },
    { name: t('testimonials.osmanName'), role: t('testimonials.osmanRole'), text: t('testimonials.osmanText'), image: '/Public/assets/ahmed.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const testimonialsToDisplay = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className={`py-10 relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      {/* تأثيرات الخلفية */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-black to-gray-800 opacity-30' : 'bg-gradient-to-br from-gray-200 to-gray-100 opacity-40'}`} />

      <div className="container mx-auto cairo px-4 relative">
        {/* العنوان */}
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {t('testimonials.title')}
          </motion.h2>
        
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            className={`h-1 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-500 via-blue-500 to-emerald-500'
                : 'from-emerald-400 via-blue-400 to-emerald-400'
            } mx-auto rounded-full mb-4`}
          />
          <p className={`mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{t('testimonials.description')}</p>
        </div>

        {/* عرض الآراء */}
        <div className="grid mb-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsToDisplay.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-xl shadow-lg text-center space-y-3 mt-8 align-middle hover:shadow-2xl hover:shadow-emerald-100/20  cursor-pointer  transition-transform transform hover:scale-105 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-800'} border-2`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto image-cover object-cover  rounded-full border-2 border-emerald-300 shadow-lg shadow-emerald-100/50 transition-transform transform hover:scale-105 overflow-hidden mt-[-50px]"
              />
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{testimonial.role}</p>
              <p className="mt-4 text-lg">
                <span className="text-emerald-500">“</span> {testimonial.text} <span className="text-emerald-500">”</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* نقاط التنقل */}
        <div className="absolute mt-4 left-1/2 transform -translate-x-1/2 flex gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              onClick={() => handleDotClick(index * 3)}  // Click for each block of 3 testimonials
              className={`w-2 h-2 rounded-full cursor-pointer ${currentIndex === index * 3 ? 'bg-emerald-400 ' : 'bg-gray-600'}`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
