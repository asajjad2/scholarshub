import React from 'react'
import Input from './Input'
import { useState } from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// function MenuItem ({ itemName, onClick }){
//     return (
//         <div className={`min-w-[304px] h-11 px-3 py-2.5 flex justify-between`}>
//             <span className='text-text-md font-normal text-gray-800'>{itemName}</span>
//         </div>
//     )
// }

// export default function dropdown({ isSearchable, onChange, headerLabel, disabled, menuItems }) {

//     const [open, setOpen] = useState(false);
//     const menuItemsList = menuItems.map((item, index) => {
//         console.log(item)
//         return (
//             <MenuItem key={index} itemName={item}/>
//         )
//     })

//   return (
//       <>
//         {
//             isSearchable ?
//             <Input placeholder={headerLabel} onChange={onChange} name="search" icon={'chevron-down'} disabled={disabled} onClick={()=>{
//                 setOpen(!open);
//             }}/>
//             :  <div className={`min-w-[304px] h-10 flex justify-between items-center px-3 py-2 rounded-[6px] text-text-md font-normal border-solid border-gray-300 border-[1px] ${disabled ? 'bg-gray-100' : 'bg-white'}`}>
//                     <span className="text-gray-400">{headerLabel}</span>
//                     <span className="cursor-pointer text-gray-400" onClick={() => {
//                         setOpen(!open);
//                     }}>
//                         <FeatherIcon icon={'chevron-down'} size="20"/>
//                     </span>
//             </div>
//         }

//         {
//             open && {menuItemsList}
//         }
//       </>
//     )
// }



export default function dropdown(){

    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
    return (
        <Dropdown options={options} placeholder="Select an option"
            controlClassName={`flex justify-between items-center gap-2.5 h-10 w-[304px]`}
            arrowClosed = {<FeatherIcon icon={'chevron-down'} size="20"/>}
            arrowOpen = {<FeatherIcon icon={'chevron-up'} size="20"/>}
         />
    )
}