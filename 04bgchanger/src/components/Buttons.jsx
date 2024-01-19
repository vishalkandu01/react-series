import React from 'react'

function Buttons({col}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 rounded-full py-1 text-white shadow-lg" style={{backgroundColor: col}}>
            {col}
        </button>
    </div>
  )
}

export default Buttons