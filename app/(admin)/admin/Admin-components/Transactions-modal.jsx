export default function Transactions_modal() {
  return (
    <div className='w-full grid grid-cols-10 px-5 bg-primary h-[65px] text-base border-b'>
      <div className='col-span-1 flex items-center justify-center'>
        <h2>23-08-23</h2>
      </div>
      <div className='col-span-2 flex items-center justify-center'>
        <h2>Adewumi Cole</h2>
      </div>
      <div className='col-span-3 flex items-center justify-center'>
        <h2>Haven Apartment (Nicole)</h2>
      </div>
      <div className='col-span-1 flex items-center justify-center'>
        <h2>Unit</h2>
      </div>
      <div className='col-span-2 flex items-center justify-center'>
        <h2>50 Million Naira</h2>
      </div>
      <div className='col-span-1 flex items-center justify-center text-green-500'>
        <h2>Paid</h2>
      </div>
    </div>
  );
}
