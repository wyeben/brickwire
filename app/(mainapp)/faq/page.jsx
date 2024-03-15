'use client';
import ToggleFAQ from '../../components/ToggleFAQ';
import { motion, LayoutGroup } from 'framer-motion';

export default function FAQ() {
  return (
    <main className='pt-[10vh] w-full bg-[#FAFAFA]'>
      <section className='pt-[50px] px-5 md:p-[50px] w-full'>
        <h1 className='text-center font-bold text-2xl md:text-4xl text-[#2F4152]'>
          Frequently Asked Questions
        </h1>
        <p className='text-center text-sm mt-3 text-[#798699]'>
          Here are some common questions often asked about Brickwire properties
        </p>
      </section>
      <section className='px-5 md:px-[50px] w-full pt-10'>
        <LayoutGroup>
          <motion.div layout className='w-full'>
            <motion.h2
              layout='position'
              className='font-bold text-2xl mb-10 text-[#2F4152]'
            >
              Residential
            </motion.h2>
            <ToggleFAQ question='What types of flats are available?'>
              <motion.p className='text-sm text-[#798699]'>
                We offer a variety of flats, including, one-bedroom,
                two-bedroom, and more. You can explore our listings to see the
                available options.
              </motion.p>
            </ToggleFAQ>
            <ToggleFAQ question='What is the pricing range for flats in your portfolio?'>
              <motion.p className='text-sm text-[#798699]'>
                Pricing varies depending on location, type of flats, and
                amenities. You can find detailed pricing information on each
                property listing or inquire directly with our team.
              </motion.p>
            </ToggleFAQ>
            <ToggleFAQ question='Is there a payment plan?'>
              <motion.p className='text-sm text-[#798699]'>
                Yes, you can spread payment up to 8 months.
              </motion.p>
            </ToggleFAQ>
          </motion.div>
          <motion.div layout className='w-full'>
            <motion.h2
              layout
              className='font-bold text-2xl mb-10 mt-20 text-[#2F4152]'
            >
              Commercial
            </motion.h2>
            <ToggleFAQ question='What is the ROI on short-let investment?'>
              <motion.p className='text-sm text-[#798699]'>
                The net return is circa 5%. The average annual property
                appreciation in Lekki is 10% per annum.
              </motion.p>
            </ToggleFAQ>
            <ToggleFAQ question='How liquid is the investment?'>
              <motion.p className='text-sm text-[#798699]'>
                The investment is as liquid as owning a property. When you
                invest in short-let apartment, the goal isn’t usually liquidity
                but return on investment, which further increases as the
                property appreciates. However, in this case, there is a ready
                community of buyers. The developer has the right of first
                refusal, but the investor is free to sell to a 3rd party if they
                get a higher offer elsewhere.
              </motion.p>
            </ToggleFAQ>
            <ToggleFAQ question='How many people will co-own the short-let?'>
              <motion.p className='text-sm text-[#798699]'>
                This depends on the number of slots available, currently, we
                allow a maximum of 40 investors per flat.
              </motion.p>
            </ToggleFAQ>
            <ToggleFAQ question='Do the co-owners have access to the short-let?'>
              <motion.p className='text-sm text-[#798699]'>
                Yes, co-owners can stay in the short-let for one week every
                quarter, at a discounted rate.
              </motion.p>
            </ToggleFAQ>
          </motion.div>
        </LayoutGroup>
      </section>
    </main>
  );
}
