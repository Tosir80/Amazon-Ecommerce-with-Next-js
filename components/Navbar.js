import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import {  AiOutlineShoppingCart} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react"
// src/pages/Home.js
import { useSelector } from 'react-redux';
const Navbar = () => {

    let Links=[
        {name:"HOME", link:'/'},
        {name:"SERVICE", link:'/service'},
        {name:"ABOUT", link:'/about'},
        {name:"BLOG", link:'/blog'},
        {name:"CONTACT", link:'/contact'}
    ]


 const [open, setOpen] = useState(false)

// active class add 
const router = useRouter();

const { data: session } = useSession()


const cart = useSelector((state) => state.cart)

const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

  return (
    <div className="shadow-md  left-0 py-1">
     <div className="flex bg-white  px-10 justify-between items-center ">
        <div className="text-2xl cursor-pointer flex  items-center font-[poppins] text-fuchsia-900  ">
       <Link href='/'>
       <Image
            width={200}
            height={50}
            objectFit="cover"
            src='/Images/logo.jpg'
            alt=""
           />
       </Link>
        </div>
   <ul className={` z-10 flex items-center   md:static bg-white md:z-auto  left-0 w-full w-auto pl-0 pl-9 transition-all duration-500 ease-in 
         
         ` } >
<div className='hidden md:block w-full  px-5'>
<form className=''>   
    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className=" h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
</div>
       
        {/* ul li item------ */}
         
        {session? <div>
           {session.user.name} <br />
            <button onClick={() => signOut()} className=' font-bold p-1 rounded-md bg-orange-200'>Sign Out</button>
        </div>   :
         <button onClick={() => signIn()}  className=' font-bold text-red-300'>Login</button>
        }  
            

            {/* {
            Links.map((link)=>(
            <li onClick={()=>setOpen(false)} key={link.name} className="md:ml-8  text-black md:my-0 my-7">
                <Link href={link.link}>
                    <a className={`text-gray-800 hover:text-fuchsia-500 duration-500 ${router.pathname==link.link? 'active': ''}`} >{link.name}</a>
                </Link>
            </li>
            ))
            } */}
            {/* button========= */}
         <Link href='/checkout'>
         <div className= 'relative outline-none md:ml-2hover:text-white text-indigo-500 p-1 px-3   border-sky-500'>
            <span className='text-black absolute top-0 right-1 bg-orange-500 rounded-full w-5  text-center font-bold'>{getTotalQuantity() || 0}</span>
            <button  className='p-3 text-2xl'>
                <AiOutlineShoppingCart/>
            </button>
            
            </div>
         </Link>
        
         </ul>
         
     </div>
    </div>
  )
}

export default Navbar
