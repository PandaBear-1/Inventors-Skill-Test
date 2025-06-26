

function Header() {
  return (
    <nav className='absolute w-full z-10 flex justify-between items-center p-5 px-10
    bg-gradient-to-b  from-[#1e2126] to-transparent  '>
        <h2 className='text-white text-[37px]'>CountrySearch</h2>
        <ul className='flex gap-10 text-gray-300 '>
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