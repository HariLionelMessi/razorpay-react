import HeroIllustrator from "./assets/hero-illustration.jpg"
import HeroShape from "./assets/hero-shape.svg"
const HeroSection = () => {
    return (
        <>
            <div className="relative bg-deepBlue text-white font-mullish px-[1.2rem] pt-[60px] sm:pt-[1rem]">
                <div className="w-11/12 flex-col sm:flex-row max-w-[1150px] mx-auto p-1 flex gap-5 items-center justify-between">
                    {/* Left */}
                    <div>
                        <h1 className="text-4xl font-bold mb-[1.5rem]">Power your finance, grow your business</h1>
                        <div className="h-[5px] mb-[1.5rem] w-[50px] rounded-full bg-[#61CEA6]"></div>
                        <p className="mb-[1.5rem] text-xl opacity-[0.5] text-lightGray font-mullish leading-7">Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</p>
                        <button className="py-[1rem] font-semibold rounded-md px-[1.3rem] bg-lightBlue hover:bg-lightBlue500 ">Sign Up Now</button>
                    </div>

                    {/* Right */}
                    <div>
                        <img src={HeroIllustrator} alt="hero img" />
                    </div>

                    <div className="w-full absolute left-0 right-0 bottom-[-130px]">
                        <img className="w-[120%] object-fill" src={HeroShape} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection