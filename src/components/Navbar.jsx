import Logo from './assets/logo.svg'
import IndianFlag from './assets/india-flag.svg'
import { RxHamburgerMenu } from "react-icons/rx";
// import Arrow from './a'

const Navbar = () => {
    const navData = ['Payments', 'Banking', 'Corporate Card', 'Payroll', 'Resources', 'Support', 'Pricing']
    return (
        <nav className="bg-deepBlue">
            <div className="relative w-11/12 max-w-[1150px] flex items-center justify-between p-5 mx-auto">

                {/* Logo */}
                <a href="/">
                    <img src={Logo} alt="company logo" className='w-[125px] h-[30px]' />
                </a>
                {/* Nav Items */}
                <div className="flex gap-5 mx-1  ">
                    {
                        navData.map((nav, index) => {
                            return (
                                <>
                                    <div key={index} className="hidden lg:block text-white cursor-pointer font-mullish 
                                    hover:text-lightBlue transition-all duration-200 py-3 group relative">
                                        <a href="#">{nav}</a>
                                        <div className='absolute botton-[-5px] w-full h-1 bg-lightBlue scale-x-0 group-hover:scale-x-100 transition-all duration-200 '></div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

                <div className="flex items-center gap-3 ">
                    <img src={IndianFlag} alt="Indian Flag"
                        className='w-[28px] h-[20px] sm:block hidden '
                    />
                    <button className="font-mullish p-2 md:py-2 md:px-5  text-white  border border-indigo-500 hover:bg-deepBlueHead hover:border-transparent transition-all duration-200">Log in</button>
                    <button className="font-mullish rounded-sm font-medium  p-2 md:py-3 md:px-5 text-lightBlue   bg-white  
                    hover:bg-[#f2f2f0] transition-all duration-200">Sign Up </button>

                    <button className='block md:hidden text-white'><RxHamburgerMenu fontWeight={"bold"} fontSize={"2rem"} /></button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar