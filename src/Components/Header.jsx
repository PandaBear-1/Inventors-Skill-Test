

function Header() {
  return (
    <nav className='w-full flex gap-35 md:gap-0 md:justify-between items-center p-5 px-5 md:px-10
   bg-[#b4b3ba]  '>
        <h2 className='text-white text-[27px] md:text-[37px]'>CountrySearch</h2>
        <ul className='hidden md:flex gap-2 md:gap-10 text-white text-[10px] md:text-base '>
            <li>About Us</li>
            <li>Services</li>
            <li>Reviews</li>
            <li>Contact Us</li>
        </ul>
        <button className="md:hidden bg-white text-black border-none rounded-md px-[15px] py-[5px] text-[14px] " > Search</button>
        <button className=' hidden md:block  px-[20px] py-[10px] text-[14px] bg-white text-black border-none rounded-2xl '>Find your Country</button>
    </nav>
  )
}

export default Header