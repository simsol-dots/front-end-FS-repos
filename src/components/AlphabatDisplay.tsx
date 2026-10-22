'use client'
import { useState } from "react"


export default function AlphabatDisplay() {

    const [latter , setLatter] = useState('default');


    return (

    
        <div>
            <section>
            <h1 className="text-black">{latter}</h1>
        </section>
            <button className="border p-2 m-2 text-black" onClick={() => setLatter(latter + 'A')}>A</button>
            <button className="border p-2 m-2 text-black" onClick={() => setLatter(latter + 'B')}>B</button>
            <button className="border p-2 m-2 text-black" onClick={() => setLatter(latter + 'C')}>C</button>
            <button className="border p-2 m-2 text-black" onClick={() => setLatter(latter + 'D')}>D</button>
            <button className="border p-2 m-2 text-black" onClick={() => setLatter(latter + 'E')}>E</button>
            <button className="border p-2 m-2 text-black" onClick={() => setLatter(latter + 'F')}>F</button>
        </div>
    )
}