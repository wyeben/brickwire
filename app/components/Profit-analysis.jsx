import Image from 'next/image';
import Lines_img from '../../public/Home-assets/lines-img.png';
import bottom_house from '../../public/Home-assets/bottom-house.png';
import left_house from '../../public/Home-assets/left-house.png';
import right_house from '../../public/Home-assets/right-house.png';

export default function Profit_analysis() {
  return (
    <section className='bg-primary pt-10 vsm:py-20 md:px-[50px] w-full'>
      <h1 className='md:mb-20 text-center font-bold md:font-medium text-xl md:text-4xl'>
        Profit Analysis
      </h1>
      <div className='flex w-full vsm:items-center vsm:justify-center flex-col flex-wrap md:items-center md:justify-center xl:justify-between xl:flex-row xl:items-center'>
        <div className='max-w-[320px] min-w-[320px] mx-auto vsm:max-w-[350px] vsm:min-w-[350px] md:max-w-[600px] md:min-w-[600px] flex items-center md:h-[390px] relative pt-20 px-5 vsm:px-0'>
          <Image
            src={Lines_img}
            alt='line img'
            width={1000}
            height={1000}
            className=' w-[200px] vsm:w-[265px] md:w-[428px] '
          />
          <div className='absolute left-[10px] top-[40px] vsm:left-0 vsm:top-[30px] md:left-0 md:top-[40px] pl-3 md:px-10 flex flex-col items-center'>
            <h1 className='text-sm vsm:text-lg md:text-5xl font-medium'>10%</h1>
            <p className='text-xs vsm:text-sm'>Annual Net Yield</p>
          </div>
          <div className='absolute left-[110px] vsm:left-[120px] top-[75px] md:left-[180px] md:top-[130px] md:px-10 flex flex-col items-center'>
            <h1 className='text-sm vsm:text-lg md:text-5xl font-medium'>5%</h1>
            <p className='text-xs vsm:text-sm text-center'>
              Average Annual Property
              <span className='block'>Appreciation in Lekki</span>
            </p>
          </div>
          <div className='absolute right-[10px] bottom-[10px] vsm:-right-[20px] vsm:bottom-[20px] md:right-0 md:bottom-[80px] flex flex-col items-center'>
            <h1 className='text-sm vsm:text-lg md:text-5xl font-medium'>15%</h1>
            <p className='text-xs vsm:text-sm'>Total Annual ROI</p>
          </div>
        </div>
        <div className='max-w-[320px] min-w-[320px] mx-auto vsm:max-w-[400px] vsm:min-w-[400px] md:max-w-[600px] md:min-w-[600px] relative h-[300px] md:h-[400px] mt-10 md:mt-0'>
          <Image
            src={left_house}
            alt='house'
            width={1000}
            height={1000}
            className='w-[130px] vsm:w-[180px] vsm:md:w-[230px] absolute left-5 top-0'
          />
          <Image
            src={right_house}
            alt='house'
            width={1000}
            height={1000}
            className='w-[130px] vsm:w-[180px] md:w-[230px] absolute right-5 top-0'
          />
          <Image
            src={bottom_house}
            alt='house'
            width={1000}
            height={1000}
            className='w-[130px] vsm:w-[180px] top-[120px] vsm:top-[160px] right-[50%] translate-x-[50%] md:w-[230px] absolute md:bottom-0 md:right-[50%] md:translate-x-[50%]'
          />
        </div>
      </div>
    </section>
  );
}
