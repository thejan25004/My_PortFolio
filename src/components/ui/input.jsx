import React from "react"

export const Input = ({ ...props }) => {
    return (
        <input
            {...props}
            className={`px-4 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 ${props.className || ''}`}
        />
    )
}
