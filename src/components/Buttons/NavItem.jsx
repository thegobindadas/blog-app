import React from 'react'

function NavItem({
    children,
    type = "button",
    bgColor = "",
    textColor = "",
    className = "",
    ...props
}) {
    return (
        <button
         className={`flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black md:border-none
         ${bgColor} 
         ${textColor} 
         ${className}`}
         type={type}
         {...props}
         >
            <span>
                {children}
            </span>
        </button>
    );
}

export default NavItem
