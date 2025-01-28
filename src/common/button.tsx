import React from "react";
import clsx from "clsx";

interface ButtonProps {
    variant?: "default" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
                                           variant = "default",
                                           size = "md",
                                           className,
                                           onClick,
                                           children,
                                       }) => {
    const baseStyles = "flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
        default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:ring-gray-500",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 focus:ring-gray-500",
    };

    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
            {children}
        </button>
    );
};

export default Button;
