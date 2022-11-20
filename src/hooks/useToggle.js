import {useState} from 'react'

const useToggle=()=>{

    const[toggle,setToggle]=useState(false)

    const handleToggle=()=>{
        setToggle((prevState)=>!prevState)
    }

    return {toggle,handleToggle}
}

export {useToggle}