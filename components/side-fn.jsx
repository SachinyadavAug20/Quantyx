"use client"
import { motion } from "motion/react"
const Sidefn = ({ editable, setScreentext, screentext, setEditable, insertAtCursor, deleteAtCursor, clearAll, solve }) => {
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
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 grid-rows-4 gap-1 md:gap-2 w-fit">
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? deleteAtCursor() : "" }} type="button" className={`bg-green-500 text-white cursor-pointer px-4 md:px-6 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-0.5 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>DEL</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { clearAll() }} type="button" className="bg-green-500 text-white cursor-pointer px-4 md:px-6 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-0.5 ">AC</motion.button>
            </div>

            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('*'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-6 md:px-8 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>x</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('/'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-6 md:px-8 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>/</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('+'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-6 md:px-8 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>+</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('-'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-6 md:px-8 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>-</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('('):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-6 md:px-8 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}>(</motion.button>
            </div>
            <div className="flex justify-center items-center">
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor(')'):"" }} type="button" className={`bg-slate-400 text-white cursor-pointer px-6 md:px-8 text-xl md:text-xl py-1 md:py-1 w-full h-full border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}> )</motion.button>
            </div>


        </motion.div>
    )
}

export default Sidefn
