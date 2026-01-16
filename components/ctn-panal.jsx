"use client"
import { motion } from "motion/react"

const Ctnpanal = ({ editable, screentext, setScreentext, cursorPosition, setCursorPosition, insertAtCursor }) => {
    return (
        <div className="grid grid-cols-6 grid-rows-3">
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-1.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">Shift</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-0.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">Alpha</motion.button>
            </div>
            <div className="flex">

                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { if (editable) setCursorPosition(Math.max(0, cursorPosition - 1)) }} type="button" className="bg-sky-600 text-white cursor-pointer px-1.25 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">{`<`}</motion.button>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { if (editable) setCursorPosition(Math.min(screentext.length, cursorPosition + 1)) }} type="button" className="bg-sky-600 text-white cursor-pointer px-1.25 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">{`>`}</motion.button>

            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-0 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">Mode</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-2.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">ON</motion.button>
            </div>
            <div></div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('sin(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-3 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">sin</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('cos(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-3 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">cos</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('tan(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-3 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">tan</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('log(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-3 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">log</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('ln(') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-4 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">ln</motion.button>
            </div>
            <div></div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor(' deg') : "" }} type="button" className="bg-orange-600 text-white cursor-pointer px-2.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">deg</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor(' rad') : "" }} type="button" className="bg-orange-600 text-white cursor-pointer px-3.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">rad</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('pi') : "" }} type="button" className="bg-orange-600 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">π</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('sqrt(') : "" }} type="button" className="bg-orange-600 text-white cursor-pointer px-5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">√</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? insertAtCursor('^') : "" }} type="button" className="bg-orange-600 text-white cursor-pointer px-5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2">^</motion.button>
            </div>
        </div>
    )
}

export default Ctnpanal
