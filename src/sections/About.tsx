import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaHeart, FaGamepad } from "react-icons/fa";

const About = () => {
  const interests = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-500" />,
      title: "Education",
      description: "Computer Science Student"
    },
    {
      icon: <FaLaptopCode className="text-3xl text-blue-500" />,
      title: "Programming",
      description: "Full Stack Development"
    },
    {
      icon: <FaHeart className="text-3xl text-blue-500" />,
      title: "Passion",
      description: "Creating Innovative Solutions"
    },
    {
      icon: <FaGamepad className="text-3xl text-blue-500" />,
      title: "Hobbies",
      description: "Gaming & Tech Exploration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/your-profile-image.jpg"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                Your Name
              </h3>
              <p className="text-blue-500 text-center mb-4">Full Stack Developer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">My Story</h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate developer with a strong foundation in web development
                and a keen interest in creating user-friendly applications. With
                experience in both frontend and backend technologies, I strive to
                build efficient and scalable solutions.
              </p>
              <p className="text-gray-600">
                My journey in technology started when [your story here]. Since then,
                I've been constantly learning and improving my skills in various
                technologies and frameworks.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;