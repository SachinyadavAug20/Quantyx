"use client"
import { useState } from "react";
import Numpad from "@/components/Numpad";
import Sidefn from "@/components/side-fn";
import * as math from 'mathjs';

export default function Home() {
    const [screentext, setScreentext] = useState("")
    const solve = () => {
        setScreentext(`${math.evaluate(screentext)}`)
    }
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <div>
                <input type="text" name="screen" value={screentext} onChange={() => { }} className="bg-sky-200 px-3 w-full py-2 m-1" />
            </div>
            <div>
                <div className="NUMPAD flex">
                    <Numpad setScreentext={setScreentext} screentext={screentext} solve={solve} />
                    <Sidefn setScreentext={setScreentext} screentext={screentext} />
                </div>
            </div>
        </div>
    );
}
