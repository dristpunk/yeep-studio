import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const DescrPopup = ({ title, text }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="aspect-square h-1/2 flex justify-center 
            items-center text-ellipsis overflow-hidden flex-auto"
        >
            <motion.div layout className="w-3/4">
                <motion.h2
                    layout
                    className="font-black text-5xl font-sans text-center"
                >
                    {title}
                </motion.h2>
                {isHover && (
                    <motion.p
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-justify mt-4"
                    >
                        {text}
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
};

export default DescrPopup;
