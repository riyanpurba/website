import Image from "next/image";

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-full">
            <div className="absolute w-full bottom-0">
                <a href="#about" className="flex flex-col items-center justify-center">
                    {/* <ChevronDoubleDownIcon className="w-5 h-5 text-yellow hover:text-white animate-bounce" /> */}
                    <Image
                      src="/icon/chevrondoubledown.svg"
                      alt="chevrondoubledown"
                      width={30}
                      height={30}
                      loading="lazy"
                      title="chevrondoubledown"
                      className="animate-bounce"
                  />
                    <span className="text-white glitch text-sm">Scroll Down</span>
                </a>
            </div>
            </section>
        </>
    )
}

export default Hero;