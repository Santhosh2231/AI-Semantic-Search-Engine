import React from 'react'

const SearchResults = (props) => {
    const data = props.data.ner;
    console.log(data)
  return (
    <table className="w-full text-left table-collapse rounded-2xl">
      <thead className='rounded-2xl'>
        <tr>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">S.No</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Word</th>
          <th className="text-lg font-Merriweather bg-blue-300 p-2">Entity</th>
        </tr>
      </thead>
      <tbody className='rounded'>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-300'}>
            <td className="p-2 border-t border-gray font-mono text-sm text-black whitespace-no-wrap"><p>{index+1}</p></td>
            <td className="p-2 border-t border-gray font-mono text-sm text-black whitespace-no-wrap"><p>{row.word}</p></td>
            <td className="p-2 border-t border-gray font-mono text-sm text-black whitespace-no-wrap"><p>{row.entity}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SearchResults