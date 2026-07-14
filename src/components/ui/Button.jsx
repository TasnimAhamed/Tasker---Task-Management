function Button({ children, handleClick, type = "button", variant = "primary" }) {
    const styles = {
        primary: "bg-blue-500 hover:bg-blue-600",
        danger: "bg-red-500 hover:bg-red-600",
        success: "bg-green-500 hover:bg-green-600",
    };

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white cursor-pointer transition-colors ${styles[variant]}`}
        >
            {children}
        </button>
    );
}

export default Button;