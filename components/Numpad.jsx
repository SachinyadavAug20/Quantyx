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
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-3 grid-rows-4">
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('1'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">1</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('2'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">2</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('3'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">3</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('4'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">4</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('5'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">5</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('6'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">6</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('7'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">7</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('8'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">8</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('9'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">9</motion.button>
            </div>
            <div>

                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('0'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">0</motion.button>
            </div>
            <div>

                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?insertAtCursor('.'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">.</motion.button>
            </div>
            <div>
                <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration:0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => {editable? solve():"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2"> =</motion.button>
            </div>
        </motion.div>

    )
}

export default Numpad
