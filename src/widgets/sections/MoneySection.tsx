import Image from "next/image";
import BgFrame from "@/public/bg/bg-green.png";
import CodeImg from "@/public/img/money.png";

export  function MoneySection() {
    return (
        <section 
          className="relative w-full min-h-[600px] flex items-center justify-center px-20 mt-30"
            style={{ 
                backgroundImage: `url(${BgFrame.src})`, 
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundPosition: "top center"
            }}
        >
            <div className="flex items-center gap-16 lg:gap-36 max-w-7xl">
                <div className="max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-white">Project Success Insights</h2>
                    <ul className="space-y-6 text-lg text-white list-none">
                        <li>
                            <span className="block font-bold text-yellow-300 text-2xl">39.11%</span>
                            <p className="opacity-90">Overall Success Rate for all projects.</p>
                        </li>
                        <li>
                            <span className="block font-bold text-yellow-300 text-2xl">75% Chance</span>
                            <p className="opacity-90">Success momentum: reach 30% in the first week to boost your odds.</p>
                        </li>
                        <li>
                            <span className="block font-bold text-yellow-300 text-2xl">883 Projects</span>
                            <p className="opacity-90">Have joined the Million-Dollar Club, raising over $1,000,000.</p>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block w-[450px]">
                    <Image 
                        src={CodeImg} 
                        alt="Money Statistics Illustration" 
                        width={450}
                        height={350}
                        className="object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}