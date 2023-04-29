import React from 'react'


const Card = (props)=>{
    const syn = props.val;
    return (
        <div className="min-w-[10rem] font-Inria md:min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1
      " >
        <h6 className='font-Inria text-blue-600 text-lg'>{syn}</h6>
        
      </div>
    )
}


const Synonym = (props) => {
    const data = props.data.syn
  return (
    <div className="my-10 flex gap-5 justify-between flex-wrap group">
      {data.slice(0,10).map((row,index) => (
        <Card key={index} val={row} />
      ))}
    </div>
  )
}

export default Synonym