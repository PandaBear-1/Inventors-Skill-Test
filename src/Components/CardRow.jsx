import { useRef } from 'react'
import { IoChevronBack,  IoChevronForward } from 'react-icons/io5'

function CardRow({children, showButtons = true}) {
    
  const elementRef = useRef(null)


  function slideRight(element){
    element.scrollLeft += 500;
  }
  
  function slideLeft(element){
    element.scrollLeft -= 500;
  }
  

  return (
    <div className='flex items-center' >
     { showButtons && <IoChevronBack onClick={()=> slideLeft(elementRef.current)} className='hidden md:block text-[40px] text-white
          bg-black cursor-pointer p-2 rounded-full mb-[120px] mr-[-40px] z-10 ' />}
      <div ref={elementRef} className='w-full mt-1 flex overflow-scroll scroll-smooth overflow-x-auto
          whitespace-nowrap scrollbar-hide ' >
        
      {children}

      </div>
      { showButtons && < IoChevronForward onClick={()=>slideRight(elementRef.current)} className='hidden md:block text-[40px] text-white bg-black cursor-pointer
        p-2 rounded-full mb-[120px] ml-[-40px] z-10 ' />}
    </div>
  )
}

export default CardRow