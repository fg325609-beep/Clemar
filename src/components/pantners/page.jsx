import React from 'react'
import Image from 'next/image';




const partners = () => {
  return (
    <>
    <p>Нам доверяют</p>

    <div className='flex bg-white justify-around ml-50 mr-50'>
        <div className='flex-column gap-10'>   
            <img className='w-9 ml-26' src="/wallet.png" alt="wallet" />
            <p className='text-black font-medium text-2xl ml-5'>Безопасная оплата</p>
            <p className='text-black font-medium ml-7'>100% безопасная оплата</p>
        </div>
           <div className='flex-column gap-10'>   
            <img className='w-10 ml-26' src="/money.png" alt="wallet" />
            <p className='text-black font-medium text-2xl ml-5'>Безопасная оплата</p>
            <p className='text-black font-medium ml-7'>100% безопасная оплата</p>
        </div>
           <div className='flex-column gap-10'>   
            <img className='w-10 ml-26' src="/deliver.png" alt="wallet" />
            <p className='text-black font-medium text-2xl ml-5'>Безопасная оплата</p>
            <p className='text-black font-medium ml-7'>100% безопасная оплата</p>
        </div>
           <div className='flex-column gap-10'>   
            <img className='w-10 ml-26' src="/support.png" alt="wallet" />
            <p className='text-black font-medium text-2xl ml-5'>Безопасная оплата</p>
            <p className='text-black font-medium ml-7'>100% безопасная оплата</p>
        </div>
    </div>
    </>
  )
}

export default partners