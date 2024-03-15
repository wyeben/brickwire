import Image from 'next/image';
import Bedroom_img from '../../public/Howitworks-assets/bedroom-image.png';
import img1 from '../../public/Howitworks-assets/img5.png';
import img2 from '../../public/Howitworks-assets/img6.png';
import img3 from '../../public/Howitworks-assets/img7.png';
import img4 from '../../public/Howitworks-assets/img8.png';

export default function Buy_Commercial({ toggleHowItWorks }) {
  return (
    <section className='w-full px-5 md:px-[50px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20'>
        <div className='md:pr-[50px] mb-5 md:mb-5 md:h-[435px] flex items-center flex-col justify-center'>
          <h3 className='text-lg md:text-2xl font-semibold mb-3 w-full text-start'>
            1. Explore
          </h3>
          {toggleHowItWorks ? (
            <p className='text-sm'>
              Brickwire gives you the opportunity to invest in shortlets
              apartment. Explore a world of lucrative shortlet investments plans
              and find the perfect shortlet apartment to diversify your
              portfolio. Our properties are strategically placed for maximum
              occupancy and return on investment.
            </p>
          ) : (
            <p className='text-sm'>
              At BrickWire, we present you with a plethora of enticing
              properties in high-brow areas in the city of Lagos.
              <span className='block mt-3'>
                Explore our diverse range of properties and find flats that
                matches your criteria.
              </span>
            </p>
          )}
        </div>
        <Image
          src={img1}
          alt='bedroom image'
          width={1000}
          height={1000}
          className='w-full h-[248px] md:w-[500px] md:h-[435px] mb-20 md:mb-0 object-cover md:ml-20'
        />
        <Image
          src={img2}
          alt='bedroom image'
          width={1000}
          height={1000}
          className='w-full h-[248px] md:w-[500px] md:h-[435px] hidden md:flex object-cover'
        />
        <div className='md:pl-[50px] md:mb-5 mb-5 md:h-[435px] flex items-center flex-col justify-center'>
          <h3 className='text-lg md:text-2xl font-semibold mb-3 w-full text-start'>
            2. Buy
          </h3>
          {toggleHowItWorks ? (
            <p className='text-sm'>
              Elevate your investment portfolio by purchasing slots in our
              shortlet apartments and enjoy the advantages of ownership,
              including consistent rental income and property appreciation.
              <span className='block mt-3'>
                Slot: Own a 2.5% stake in the shortlet apartment.
              </span>
              {/* <span className='block mt-3'>
                Slot: Own a 0.5% stake in the Apartment.
              </span> */}
            </p>
          ) : (
            <p className='text-sm'>
              You have the opportunity to buy units of 2 or 3 bedroom in our
              properties that align with your preferences, regardless of your
              global location.
              <span className='block mt-3'>
                All investors have full ownership of their flat, whether
                individually or in partnership with other investors. Secure your
                flat today by making a down payment or paying in full. Yields
                ranges between 10-20% annually .
              </span>
            </p>
          )}
        </div>
        <Image
          src={img2}
          alt='bedroom image'
          width={1000}
          height={1000}
          className='w-full h-[248px] md:w-[500px] md:h-[435px] md:hidden mb-20 object-cover'
        />
        <div className='md:h-[435px] md:pr-[50px] mb-5 md:mb-5 flex items-center h-full flex-col justify-center'>
          <h3 className='text-lg md:text-2xl font-semibold mb-3 w-full items-start'>
            3. Own
          </h3>
          {toggleHowItWorks ? (
            <p className='text-sm'>
              Watch your investment portfolio thrive in prime locations and
              enjoy high returns through shortlet rentals.
            </p>
          ) : (
            <p className='text-sm'>
              After making payment for your flat, you can choose to manage your
              flat independently or with assistance from our team.
            </p>
          )}
        </div>
        <Image
          src={img3}
          alt='bedroom image'
          width={1000}
          height={1000}
          className='w-full h-[248px] md:w-[500px] md:h-[435px] mb-20 md:mb-0 object-cover'
        />
        <Image
          src={img4}
          alt='bedroom image'
          width={1000}
          height={1000}
          className='w-full h-[248px] md:w-[463px] md:h-[435px] hidden md:flex object-cover'
        />
        <div className='md:h-[435px] md:pl-[50px] md:mb-10 mb-5 flex items-center justify-center flex-col '>
          <h3 className='text-lg md:text-2xl font-semibold mb-3 w-full text-start'>
            4. Sell
          </h3>
          {toggleHowItWorks ? (
            <p className='text-sm'>
              Ready to diversify your portfolio or capitalize on your gains? You
              can resell your slots.
            </p>
          ) : (
            <p className='text-sm'>
              Resell your flats effortlessly and efficiently, allowing you to
              adapt to the ever-changing financial landscape.
            </p>
          )}
        </div>
        <Image
          src={img4}
          alt='bedroom image'
          width={1000}
          height={1000}
          className='w-full h-[248px] md:w-[500px] md:h-[435px] object-cover md:hidden flex mb-20'
        />
      </div>
    </section>
  );
}
