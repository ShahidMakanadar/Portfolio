import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

const ProjectCard = ({ title, desc, imgUrl, liveUrl, codeUrl, tags }) => {
  return (
    <div className="rounded-lg bg-primary/30 w-full md:w-[500px] hover:shadow-[1px_1px_9px_5px] hover:shadow-[#f7ff8a] transition-all duration-500">
      <div className="relative aspect-[16/9] rounded-t-lg overflow-hidden object-cover mx-auto z-0">
        <img
          src={imgUrl}
          alt="StitchTalk"
          className="flex-shrink-0 object-contain hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-semibold pb-3">{title}</h1>
          <div className="flex gap-3 pr-2">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href={codeUrl} target="_blank">
                <BsGithub className="h-7 w-7" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href={liveUrl} target="_blank">
                <IoOpenOutline className="h-7 w-7" />
              </a>
            </motion.div>
          </div>
        </div>
        <h4 className="text-left ">{desc}</h4>
      </div>
      <div className="flex flex-wrap max-w-full gap-2 px-3 pb-3">
        {tags.map((tag) => (
          <motion.span
            initial={{
              rotate: -20,
              y: -10,
            }}
            whileInView={{
              rotate: 0,
              y: 0,
            }}
            transition={{
              type: "spring",
            }}
            viewport={{ once: true }}
            key={tag}
            className="bg-[#eaf63d5f] text-white rounded-md px-1"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// Add PropTypes declaration
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  codeUrl: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;