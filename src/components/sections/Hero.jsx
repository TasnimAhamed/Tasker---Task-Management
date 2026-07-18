import HeroBanner from '../../assets/hero.png';

export default function HeroSection() {
    return (
        <section className="pb-28.5 pt-20 md:mt-23 w-full">
            <div className="container px-4 md:px-8 lg:px-12 mx-auto">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="flex justify-center md:order-2">
                        <div className="relative group w-full max-w-[450px]">
                            {/* Glowing backdrop effect */}
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#00D991] to-[#00D8FF] opacity-25 blur-xl transition duration-1000 group-hover:opacity-45 group-hover:duration-200"></div>
                            
                            <img
                                className="relative rounded-2xl border border-white/10 w-full shadow-2xl transition-all duration-500 group-hover:scale-[1.03]"
                                src={HeroBanner}
                                width="450"
                                height="450"
                                alt="Tasker Board Illustration"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-left">
                        <span className="self-start inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 rounded-full border border-teal-500/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                            Productivity Ally
                        </span>
                        <h1 className="mb-4 text-[56px] font-extrabold leading-none tracking-tight lg:text-[76px]">
                            <span className="bg-gradient-to-r from-[#00D991] via-[#00D8FF] to-blue-500 bg-clip-text text-transparent">
                                Tasker
                            </span>
                        </h1>
                        <p className="text-lg my-2 text-slate-300 leading-relaxed max-w-lg">
                            Effortlessly Organize, Prioritize, and Conquer Tasks
                            with Tasker – Your Personal Productivity Ally for
                            Seamless Goal Achievement and Stress-Free Task
                            Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

