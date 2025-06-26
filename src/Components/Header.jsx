

function Header() {
  return (
    <nav className='w-full flex justify-between items-center p-5 px-10
   bg-[#b4b3ba]  '>
        <h2 className='text-white text-[37px]'>CountrySearch</h2>
        <ul className='flex gap-10 text-white '>
            <li>About Us</li>
            <li>Services</li>
            <li>Reviews</li>
            <li>Contact Us</li>
        </ul>
        <button className='bg-white text-black border-none rounded-2xl '>Find your Country</button>
    </nav>
  )
}

export default Header