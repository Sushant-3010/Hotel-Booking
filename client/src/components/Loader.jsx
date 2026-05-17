import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Loader = () => {

const {navigate, axios, getToken} = useAppContext()
const {nextUrl} =useParams()
const [searchParams] = useSearchParams()
const sessionId = searchParams.get('session_id')

 useEffect(()=>{
    const verifyAndNavigate = async () => {
        if (nextUrl) {
            if (sessionId) {
                try {
                    const token = await getToken();
                    const { data } = await axios.post('/api/bookings/verify-stripe', {
                        session_id: sessionId
                    }, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    if (data.success) {
                        toast.success("Payment successful!");
                    } else {
                        toast.error(data.message || "Payment verification failed.");
                    }
                } catch (error) {
                    console.error("Verification error:", error);
                    toast.error("Error verifying payment.");
                }
            } else {
                // If there's no payment verification to run, wait slightly for nice UX
                await new Promise((resolve) => setTimeout(resolve, 1500));
            }
            navigate(`/${nextUrl}`)
        }
    };

    verifyAndNavigate();

 },[nextUrl, sessionId, navigate, axios, getToken])
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary'></div>
      
    </div>
  )
}

export default Loader
