"use client"
import { motion } from "motion/react"

const Ctnpanal = ({ editable, screentext, setScreentext }) => {
    return (
        <div className="grid grid-cols-5 grid-rows-1">
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-1.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">Shift</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-0.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">Alpha</motion.button>
            </div>
            <div>

                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-sky-600 text-white cursor-pointer px-1.25 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">{`<`}</motion.button>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-sky-600 text-white cursor-pointer px-1.25 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">{`>`}</motion.button>

            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-0 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">Mode</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable ? setScreentext(screentext + '0') : "" }} type="button" className="bg-purple-600 text-white cursor-pointer px-2.5 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">ON</motion.button>
            </div>
        </div>
    )
}

export default Ctnpanal
