import React, { useId } from 'react'

const ImgInput = React.forwardRef( function ImgInput({
    label,
    type = "file",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="w-full">
            {label && <label 
             className="mb-1 inline-block" 
             htmlFor={id}>
                {label}
             </label>
            }
            <input
             className={`w-full border p-1 file:mr-4 file:border-none file:bg-[#ae7aff] file:px-3 file:py-1.5
             ${className}`}
             type={type}
             id={id}
             ref={ref}
             {...props}
            />
        </div>
    )
})


export default ImgInput