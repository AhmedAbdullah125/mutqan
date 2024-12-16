import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Context/ThemeContext'; // استيراد الثيم
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faEnvelope, 
  faEdit, 
  faPhone, 
  faComments 
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const { isDarkMode } = useTheme(); // استخدام الثيم
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        setTimeout(() => setFormStatus(null), 5000);
    };

    return (
        <section
            id="contact"
            className={`py-10 font-tajawal relative overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        >
            <div
                className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black opacity-40' : 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 opacity-40'}`}
            />
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-transparent via-emerald-500/20 to-transparent rotate-30 blur-3xl animate-pulse-slow' : 'bg-gradient-to-t from-transparent via-blue-500/20 to-transparent rotate-10 blur-3xl animate-pulse-slower'}`} />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-transparent via-blue-500/20 to-transparent -rotate-50 blur-3xl animate-pulse-slower' : 'bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent -rotate-50 blur-3xl animate-pulse-slower'}`} />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* العنوان */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        {t("contact.title")}
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
                    <p className={`text-gray-400 mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t("contact.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center">
                    {/* معلومات التواصل */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        <h3 className={`text-2xl font-semibold text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {t("contact.subtitle")}
                        </h3>
                        <ul className="space-y-6 text-center">
                            <li className="flex items-center justify-center gap-4">
                                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-emerald-500/20 text-emerald-500' : 'bg-indigo-500/20 text-indigo-500'}`}>
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-black-900'}>
                                    +966 123 456 789
                                </span>
                            </li>
                            <li className="flex items-center justify-center gap-4">
                                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-yellow-500/20 text-yellow-500' : 'bg-orange-500/20 text-orange-500'}`}>
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-black-900'}>contact@next-level.com</span>
                            </li>
                            <li className="flex items-center justify-center gap-4">
                                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-cyan-500/20 text-cyan-500' : 'bg-teal-500/20 text-teal-500'}`}>
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-black-900'}>{t("contact.location")}</span>
                            </li>
                        </ul>
                        <div className="flex justify-center gap-4">
                            {[
                                { Icon: Facebook, color: isDarkMode ? 'text-blue-400' : 'text-blue-400' },
                                { Icon: Instagram, color: isDarkMode ? 'text-pink-500' : 'text-pink-600' },
                                { Icon: Twitter, color: isDarkMode ? 'text-cyan-400' : 'text-cyan-500' }
                            ].map(({ Icon, color }, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`p-3 rounded-full bg-gray-800 ${color} transition-colors duration-300`}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* استمارة التواصل */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`lg:col-span-2 ${
                            isDarkMode ? 'bg-gray-950' : 'bg-white'
                        } p-6 rounded-xl border border-gray-800 shadow-lg space-y-6`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* الاسم بالكامل */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {t("contact.name")}
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        placeholder={t("contact.namePlaceholder")}
                                        className={`w-full bg-transparent text-gray-300 px-4 py-2 border rounded-lg focus:ring focus:ring-emerald-500 focus:outline-none ${
                                            isDarkMode ? 'border-gray-700 placeholder-gray-500' : 'border-gray-400 placeholder-gray-400'
                                        }`}
                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                            </div>

                            {/* البريد الإلكتروني */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {t("contact.email")}
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        placeholder={t("contact.emailPlaceholder")}
                                        className={`w-full bg-transparent text-gray-300 px-4 py-2 border rounded-lg focus:ring focus:ring-emerald-500 focus:outline-none ${
                                            isDarkMode ? 'border-gray-700 placeholder-gray-500' : 'border-gray-400 placeholder-gray-400'
                                        }`}
                                    />
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* رقم الهاتف */}
                        <div>
                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {t("contact.phone")}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    placeholder={t("contact.phonePlaceholder")}
                                    className={`w-full bg-transparent text-gray-300 px-4 py-2 border rounded-lg focus:ring focus:ring-emerald-500 focus:outline-none ${
                                        isDarkMode ? 'border-gray-700 placeholder-gray-500' : 'border-gray-400 placeholder-gray-400'
                                    }`}
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                            </div>
                        </div>

                        {/* بماذا نستطيع مساعدتك */}
                        <div>
                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {t("contact.subject")}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    placeholder={t("contact.subjectPlaceholder")}
                                    className={`w-full bg-transparent text-gray-300 px-4 py-2 border rounded-lg focus:ring focus:ring-emerald-500 focus:outline-none ${
                                        isDarkMode ? 'border-gray-700 placeholder-gray-500' : 'border-gray-400 placeholder-gray-400'
                                    }`}
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    <i className="fas fa-edit"></i>
                                </span>
                            </div>
                        </div>

                        {/* متطلبات العمل */}
                        <div>
                            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {t("contact.details")}
                            </label>
                            <textarea
                                required
                                rows="4"
                                placeholder={t("contact.detailsPlaceholder")}
                                className={`w-full bg-transparent text-gray-300 px-4 py-2 border rounded-lg focus:ring focus:ring-emerald-500 focus:outline-none ${
                                    isDarkMode ? 'border-gray-700 placeholder-gray-500' : 'border-gray-400 placeholder-gray-400'
                                }`}
                            ></textarea>
                        </div>

                        {/* زر الإرسال */}
                        <button
                            type="submit"
                            className={`w-full py-3 rounded-lg font-medium transition ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-emerald-500 to-yellow-500 text-white'
                                    : 'bg-gradient-to-r from-emerald-400 to-orange-400 text-black'
                            } hover:opacity-90`}
                        >
                            {t("contact.sendMessage")}
                        </button>

                        {/* رسالة الحالة */}
                        {formStatus && (
                            <p className={`text-center ${formStatus === 'success' ? 'text-emerald-500' : 'text-red-500'}`}>
                                {t(`contact.${formStatus}Message`)}
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
