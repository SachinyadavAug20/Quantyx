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
            setEditable(false);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white/21 p-2 pt-1 md:p-8 md:pt-4 w-fit border-white/60 border-4">
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center font-bold text-slate-200 uppercase">
                    Calculator
                </motion.div>
                <div>
                    <motion.div initial={{ opacity: 0, scale: 25 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="select-none bg-sky-200 border-sky-600 rounded-xl px-2 md:px-1 w-full py-3 md:py-1 text-xl md:text-2xl m-1 md:m-0.5 font-mono text-left min-h-12 md:min-h-8 flex items-center">
                        {screentext.slice(0, cursorPosition)}
                        <span className="animate-pulse text-black">|</span>
                        {screentext.slice(cursorPosition)}
                    </motion.div>
                </div>
                <div>
                    <div className="NUMPAD flex flex-col gap-2 md:gap-4">
                        <Ctnpanal screentext={screentext} setScreentext={setScreentext} cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} editable={editable} insertAtCursor={insertAtCursor} />
                        <div className="flex gap-1 md:gap-2 justify-center">
                            <Numpad setScreentext={setScreentext} editable={editable} cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} screentext={screentext} solve={solve} insertAtCursor={insertAtCursor} />
                            <Sidefn setScreentext={setScreentext} editable={editable} screentext={screentext} setEditable={setEditable} cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} insertAtCursor={insertAtCursor} deleteAtCursor={deleteAtCursor} clearAll={clearAll} solve={solve} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
