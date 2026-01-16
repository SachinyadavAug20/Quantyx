"use client"
import { useState } from "react";
import Numpad from "@/components/Numpad";
import Sidefn from "@/components/side-fn";
import * as math from 'mathjs';
import Ctnpanal from "@/components/ctn-panal";
import { motion } from "motion/react";

export default function Home() {
    const [screentext, setScreentext] = useState("")
    const [editable, setEditable] = useState(true)
    const [cursorPosition, setCursorPosition] = useState(0);

    const insertAtCursor = (char) => {
        if (!editable) return;
        const before = screentext.slice(0, cursorPosition);
        const after = screentext.slice(cursorPosition);
        setScreentext(before + char + after);
        setCursorPosition(cursorPosition + char.length);
    };

    const deleteAtCursor = () => {
        if (!editable || cursorPosition === 0) return;
        const before = screentext.slice(0, cursorPosition - 1);
        const after = screentext.slice(cursorPosition);
        setScreentext(before + after);
        setCursorPosition(cursorPosition - 1);
    };

    const clearAll = () => {
        setScreentext("");
        setCursorPosition(0);
        setEditable(true);
    };

    const solve = () => {
        try {
            const result = math.evaluate(screentext);
            setScreentext(result.toString());
            setCursorPosition(result.toString().length);
            setEditable(true);
        } catch (error) {
            setScreentext("Error");
            setCursorPosition(5);
            setEditable(true);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="bg-white/21 p-6 pt-2 border-white/60 border-4">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center font-bold text-slate-200 uppercase">
                    Calculator
                </motion.div>
                <div>
                    <motion.div initial={{ opacity: 0, scale: 25 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="select-none bg-sky-200 border-sky-600 rounded-xl px-3 w-full py-2 text-xl m-1 font-mono text-left min-h-[2.5rem] flex items-center">
                        {screentext.slice(0, cursorPosition)}
                        <span className="animate-pulse text-black">|</span>
                        {screentext.slice(cursorPosition)}
                    </motion.div>
                </div>
                <div>
                    <div className="NUMPAD flex flex-col  tems-center">
                        <div className="flex ">
                            <Ctnpanal screentext={screentext} setScreentext={setScreentext} cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} editable={editable} insertAtCursor={insertAtCursor} />
                        </div>
                        <div className="flex">
                            <Numpad setScreentext={setScreentext} editable={editable} cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} screentext={screentext} solve={solve} insertAtCursor={insertAtCursor} />
                            <Sidefn setScreentext={setScreentext} editable={editable} screentext={screentext} setEditable={setEditable} cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} insertAtCursor={insertAtCursor} deleteAtCursor={deleteAtCursor} clearAll={clearAll} solve={solve} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
