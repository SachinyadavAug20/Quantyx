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

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-5 grid-rows-3 gap-1 md:gap-2 w-5/6 mx-auto">
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-2 md:px-2 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1">Shift</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-0.5 md:px-1 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ">Alpha</motion.button>
                </div>
                <div className="flex">
                    <div>

                        <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { if (editable) setCursorPosition(Math.max(0, cursorPosition - 1)) }} type="button" className={`bg-sky-600 text-white cursor-pointer px-1.5 md:px-1.5 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-600 text-gray-600 cursor-not-allowed'}`}>{`<`}</motion.button>
                        <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { if (editable) setCursorPosition(Math.min(screentext.length, cursorPosition + 1)) }} type="button" className={`bg-sky-600 text-white cursor-pointer px-1.5 md:px-1.5 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-600 text-gray-600 cursor-not-allowed'}`}>{`>`}</motion.button>
                    </div>

                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-1 text-xl md:px-1 md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ">Mode</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-3.5 text-xl md:px-4 md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ">ON</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('sin(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-4 md:px-4.5 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1">sin</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('cos(') : "" }} type="button" className={`bg-purple-600 text-white cursor-pointer px-3 md:px-3.5 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>cos</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('tan(') : "" }} type="button" className={`bg-purple-600 text-white cursor-pointer px-3.5 md:px-3.5 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>tan</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('log(') : "" }} type="button" className={`bg-purple-600 text-white cursor-pointer px-3.5 md:px-4 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>log</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('ln(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-4.5 md:px-5.5 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1">ln</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor(' deg') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-3 md:px-4 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>deg</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor(' rad') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-3 md:px-4 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>rad</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('pi') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-5 md:px-6 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>π</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('sqrt(') : "" }} type="button" className={`bg-orange-600 text-white cursor-pointer px-5 md:px-6 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1 ${editable ? '' : 'bg-gray-500 text-gray-600 cursor-not-allowed'}`}>√</motion.button>
                </div>
                <div>
                    <motion.button variants={itemVariants} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('^') : "" }} type="button" className="bg-orange-600 text-white cursor-pointer px-5.5 md:px-6 text-xl md:text-xl py-1 border-2 border-slate-100 rounded-xl mx-0 md:mx-0.5 border-b-[6px] my-0 md:my-1">^</motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Ctnpanal
