import React from 'react'
import { specialityData } from '../assets/assets' 
import { Link } from 'react-router-dom'

function SpecialityMenu() {
  return (
    <div className='flex flex-col item-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3x1 font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>simply browse through our extesive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex sm:jusitify-center gap-4 pt-5 w-full overflow-x-scroll'>
        {specialityData.map((item,index) => (
            <link onClick={()=>scrollTo(0,0)} className='flex flex-col item-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                <p>{item.speciality}</p>
            </link>
        
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
