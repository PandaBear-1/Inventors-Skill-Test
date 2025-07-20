import flag from '../assets/AdobeStock_172772344_Preview.jpeg'

function Card(props) {

    function formatPopulation(number) {
        if (number >= 1_000_000) {
          return Math.floor(number / 100_000) / 10 + 'M'; // 3710000 → 3.7M
        } else if (number >= 1_000) {
          return Math.floor(number / 100) / 10 + 'K';     // 1850 → 1.8K
        }
        return number.toString();
      }


  return (
        <div className='inline-block m-2 md:m-3 cursor-pointer min-w-[190px] md:min-w-[250px] group ' >
            <img loading='lazy' src={props.country.flags.png} className='w-[170px] md:w-[240px] h-[110px] md:h-[140px] 
            object-cover rounded-2xl  group-hover:scale-110 border-gray-400 p-2 transition-all 
            duration-100 ease-in-out' />

            <div className='flex flex-col pt-2 px-5 gap-1 ' >
                <h2 className='text-[21px] font-medium max-w-[200px] break-words whitespace-normal
                group-hover:font-bold '>{props.country.name.official}</h2>
                <p className='text-[13px]'>Capital City :{props.country.capital[0]}</p>
                <p className='text-[13px]'>Region: {props.country.region}</p>
                <p className='text-[13px]'>Population: {formatPopulation(props.country.population)}</p>
            </div>
        </div>
  )
}

export default Card