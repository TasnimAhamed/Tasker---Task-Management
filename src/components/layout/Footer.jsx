function Footer() {
    return (
        <footer className="bg-[#191D26] text-slate-400 border-t border-[#2E3443]/50">
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
                <div className="text-slate-400">
                    <p>© 2026 tasnim07. All rights reserved.</p>
                </div>
                <p className="flex items-center gap-1.5 text-slate-400">
                    <span>Made with</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse"
                        aria-hidden="true"
                    >
                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                    <span>by</span>
                    <a
                        href="https://codeforces.com/profile/tasnim07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-teal-300 transition-colors font-bold underline decoration-teal-400/30 decoration-2 underline-offset-2"
                    >
                        Tasnim Ahmed
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;

