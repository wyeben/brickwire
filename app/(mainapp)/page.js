import Image from 'next/image';
import explore_icon from '../../public/Home-assets/explore-icon.png';
import profit_img from '../../public/Home-assets/profit-img.png';
import buy_icon from '../../public/Home-assets/buy-icon.png';
import own_icon from '../../public/Home-assets/own-icon.png';
import sell_icon from '../../public/Home-assets/sell-icon.png';
import Link from 'next/link';
import Home_Offering from '../components/Home-page-offering';
import HomePage_Slider from '../components/HomePage-Slider';
import Profit_analysis from '../components/Profit-analysis';

export const metadata = {
  title: 'Brickwire Properties',
  description: 'Brickwire Properties | Home',
};

export default function page() {
  return (
    <main>
      <Home_Offering />
      <section className='bg-[#FAFAFA] flex justify-center items-center pt-10 md:pt-[100px] pb-20 px-5'>
        <div className='w-[800px] flex flex-col justify-center '>
          <h1 className='font-bold text-xl md:text-4xl text-center mb-3 mt-5 md:mt-0'>
            How it works?
          </h1>
          <p className='text-center text-sm mb-3'>
            Have your ever dreamed of investing in real estate, but thought it
            was out of reach? We're here to change that!
          </p>
          <p className='text-center text-sm'>
            At Brickwire, we're revolutionizing the way you can invest in the
            property market. We've made it simple, easy, and affordable for
            everyone to get a piece of the real estate pie.
          </p>
          <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-4 mx-auto md:mx-0'>
            <div className='w-[120px] h-[120px] vsm:w-[140px] vsm:h-[140px]  md:w-[163px] md:h-[163px] bg-primary rounded-xl flex items-center justify-center flex-col border border-black'>
              <Image
                src={explore_icon}
                width={500}
                height={500}
                alt='explore icon'
                className='w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-3'
              />
              <p className='text-sm'>1. Explore</p>
            </div>
            <div className='w-[120px] h-[120px] vsm:w-[140px] vsm:h-[140px] md:w-[163px] md:h-[163px] bg-primary rounded-xl flex items-center justify-center flex-col border border-black'>
              <Image
                src={buy_icon}
                width={500}
                height={500}
                alt='explore icon'
                className='w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-3'
              />
              <p className='text-sm'>2. Buy</p>
            </div>
            <div className='w-[120px] h-[120px] vsm:w-[140px] vsm:h-[140px] md:w-[163px] md:h-[163px] bg-primary rounded-xl flex items-center justify-center flex-col border border-black'>
              <Image
                src={own_icon}
                width={500}
                height={500}
                alt='explore icon'
                className='w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-3'
              />
              <p className='text-sm'>3. Own</p>
            </div>
            <div className='w-[120px] h-[120px] vsm:w-[140px] vsm:h-[140px] md:w-[163px] md:h-[163px] bg-primary rounded-xl flex items-center justify-center flex-col border border-black'>
              <Image
                src={sell_icon}
                width={500}
                height={500}
                alt='explore icon'
                className='w-[48px] h-[48px] md:w-[68px] md:h-[68px] mb-3'
              />
              <p className='text-sm'>4. Sell</p>
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <Link href={'howitworks'}>
              <button className='md:mr-10 w-[130px] h-[50px] border border-secondary text-secondary text-sm mt-20 hover:bg-secondary hover:text-white'>
                Read more
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Profit Analysis */}
      <Profit_analysis />
      {/* Why Invest with us */}
      <section className='py-20 bg-black text-white px-5 md:px-[50px]'>
        <h1 className='font-bold md:font-medium text-2xl md:text-4xl text-center mb-10 md:mb-20'>
          Why invest with Us?
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='md:mb-20'>
            <hr className='border-secondary mb-2 w-[187px]' />
            <h3 className='font-semibold text-xl mb-5'>Proven Expertise</h3>
            <p className='text-sm'>
              With years of experience in the construction and real estate
              industry, we’ve honed our skills and knowledge to deliver and
              manage properties with precision and excellence.
            </p>
          </div>
          <div>
            <hr className='border-secondary mb-2 w-[187px]' />
            <h3 className='font-semibold text-xl mb-5'>Safe Investment</h3>
            <p className='text-sm'>
              At Brickwire, your investment with us is duly vetted and insured,
              minimizing risk and providing peace of mind.
            </p>
          </div>
          <div>
            <hr className='border-secondary mb-2 w-[187px]' />
            <h3 className='font-semibold text-xl mb-5'>Asset Appreciation</h3>
            <p className='text-sm'>
              When you invest in real estate, your investment appreciates
              overtime, providing you with capital gain and increased wealth.
            </p>
          </div>
          <div>
            <hr className='border-secondary mb-2 w-[187px]' />
            <h3 className='font-semibold text-xl mb-5'>
              Hedge Against Inflation
            </h3>
            <p className='text-sm'>
              Investing in real estate appreciate in value over the long term,
              and rental income often keeps pace with inflation, making it a
              potential hedge against rising prices.
            </p>
          </div>
          <div>
            <hr className='border-secondary mb-2 w-[187px]' />
            <h3 className='font-semibold text-xl mb-5'>High ROI</h3>
            <p className='text-sm'>
              Investing in our properties located in highbrow areas of Lagos
              gives you opportunity to earn up to 15% total annual ROI.
            </p>
          </div>
          <div>
            <hr className='border-secondary mb-2 w-[187px]' />
            <h3 className='font-semibold text-xl mb-5'>Flexibility</h3>
            <p className='text-sm'>
              Brickwire gives you the option to outrightly buy and solely own
              some of our units or an option to co-own with other investors.
            </p>
          </div>
        </div>
      </section>
      {/* Unlocking Opportunities */}
      <section className='w-full flex flex-col md:flex-row bg-primary py-10 md:py-20 px-5 md:px-0 justify-center '>
        <div className='md:h-[540px] md:w-[50%] flex flex-col justify-center items-center '>
          <h3 className='font-medium text-base md:text-xl mb-10 text-center'>
            Unlocking Opportunitites, Maximazing Returns.
          </h3>
          <h3 className='font-medium text-base md:text-xl mb-10 text-center'>
            Sign up now! and kick start your journey.
          </h3>
          <Link href='/register'>
            <button className='md:mr-10 w-[130px] h-[50px] text-primary bg-secondary text-sm mb-10 md:mb-0'>
              Get Started
            </button>
          </Link>
        </div>
        <div className='md:h-[540px] md:w-[50%]'>
          <Image
            src={profit_img}
            alt='line img'
            width={1000}
            height={1000}
            className='w-full'
          />
        </div>
      </section>
      {/* <AvailableProperties /> */}
      <HomePage_Slider />
    </main>
  );
}
