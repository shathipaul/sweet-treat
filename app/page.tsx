import Image from 'next/image'
import banner from '../public/assets/images/banner2.jpg'
import Login from '@/components/login'
import logo from '../public/assets/images/Sweet Treat.png'

export default function Home() {
  return (
    
    <div className=" w-full text-white">
       <div className='w-full img-gradient '>
          <Image src={banner} className="w-full h-screen" alt=""   />
        </div>
  
        <div className="absolute md:flex justify-evenly items-center transform  -translate-y-1/2  left-8 right-5 top-1/2 ">
          <h1 className='text-center text-4xl lg:text-5xl pt-6 lg:pt-0 font-bold'>Login with your mail, <br /> Get A free sample</h1>
                                
        <div>
         <Login/>
                               
        </div>
        </div>
    </div>
    
  )
}
