import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaHeart, FaGamepad, FaFileDownload } from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interests = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-500 dark:text-blue-400" />,
      title: "Education",
      description: "S-1 Informatics Graduate"
    },
    {
      icon: <FaLaptopCode className="text-3xl text-blue-500 dark:text-blue-400" />,
      title: "Programming",
      description: "Web Development & Web Design"
    },
    {
      icon: <FaHeart className="text-3xl text-blue-500 dark:text-blue-400" />,
      title: "Passion",
      description: "Creating Innovative Solutions"
    },
    {
      icon: <FaGamepad className="text-3xl text-blue-500 dark:text-blue-400" />,
      title: "Hobbies",
      description: "Gaming & Tech Exploration"
    }
  ];

  const handleShowCV = () => {
    setIsLoading(true);
    if (window.innerWidth < 768) {
      window.open('/assets/image/cv.png', '_blank');
    } else {
      setIsModalOpen(true);
    }
    setIsLoading(false);
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="/assets/image/profile-alifan.jpg"
                alt="Profile"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
                Alifan Naufally Atha
              </h3>
              <p className="text-blue-500 dark:text-blue-400 text-center mb-4">
                Website Development & Web Design
              </p>
              <div className="text-center">
                <button
                  onClick={handleShowCV}
                  disabled={isLoading}
                  className="inline-flex items-center px-6 py-2 bg-blue-500 text-white rounded-full 
                    hover:bg-blue-600 transition-colors duration-300 space-x-2 disabled:opacity-50"
                >
                  <FaFileDownload className="mr-2" />
                  <span>{isLoading ? 'Loading...' : 'Show CV'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Story</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                Saya merupakan lulusan Sarjana S1 Informatika yang memiliki ketertarikan dan pengalaman 
                di bidang pengembangan perangkat lunak. Selama enam bulan, saya bekerja sebagai Frontend 
                Developer, di mana saya terlibat dalam pengembangan antarmuka pengguna untuk aplikasi 
                berbasis web. Selain itu, saya juga pernah menjalani magang selama satu bulan di Dinas 
                Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) Aceh, yang memperluas wawasan 
                saya terhadap penerapan teknologi di sektor pemerintahan.
                Saya terbiasa menggunakan Microsoft Word dan Excel untuk kebutuhan dokumentasi dan 
                pengolahan data, serta memiliki kemauan belajar yang tinggi untuk terus meningkatkan 
                kemampuan saya di bidang teknologi informasi.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {interests.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CV Modal for Desktop */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden md:flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
            <img 
              src="/assets/image/cv.png" 
              alt="CV" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;