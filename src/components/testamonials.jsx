import { FaStar } from 'react-icons/fa'

// Initializing a constant that will be used later on to display 5 concurrent stars
const StarRating = ({rating = 5, totalStars = 5, size = 25}) => {
    return (
        <>
            {/* Parent container for the testamonial containers */}
            <div className="flex flex-col items-center justify-start text-black py-3">

                {/* Heading container */}
                <div className="flex flex-col justify-center items-center py-3">
                    <h1 className="sm:text-[1.2em] md:text-2xl font-bold text-center">What our clients say</h1>
                    <h1 className="sm:text-[1.2em] md:text-2xl font-bold">Testimonials</h1>
                </div>

                {/* Container for the 3 testamonial sub-containers */}
                <div className="flex flex-col md:flex-row justify-center items-stretch space-y-5 md:space-y-0 md:space-x-5 p-5 w-full">

                    {/* Testamonial 1 */}
                    <div data-reveal className="flex flex-col justify-center items-center text-center bg-[#ffffff84] sm:w-full md:w-[30%] p-3 rounded-xl shadow">
                        
                        {/* 5-star container */}
                        <div className='flex flex-row text-yellow-400 p-3'>
                            {Array(totalStars).fill().map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <FaStar key={index} size={size}
                                />
                            )
                            })}
                        </div>
                        <p>
                            Print Rebel Graphix turned our event signage around in 24 hours and the colours matched our brand perfectly.
                            The installers were punctual and made sure every panel lined up. We use them for all large‑format work now.
                        </p>
                        <br />
                        <p>Annamarie Van Zweel</p>
                    </div>

                    {/* Testamonial 2 */}
                    <div data-reveal data-delay="120ms" className="flex flex-col justify-center items-center text-center bg-[#ffffff84] sm:w-full md:w-[30%] p-3 rounded-xl shadow">
                        {/* 5 star container */}
                        <div className='flex flex-row text-yellow-400 p-3'>
                            {Array(totalStars).fill().map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <FaStar key={index} size={size}
                                />
                            )
                            })}
                        </div>
                        <p>
                            We ordered branded mugs and shirts via sublimation. Proofs arrived the same day and they reprinted a small colour shift at no extra cost.
                            Clear communication and a beautiful finish.
                        </p>
                        <br />
                        <p>John Smith</p>
                    </div>

                    {/* Testamonial 3 */}
                    <div data-reveal data-delay="240ms" className="flex flex-col justify-center items-center text-center bg-[#ffffff84] sm:w-full md:w-[30%] p-3 rounded-xl shadow">
                        {/* 5 star container */}
                        <div className='flex flex-row text-yellow-400 p-3'>
                            {Array(totalStars).fill().map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <FaStar key={index} size={size}
                                />
                            )
                            })}
                        </div>
                        <p>
                            Our brochures and business cards look premium—crisp edges, thick stock, and delivered earlier than promised.
                            Clients keep asking who does our printing. Easy choice: Print Rebel Graphix.
                        </p>
                        <br />
                        <p>Nomsa Dlamini</p>
                    </div>
                </div>
                
            </div>
        </>
    )
  

  
}

export default StarRating