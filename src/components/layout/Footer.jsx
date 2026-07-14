function Footer() {
    return (
        <footer className="py-4 md:py-8">
            <div className="container mx-auto">
                <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
                    Copyright &copy; {new Date().getFullYear()} | All rights reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
