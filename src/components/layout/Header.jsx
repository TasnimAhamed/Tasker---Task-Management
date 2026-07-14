import TaskerLogo from '../../assets/tasker-logo.svg';

function Header() {
    return (
        <nav className="px-4 py-4 md:py-6 w-full bg-[#191D26] absolute top-0 z-50">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/">
                    <img
                        className="h-11.25"
                        src={TaskerLogo}
                        alt="Tasker"
                    />
                </a>
            </div>
        </nav>
    );
}
export default Header;