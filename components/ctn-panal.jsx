"use client"
import { motion } from "motion/react"

const Ctnpanal = ({ editable, screentext, setScreentext, cursorPosition, setCursorPosition, insertAtCursor }) => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.03
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 0.89, transition: { duration: 0.4, type: "spring", ease: "easeOut" } }
    };

    return (
        <div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-5  grid-rows-3 gap-1 md:gap-2 w-full">
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-1 md:px-1.5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2">Shift</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-0.5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ">Alpha</motion.button>
                </div>
                <div className="flex">
                    <div>

                        <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { if (editable) setCursorPosition(Math.max(0, cursorPosition - 1)) }} type="button" className={`bg-sky-600 text-white cursor-pointer px-1 md:px-1.5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-600 text-gray-600 cursor-not-allowed'}`}>{`<`}</motion.button>
                        <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { if (editable) setCursorPosition(Math.min(screentext.length, cursorPosition + 1)) }} type="button" className={`bg-sky-600 text-white cursor-pointer px-1 md:px-1.5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-600 text-gray-600 cursor-not-allowed'}`}>{`>`}</motion.button>
                    </div>

                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-0 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ">Mode</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-2.5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ">ON</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('sin(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-4 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2">sin</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('cos(') : "" }} type="button" className={`bg-purple-600 text-white cursor-pointer px-2 md:px-3 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>cos</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('tan(') : "" }} type="button" className={`bg-purple-600 text-white cursor-pointer px-2 md:px-3 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>tan</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('log(') : "" }} type="button" className={`bg-purple-600 text-white cursor-pointer px-2 md:px-3 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>log</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('ln(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-4 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2">ln</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor(' deg') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-2.5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>deg</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor(' rad') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-2 md:px-3.5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>rad</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('pi') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-4 md:px-6 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>π</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('sqrt(') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-3 md:px-5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>√</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('^') : "" }} type="button" className="bg-orange-600 text-white cursor-pointer px-3 md:px-5 text-sm md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0.5 md:mx-1 border-b-[6px] my-1 md:my-2">^</motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Ctnpanal
