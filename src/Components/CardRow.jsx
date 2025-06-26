
function CardRow(props) {
    

  return (
    <div className='w-full mt-1 flex overflow-scroll scroll-smooth overflow-x-auto
        whitespace-nowrap scrollbar-hide ' >
     {props.children}
    </div>
  )
}

export default CardRow