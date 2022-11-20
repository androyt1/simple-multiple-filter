import React,{useState,useEffect} from 'react'
import { useToggle } from '../hooks/useToggle'

const Search = () => { 
    const [users]=useState([
        {
            id:1,
            name:'James',
            gender:'male',
            age:20
        },
        {
            id:2,
            name:'Sandy',
            gender:'female',
            age:23
        },
        {
            id:3,
            name:'Anthony',
            gender:'male',
            age:25
        },
        {
            id:4,
            name:'Erica',
            gender:'female',
            age:27
        },
        {
            id:5,
            name:'Andrew',
            gender:'male',
            age:16
        },
        {
            id:6,
            name:'Jeanne',
            gender:'female',
            age:12
        },
        {
            id:7,
            name:'Mark',
            gender:'male',
            age:29
        },
        {
            id:8,
            name:'Sally',
            gender:'female',
            age:31
        },
    ])
    const{toggle:open,handleToggle}=useToggle() 
     
    const[results,setResults]=useState([])
   
    const[age,setAge]=useState('')   
    const[search,setSearch]=useState('') 
    const[gender,setGender]=useState('') 
   
    useEffect(()=>{ 
        let data,data2,data3
        data=gender==='' ? users : users.filter(user=>user.gender===gender)
        data2=data.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()))              
       switch(age){
            case '11-20':
            data3=data2.filter(user=>user.age >=11 && user.age <=20)
            break;  
            case '21-30': 
                data3=data2.filter(user=>user.age >=21 && user.age <=30)
            break; 
            case '31-40': 
                data3=data2.filter(user=>user.age >=31 && user.age <=40)
            break;
            default:
                data3=data2 
       } 
       setResults(data3)
    },[users,age,search,gender]) 
  
   

  return (
    <>
    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-3 bg-white p-5'>
    <div className='w-full'>
   
    <div className='w-full bg-stone-200 relative flex items-center justify-end'>
    <input type='search' name='search' placeholder='Type to Search Users' value={search} onChange={(e)=>setSearch(e.target.value)} className={'w-full border border-stone-300  px-1 py-2 focus:outline-none'} />
    <button className='z-5 relative px-4' onClick={handleToggle}>+</button>
    </div>
   
    </div>
    <div className='w-full flex justify-center items-center'>
        <select name="age" value={age} id=""  className='w-full px-1 py-2 bg-stone-100 focus:outline-none' onChange={(e)=>{
            setAge(e.target.value)
        }}> 
            <option value='0-100'>0-100</option>
            <option value='11-20'>11-20</option> 
            <option value='21-30'>21-30</option>
            <option value='31-40'>31-40</option>
        </select>
    </div>   

    <div className='w-full flex justify-center items-center'>
        <select name="gender" value={gender} id=""  className='w-full px-1 py-2 bg-stone-100 focus:outline-none' onChange={(e)=>{
            setGender(e.target.value)
        }}> 
            <option value=''>All</option>
            <option value='male'>Male</option> 
            <option value='female'>Female</option>           
        </select>
    </div>    
    </div>
    <div className={open ? 'block mt-4 w-full p-3 bg-white':'hidden'}>
        <div className='px-5 grid grid-cols-2 md:grid-cols-4 gap-8 bg-stone-200 p-3'>
            {
                results?.map((user,index)=>(
                <div className='w-full shadow p-2 bg-white' key={index}>                    
                        <div><span className='text-sm font-medium'>Name</span> <span className='italic text-sm text-stone-600'>{user.name}</span></div>
                        <div><span className='text-sm font-medium'>Gender</span> <span className='italic text-sm text-stone-600'>{user.gender}</span></div>
                        <div><span className='text-sm font-medium'>Age</span> <span className='italic text-sm text-stone-600'>{user.age}</span></div>                    
                </div>))
            }
        </div>
    </div>     
    </>
  )
}
 
export default Search