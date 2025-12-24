import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row item-center justify-between min-h-[calc(90vh-6rem)]">
            <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                    <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                        <i class='bx  bxs-diamond'></i>
                        FEATURES
                    </div>

                </div>
                {/* Hero Title */}
                <h1 data-aos="fade-up"
                    data-aos-duration="3000" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                    HELLO GUYS,
                    <br />
                    I'M BHARATH
                </h1>
                <p data-aos="fade-up"
                    data-aos-duration="3500">
                    hello guys this is bharath welcome to my website. This is my first
                    frontend project using react and tailwind css. I hope you like it.
                    if you like it please give me a star on github.
                    my github profile link is given .👉
                    click me:- <a href="https://github.com/yallalabharath00-lab">GitHub Profile</a>
                </p>

                <br>
                </br>
                <br>
                </br>

                {/* Hero Button */}
                <div>
                    <a href='#' className='border border-[#2a2a2a] px-6 sm:px-5 sm:py-3 py-3 mt-8 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'>
                        Documentation <i class='bx  bxs-link'></i>
                    </a>
                    <a href='#' className='border border-[#2a2a2a] px-10 sm:px-8 sm:py-3 py-3 mt-8 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white ml-6'>
                        Get Started <i class='bx  bxs-link'></i>
                    </a>
                </div>

            </div>
            {/* Hero Image */}
            <Spline data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2]' scene="https://prod.spline.design/QG5CMjbWdOasXSuQ/scene.splinecode" />

        </main>
    )
}

export default Hero