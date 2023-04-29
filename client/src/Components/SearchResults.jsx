import React from 'react'




const SearchResults = (props) => {
    const data = props.data.result;
    console.log(data)
  return (
    // <div className="my-10 flex gap-5 justify-between flex-wrap group">
    //   {Object.entries(data).map(([title, crops]) => (
    //     <Card key={title} title={title} crops={crops} />
    //   ))}
    // </div>
    <table className="w-full text-left table-collapse rounded-2xl">
      <thead className='rounded-2xl'>
        <tr>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">S.No</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Search Results</th>
          <th className="text-lg font-Merriweather bg-blue-300 p-2">Score Value</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Document Ranking</th>
        </tr>
      </thead>
      <tbody className='rounded'>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-300'}>
            <td className="p-2 border-t border-gray font-mono text-sm text-black whitespace-no-wrap"><p>{index+1}</p></td>
            <td className="p-2 border-t border-gray font-mono text-sm text-black whitespace-no-wrap"><p>{row.result}</p></td>
            <td className="p-2 border-t border-gray font-mono text-sm text-black whitespace-no-wrap"><p>{row.score}</p></td>
            <td className="p-2 border-t border-gray font-mono text-sm text-black whitespace-no-wrap"><p>{"Rank - "+(index+1)}</p></td>
    
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SearchResults