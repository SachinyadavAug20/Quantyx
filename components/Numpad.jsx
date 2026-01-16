"use client"
import { motion } from "motion/react"

const Numpad = ({ editable, setScreentext, screentext, solve, insertAtCursor }) => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 0.89, transition: { duration: 0.4, type: "spring", ease: "easeOut" } }
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-3 grid-rows-4 gap-1 md:gap-2 w-fit">
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('1'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>1</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('2'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>2</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('3'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>3</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('4'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>4</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('5'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>5</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('6'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>6</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('7'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>7</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('8'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>8</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('9'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>9</motion.button>
            </div>
            <div className="flex justify-center items-center">

                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('0'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>0</motion.button>
            </div>
            <div className="flex justify-center items-center">

                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('.'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>.</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => {editable? solve():"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-0.5 md:py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}> =</motion.button>
            </div>
        </motion.div>

    )
}

export default Numpad
