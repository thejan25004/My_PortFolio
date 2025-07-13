import React from "react"

export const Button = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 ${props.className || ''}`}
        >
            {children}
        </button>
    )
}
