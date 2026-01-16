import React from "react";
import one from "../data/one.png" ; 
import two from '../data/two.png';
import three from '../data/three.png';



const Profiles = [
    { name: 'Developer ', image: one},
    { name: 'Interviewer ', image: two},
    { name: 'Designer', image: three}
]
const WhosWatching = ({onSelect}) => {

    return ( 
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white"> 
        <h1 className = 'text-5xl font-bold mb-12 '> Who's Watching?</h1>
        <div className="flex gap-10">
            {Profiles.map((p)=> {
                return( 
                <div key={p.name} onClick = {() => onSelect(p.name)} className="cursor-pointer group">
                  <div className="w-36 h-36 rounded-md overflow-hidden border-4 border-transparent group-hover:border-red-600 transition-all duration-300">
                    <img src = {p.image} 
                    alt = {p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    </div>
                    <p className="text-center text-xl mt-3 group-hover:text-red-600">{p.name}</p>
                     </div>
            )})}
        </div>
        <button className="mt-16 px-8 py-3 bg-red-600 text-white text-lg rounded hover:bg-red-700 transition-all"
        onClick = {()=> alert('Add Profile management Later')}>
           Manage Profiles
        </button>


        </div>
    )

}




export default WhosWatching;