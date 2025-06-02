import { CharterEmailForm } from "../components/CharterEmailForm"

export const LandingPage = () => {
    return (
        <div className="w-full flex flex-wrap justify-center bg-gray-100 ">
            <div className="bg-[url(/src/assets/bg/trogon-airplane-night.jpeg)] w-full min-h-1/2 bg-center bg-cover absolute top-0 ">
                <div className="absolute top-0 w-full h-full bg-blue-950 opacity-50 z-0"></div>
            </div>

            <div className="bg-white max-w-6xl md:p-6 relative top-0  min-h-full text-blue-950 flex flex-wrap content-center rounded-lg shadow-lg border-gray-500 mt-50">

                <div className="w-full text-center">
                    <h2>We're taking off soon! 🚀</h2>
                    <h4>Our new flight booking experience is almost ready for takeoff.</h4>
                </div>
                <div className="flex flex-nowrap ">
                    <div className="w-1/2">
                        <div className="relative z-10  opacity-95  text-black ">
                            <CharterEmailForm />
                        </div>
                    </div>
                    <div className=" w-1/2 flex flex-wrap content-center md:p-6 ">


                        <p>While we prepare to bring you the ultimate travel experience, we’re here to help with your charter flight needs today. Whether it's a business trip, a special event, or a private getaway, we've got you covered.
                            Fill out the form below to plan your next charter flight, and we’ll take care of the rest.
                        </p>


                    </div>
                </div>
            </div>

        </div>
    )
}