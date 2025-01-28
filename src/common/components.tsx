import React from "react";
import clsx from "clsx";

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden",
                className
            )}
        >
            {children}
        </div>
    );
};

interface CardContentProps {
    className?: string;
    children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
    return (
        <div className={clsx("p-6", className)}>{children}</div>
    );
};

export { Card, CardContent };
