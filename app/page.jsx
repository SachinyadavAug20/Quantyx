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
    const [cursorpos,setCusrsorpos]=useState(0);
    const solve = () => {
        try {
            setScreentext(`${math.evaluate(screentext)}`)
        }
        catch (error) {
            setScreentext("Invalid")
            setEditable(false)
        }
    }
    return (
        <div className="flex  flex-col justify-center items-center w-full h-screen">
            <div className="bg-white/21 p-6 pt-2">
                <div className="text-center font-bold text-slate-200 uppercase">
                    Calculator
                </div>
                <div>
                    <motion.input initial={{ opacity: 0, scale: 3 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} type="text" name="screen" value={screentext} readOnly tabIndex={-1} onChange={() => { setScreentext("No typing"); setEditable(false) }} className="select-none bg-sky-200 px-3 w-full py-2 text-xl segmented8 m-1" ></motion.input>
                </div>
                <div>
                    <div className="NUMPAD flex flex-col">
                        <Ctnpanal screentext={screentext} setScreentext={setScreentext} editable={editable} />
                        <div className="flex">
                            <Numpad setScreentext={setScreentext} editable={editable} screentext={screentext} solve={solve} />
                            <Sidefn setScreentext={setScreentext} editable={editable} screentext={screentext} setEditable={setEditable} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
