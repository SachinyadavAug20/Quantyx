"use client"
import { motion } from "motion/react"

const Numpad = ({ editable,setScreentext, screentext,solve }) => {
    return (
        <div className="grid grid-cols-3 grid-rows-4">
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '1'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">1</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '2'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">2</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '3'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">3</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '4'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">4</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '5'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">5</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '6'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">6</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '7'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">7</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '8'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">8</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '9'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">9</motion.button>
            </div>
            <div>

                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '0'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">0</motion.button>
            </div>
            <div>

                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => { editable?setScreentext(screentext + '.'):"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 ">.</motion.button>
            </div>
            <div>
                <motion.button initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.89 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2, type: "spring", ease: "easeOut" }} whileTap={{ scale: 1.15, opacity: 1 }} onClick={() => {editable? solve():"" }} type="button" className="bg-slate-400 text-white cursor-pointer px-6 text-xl py-1 border-2 border-slate-100 rounded-xl mx-1 border-b-[6px] my-2 "> =</motion.button>
            </div>
        </div>

    )
}

export default Numpad
