'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export default function ToggleFAQ({ children, question }) {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <AnimatePresence>
      <motion.div
        className='w-full cursor-pointer pb-3 border-b border-[#E5E5E5] mb-5'
        onClick={handleToggle}
        layout
      >
        <motion.div className='flex justify-between items-center'>
          <motion.p
            className='text-sm md:text-lg font-medium text-[#2F4152]'
            layout
            transition={{ ease: 'easeOut', duration: 0.5 }}
          >
            {question}
          </motion.p>
          {toggle ? (
            <motion.div layout>
              <BsChevronUp className='text-xl md:text-2xl font-bold text-[#2F4152]' />
            </motion.div>
          ) : (
            <motion.div layout>
              <BsChevronDown className='text-xl md:text-2xl font-bold text-[#2F4152]' />
            </motion.div>
          )}
        </motion.div>
        {toggle && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
            layout
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
