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
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-2 grid-rows-4">
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? deleteAtCursor() : "" }} type="button" className="bg-green-500 text-white cursor-pointer px-2 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-1">DEL</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { clearAll() }} type="button" className="bg-green-500 text-white cursor-pointer px-3 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-1 ">AC</motion.button>
            </div>

            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('*'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">x</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('/'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">/</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('+'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">+</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('-'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">-</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('('):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">(</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor(')'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2"> )</motion.button>
            </div>


        </motion.div>
    )
}

export default Sidefn
