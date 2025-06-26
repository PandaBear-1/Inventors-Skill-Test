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
    <div className="mt-20">
        <div className='flex gap-10'>
            <img src={props.country.flags.png} className='w-[310px] h-[350px] rounded-2xl ' />

            <div className='flex flex-col pt-10 px-10 gap-3 ' >
                <h2 className='text-[40px]'>{props.country.name.official}</h2>
                <p className='text-[20px]'>Capital City :{props.country.capital[0]}</p>
                <p className='text-[20px]'>Region: {props.country.region}</p>
                <p className='text-[20px]'>Population: {formatPopulation(props.country.population)}</p>
            </div>
        </div>
        <p className=''>{props.country.flags.alt}</p>
    </div>
  )
}

export default Card