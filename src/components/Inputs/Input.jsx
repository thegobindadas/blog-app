import React, { useId } from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="flex w-full flex-col items-start justify-start gap-2">
            {label && <label 
             className="text-xs text-slate-200" 
             htmlFor={id}>
                {label}
             </label>
            }
            <input
             className={`w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500
             ${className}`}
             type={type}
             id={id}
             ref={ref}
             {...props}
            />
        </div>
    )
})


export default Input