import logo_1 from '../assets/TransCal Logo 2.avif'

function Hero() {
  return (
    <div>
        <div className='absolute mt-[270px] md:mt-[320px] px-5 md:px-12 '>
            <h2 className='text-white text-[38px] lg:text-[58px] font-bold
             '>Travel Smarter! <br /> Skip the Park.</h2>
             <p className='text-white text-[14px] lg:text-[18px]'>Book your seat online—no queues, no stress. 
                <br /> Perfect for the festive rush and school breaks.</p>
        </div>
        <img src={logo_1} alt="logo_1" className='h-[50%] w-full object-cover' />
    </div>
  )
}

export default Hero