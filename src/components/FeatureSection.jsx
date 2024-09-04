import dottedArrows from "./assets/feature-section1-dottedrows.png"
import paymentSuit from "./assets/payment-suite.png"
import FeaturedData from "./data/FeatureData.js"
import paymentIcon from "./assets/payment-link-icon.svg"
import featureWaves from "./assets/features-wave.svg"
import "./styles.css"


const FeatureSection = () => {
    const featureSec = [
        "100+ Payment Methods",
        "Industry Leading Success Rate",
        "Superior Checkout Experience",
        "Easy to Integrate",
        "Instant Settlements from day 1",
        "In-depth Reporting and Insights"
    ]

    let symbol = ">"
    return (
        <>
            <div className="pt-[5rem] relative px-[2rem]">
                <div className=" w-90% max-w-[1150px] pt-[3rem] mx-auto">
                    <img width='223' height='167' loading="lazy" className="absolute top-35 -z-10
                 rotate-[-90deg] left-[150px]"
                        src={dottedArrows} alt="" />
                    <img width='223' height='167' loading="lazy" className="absolute top-[150px] -z-10 
                right-20" src={dottedArrows} alt="" />

                    <div className="bg-white">
                        {/* heading */}
                        <h2 className="text-3xl text-center mb-[15px] font-medium">Accept Payments with
                            Razorpay Payment Suite</h2>
                        <div className="h-[5px] mx-auto  mb-[1.5rem] w-[50px] rounded-full bg-[#61CEA6]"></div>

                        {/* content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 p-[2rem]  items-center border
                     border-[rgba(0,0,0,0.2)] rounded-md overflow-hidden" style={{ placeItems: "center" }}>
                            {/* left section */}
                            <div className="p-[1rem] leading-6">
                                <h3 className="text-3xl font-bold">Supercharge your business with the all-powerful
                                    <span className="text-lightBlue "> Payment Gateway</span></h3>
                                <ul className="pt-5">
                                    {
                                        featureSec.map((feature, index) => {
                                            return (
                                                <li className="flex space-x-4" key={index}>
                                                    <i data-feather="check" className="text-greenLight">✓</i>
                                                    <span>
                                                        {feature}
                                                    </span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                {/* for btn and hyperlink */}
                                <div className="flex gap-3 items-center pt-[50px]">
                                    <button className="py-[1rem] text-white font-semibold rounded-md px-[1.3rem] bg-lightBlue hover:bg-lightBlue500 ">Sign Up Now →</button>

                                    {/* hyperlink */}
                                    <div className="text-lightBlue cursor-pointer flex items-center text-[18px] font-medium">
                                        <a href="#" className="mr-1 hover:text-lightBlue500">Know More</a>
                                        <i>{symbol}</i>
                                    </div>
                                </div>



                            </div>   {/* left end*/}
                            <img className="max-w-[300px] mr-[20px] md:mx-auto md:max-w-[500px]" src={paymentSuit} alt="le" />
                        </div>
                    </div>

                    {/* <div key={index}>
                                    <h3>{data.title}</h3>
                                    <p>{data.text}</p>
                                </div> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[2.5rem] transition-all duration-200 gap-[2rem]">
                        {
                            FeaturedData.map((data, index) => {
                                return (

                                    <div key={index} className="relative group hover:scale-105 transition-all duration-200">

                                        <div className="group w-max absolute top-[7%] right-[8%] z-[-2] img-holder  flex justify-center items-center rounded-full bg-blue-500">
                                            <img src={paymentIcon} alt="i" />
                                        </div>

                                        {/* box shape */}
                                        <svg
                                            viewBox="0 0 349.32501220703125 225"
                                            xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="none"
                                            className="stroke-1 
                                        stroke-[#818597] 
                                        h-full w-full absolute z-[-1] 
                                        transition-all duration-200
                                        "
                                            style={{ strokeOpacity: "0.15" }}>
                                            <path
                                                d="M 0 6
                                                A 6 6 0 0 1 6 -6
                                                H 250.32501220703125
                                                A 16 16 0 0 1 261.32501220703125 5
                                                L 338.32501220703125 82
                                                A 16 16 0 0 1 343.32501220703125 93
                                                V 219
                                                A 6 6 0 0 1 337.32501220703125 225
                                                H 12.32501220703125
                                                A 6 6 0 0 1 6 219
                                                Z"
                                                fill="#fff"
                                            />
                                        </svg>
                                        <div className="z-[2] relative p-[2rem] flex flex-col justify-between w-full h-full">
                                            <div>
                                                <h3 className="font-bold">{data.title}</h3>
                                                <p className="mt-[1rem]">{data.text}</p>
                                            </div>
                                            <div className="text-lightBlue font-semibold  pt-[2rem]">
                                                <a href="#">Know More</a>
                                                <i>{symbol}</i>
                                            </div>
                                            <div className="absolute bottom-0 right-5 hidden group-hover:block">
                                                <img src={featureWaves} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
            <div className="seperator mt-[3rem]" style={{ width: 0, height: 0, borderRight: "100vw solid transparent", borderBottom: "10vw solid #02042a" }}>

            </div>
        </>
    )
}

export default FeatureSection