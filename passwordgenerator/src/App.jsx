import { useState,useCallback,useEffect,useRef } from "react"; 

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);
  const passwordGenerate = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()+~|[]?></-=";
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass+= str.charAt(char);
    }
     setPassword(pass);

  }, [length, numberAllowed, charAllowed,setPassword])

const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20); 
    window.navigator.clipboard.writeText(password);
}, [password])

useEffect(() => { passwordGenerate()}, [length, numberAllowed, charAllowed, passwordGenerate]);
  return (

    //   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    //       <h1 className='text-white text-center my-3'>Password generator</h1>
    //     <div className="flex shadow rounded-lg overflow-hidden mb-4">

    //             <input
    //             type="text"
    //             value={password}
    //             className="outline-none w-full py-1 px-3"
    //             placeholder="Password"
    //             readOnly
    //           ref={passwordRef}
    //         />

    //         <button
    //         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
    //         onClick={copyPasswordToClipBoard}
    //         >
    //           copy
    //         </button>
        
    //     </div>

    //            <div className='flex text-sm gap-x-2'>
    //               <div className='flex items-center gap-x-1'>
    //                 <input
    //                   type="range"
    //                   min="4"
    //                   max="30"
    //                   value={length}
    //                   className="cursor-pointer"
    //                   onChange={(e)=>{setLength(e.target.value)}}
    //                 />
    //                 <label>Length : {length}</label>
    //               </div>
    //                 <div className="flex items-center gap-x-1">
    //                     <input 
    //                         type="checkbox"
    //                         defaultChecked={numberAllowed}
    //                         onChange={()=>{setNumberAllowed((prev) => !prev)}}
                        
    //                     />
    //                     <label htmlFor="numberInput"> Number</label>
    //                 </div>
    //                 <div className="flex items-center gap-x-1">
    //                     <input
    //                         type="checkbox"
    //                         defaultChecked={charAllowed}
    //                         id="characterInput"
    //                         onChange={() => {
    //                             setCharAllowed((prev) => !prev )
    //                         }}
    //                     />
    //                     <label htmlFor="characterInput">Characters</label>
    //                 </div>
    //             </div>
    //  </div>

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-gray-100 font-[Poppins] px-4">
  <div className="w-full max-w-md bg-gradient-to-b from-slate-800 to-gray-900 rounded-2xl border border-slate-700 shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-8 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(59,130,246,0.25)]">
    
    {/* Title */}
    <h1 className="text-3xl font-semibold text-center text-blue-400 mb-6 tracking-wide">
      🔐 Password Generator
    </h1>

    {/* Password Box */}
    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-inner mb-6 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
      <input
        type="text"
        value={password}
        readOnly
        ref={passwordRef}
        className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-500 outline-none text-lg tracking-widest select-all"
        placeholder="Generate your password..."
      />
      <button
        onClick={copyPasswordToClipBoard}
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium px-5 py-3 transition-all duration-200 hover:scale-105"
      >
        Copy
      </button>
    </div>

    {/* Controls (range + checkboxes in one line) */}
    <div className="flex flex-wrap justify-between items-center gap-4 bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6 shadow-inner">
      <div className="flex items-center gap-3">
        <label className="text-sm text-gray-300">Length</label>
        <input
          type="range"
          min="4"
          max="30"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="cursor-pointer accent-blue-500"
        />
        <span className="text-blue-400 font-semibold">{length}</span>
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="accent-blue-500 w-5 h-5 transition-transform duration-200 hover:scale-110"
          />
          <span className="text-sm">Numbers</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-blue-500 w-5 h-5 transition-transform duration-200 hover:scale-110"
          />
          <span className="text-sm">Symbols</span>
        </label>
      </div>
    </div>

    {/* Generate Button */}
    <button
      onClick={passwordGenerate}
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-105"
    >
      ⚡ Generate Password
    </button>
  </div>
</div>

  );
}

export default App;
