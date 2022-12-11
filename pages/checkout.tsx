import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { selectUser } from '../slices/userSlice'
function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const session = useSelector(selectUser)
    const stripePromise = loadStripe(process.env.stripe_public_key)
    const createCheckoutSession = async () => {
        const stripe = await stripePromise
        // Call the backend to create the checkout session
        const checkoutSession = await axios.post('/api/create-checkout-session', 
            {
                items: items,
                email: session.email,
            }
        )
        //Redirect user/customer to Stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })
        if(result.error){
            alert(result.error.message)
        }
    }
  return (
    <div className='bg-lime-50'>
        <Navbar />
        <main className='lg:flex max-w-screen-2xl h-full mx-auto'>
            {/* Left */}
            <div className='flex-grow m-5 shadow-sm'>
                {/* <Image src='https://links.papareact.com/ikj'
                    width={1020}
                    height={250}
                    alt={''}
                    className='' 
                /> */}
                <div className='flex flex-col p-5 space-y-10 bg-[#efefef]'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? 'Your Amazon Basket is empty' : 'Shopping Basket'}
                    </h1>

                    {items.map((item : any,i :any) => (
                        <CheckoutProduct 
                            key={i}
                            id={item.id}
                            name={item.name}
                            rating={item.rating}
                            price={item.price}
                            ingredients={item.ingredients}
                            categories={item.categories}
                            image={item.image}
                        />
                    ))}

                </div>
            </div>
            {/* Right */}
            <div className='flex flex-col bg-[#efefef] p-10 m-5'>
                {items.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>
                            Subtotal({items.length} items): {' '}
                            <span className='font-bold'>
                                ${total}
                            </span>
                        </h2>
                       
                            <button 
                                role='link'
                                type='submit'
                                onClick={createCheckoutSession}
                                disabled={!session}
                                className={`checkout_button mt-2 
                                    ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? 'Sign in to checkout' : 'Checkout'}
                            </button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default Checkout