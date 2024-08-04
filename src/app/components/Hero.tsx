import { FaEdit } from "react-icons/fa";
import Link from "next/link";
async function getvalue() {
  const res=await fetch('http://localhost:4000/0')
 const data=await res.json();
 console.log(data)
 return data;
}
export default async  function Hero() {
  const data=await getvalue();
  console.log(data);
  const dataArray = Array.isArray(data) ? data : [data];
  return (
    <div className='m-2 p-4' > 
    { dataArray.map((items)=>{
        return (
          <div>
             <div  className="flex justify-end"><button  className='bg-gray-500  flex gap-3 font-medium py-2 px-4 rounded m-3 text-[24px] '><Link href={{pathname:"/Edit",query:{title:items.title, description:items.description,imageUrl:items.imageUrl,cta:items.cta}}} ><FaEdit/></Link></button> 
        </div>
      <div className=' flex p-2 justify-center  h-[500px]'>  <div >
      <div className='text-4xl font-bold m-2 '>{items.title}</div>
     <div className='m-3 text-pretty '><p>{items.description}</p>
     <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 rounded m-3 px-4 ease-in-out delay-[3s]'>{items.cta}</button></div></div>
      <div className='w-[50%]'>
      <img src={items.imageUrl}/></div>
      </div>
      </div>
   
        )
      }
      )
      }
     </div>
  )
}


