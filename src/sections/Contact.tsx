import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
const socialLinks = [
    {
        id: 1,
        icon: <FaLinkedin className="text-3xl" />,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alifan-naufally-atha-422411279/",
        color: "hover:bg-blue-600",
    },
    {
        id: 2,
        icon: <FaGithub className="text-3xl" />,
        name: "GitHub",
        url: "https://github.com/alifannaufallyatha",
        color: "hover:bg-gray-800",
    },
    {
        id: 3,
        icon: <FaEnvelope className="text-3xl" />,
        name: "Email",
        url: "mailto:athaalifan@gmail.com",
        color: "hover:bg-red-600",
    },
    {
        id: 4,
        icon: <FaWhatsapp className="text-3xl" />,
        name: "WhatsApp",
        url: "https://wa.me/082272120075",
        color: "hover:bg-green-600",
    },
];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Feel free to connect with me on social media or send me an email. 
            I'm always open to discussing new projects and opportunities!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center justify-center p-6 rounded-lg 
                bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all 
                ${link.color} hover:text-white group`}
            >
              <div className="transition-colors duration-300 text-gray-800 dark:text-white group-hover:text-white">
                {link.icon}
              </div>
              <span className="mt-2 font-medium text-gray-800 dark:text-white group-hover:text-white">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Currently available for freelance projects and collaborations
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;