import { motion, AnimatePresence } from "framer-motion";

export default function Modal(props) {
  function handleClick(e) {
    e.stopPropagation();
  }
  return (
    <AnimatePresence>
      {props.open && 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          onClick={props.close}
          className="fixed z-50 flex items-center justify-center bg-black/95 w-screen h-screen left-0 top-0"
        >
          <motion.div
            onClick={handleClick}
            className="bg-slate-200 rounded-lg py-5 px-3"
          >
            {props.children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
}
