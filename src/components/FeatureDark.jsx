import RazorPayX from "./assets/razorpayX.svg"
import businessbank from "./assets/buisness-banking.png"
import flame1 from "./assets/x-flame-1.png"
import flame2 from "./assets/x-flame-2.png"

const FeatureDark = () => {
    const featureSec = [
        " Open a fully digital current account",
        "Automate payables & compliment payments",
        "Simplify and track spends with Corporate cards",
        "View financial insights at a glance"
    ]
    return (
        <div className='bg-deepBlue py-[4rem] text-white'>
            <div className='w-11/12 max-w-[1150px] mx-auto p-[1rem]'>
                <h1 className="text-center text-3xl mb-[2rem] font-bold">Explore Razorpay Business Banking</h1>
                <div className="h-[5px] mx-auto  mb-[1.5rem] w-[50px] rounded-full bg-[#61CEA6]"></div>



                <div className="text-white border bg-deepBlue  border-[rgba(255,255,255,0.5)] p-[1rem] grid gap-7 md:gap-3 grid-cols-1 md:grid-cols-2 place-items-center relative " >
                    {/* .left */}
                    <div className="">
                        <h1 className="text-3xl font-bold">
                            Manage your company’s finances with
                            <img src={RazorPayX} alt="razorpay" className="inline mx-1" />
                            <span className="md:ml-1">Business Banking</span>
                        </h1>
                        <ul className="pt-5">
                            {
                                featureSec.map((feature, index) => {
                                    return (
                                        <li className="flex space-x-4 mb-[10px]" key={index}>
                                            <i data-feather="check" className="text-greenLight">✓</i>
                                            <span>
                                                {feature}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="flex gap-2 pt-[2rem] items-center  flex-col-reverse md:flex-row">
                            <button className="bg-lightBlue relative hover:scale-[1.01] hover:bg-lightBlue300 transition-all duration-200 w-full md:w-max p-2 rounded-md px-3 group md:pr-[5rem] text-left">Sign Up
                                <div className="absolute text-white h-14 w-10 right-3 text-2xl flex items-center justify-center -top-2 bg-green-500 group-hover:bg-green-400 transition-all duration-200 skew-x-[-20deg]">-</div>
                            </button>
                            <button className="self-start md:self-center transition-all text-[rgba(2q55,255,255,0.5)] hover:text-white duration-200">Know More {'>'}</button>
                        </div>
                    </div>

                    {/* right */}
                    <div>
                        <img src={businessbank} alt="" />
                    </div>
                </div>





            </div>
        </div>
    )
}

export default FeatureDark