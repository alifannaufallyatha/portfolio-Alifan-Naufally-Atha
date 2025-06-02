import { motion } from "framer-motion";
import { experiences } from '../data/Experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="md:w-1/3">
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.date}</p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2">
                  {exp.position}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.company}
                  {exp.location && (
                    <span className="block text-sm">{exp.location}</span>
                  )}
                </p>
              </div>

              <div className="md:w-2/3">
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;