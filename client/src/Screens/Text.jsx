import axios from "axios";
import React, { useState,useReducer } from "react";
import Loading from "../Components/Loading";
import SearchResults from "../Components/SearchResults";
import Synonym from "../Components/Synonym";
import NER from "../Components/NER";

const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload }
      default:
        return state
    }
  }
const Text = () => {
  const [text, setText] = useState("");
  const [num,setNum] = useState(5);
  const [state, dispatch] = useReducer(dataReducer, { data: null })
  const [load,setLoad] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNumChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmitClick = (e) =>{
    e.preventDefault();
     setLoad(true)
    axios.post('http://127.0.0.1:5000//api/search',{"query":text,"numResults":num})
        .then((response) => {
          dispatch({ type: 'SET_DATA', payload: response.data });
          console.log(response.data)
          setLoad(false)
        })
        .catch((error) => console.error("san: "+error))
  }

  return (
    
    <div className="w-full max-w-3xl mx-auto my-10 px-5 ">
    <h2 className="text-xl md:text-4xl mb-5">Semantic Search - Text</h2>
        <h4 className="font-Inria text-2xl">Search: </h4>
        <input 
         className="w-full h-10 p-4 border rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search here..."
        value={text}
        onChange={handleTextChange}
        required
         />
         <div className="flex flex-row space-x-4 mt-10">
         <h4 className="font-Inria text-2xl">No of Documents: </h4>
         <input value={num} onChange={handleNumChange} className="font-Inria text-2xl border rounded-lg shadow-sm w-10 bg-center" />
         </div>
     
      {
        load? <Loading />:(<></>)
      }
      {
        state.data ? (<>
            <h4 className="font-Inria text-2xl my-5">Search Results: </h4>
            <div><SearchResults data={state.data} /></div>

            <h4 className="font-Inria text-2xl my-5">Named Entity Recognition: </h4>
            <div><NER data={state.data} /></div>

            <h4 className="font-Inria text-2xl my-5">Synonym Expansion from WordNet: </h4>
            <div><Synonym data={state.data} /></div>
            </>):(<div></div>)
      }
      
      <div className='flex justify-center items-center my-10'>
        <button type="submit" onClick={handleSubmitClick} className='border-4 rounded-lg text-white bg-teal-600 p-2' ><h4 className='text-2xl font-Inria text-white'>Search Query</h4></button>
      </div>
    </div>

  );
};

export default Text;
