import Button from "./components/Buttons"
import { useState } from "react"

function App() {
  // const arr = ["red", "blue", "green", "yellow", "orange",]

  const [color, setColor] = useState("Olive")

  return (
      <div className="bg-white mb-80 " style={{backgroundColor: color, width:"1500px", height:"600px"}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
{/*           
          <Button col="red"/>
          <Button col="green"/>
          <Button col="blue"/>
          <Button col="olive"/>
          <Button col="pink"/>
          <Button col="purple"/>
          <Button col="lime"/>
*/}

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("red")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "red"}}>
            Red
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("green")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "green"}}>
            green
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("blue")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "blue"}}>
            blue
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("olive")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "olive"}}>
            olive
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("yellow")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "yellow"}}>
            yellow
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("lime")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "lime"}}>
            lime
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("pink")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "pink"}}>
            pink
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("purple")}} className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: "purple"}}>
            purple
            </button>
          </div>



        </div>
      </div>
  )
}

export default App
