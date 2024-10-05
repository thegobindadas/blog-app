import React, { useId } from 'react'
import { CheckboxIcon } from "../index"

function Checkbox({
    label,
    type = "checkbox",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className="mr-4 flex items-center">
            <input
             className={`absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block
             ${className}`}
             type={type}
             id={id}
             ref={ref}
             {...props}
            />

            { CheckboxIcon && 
                <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
                    <CheckboxIcon />
                </div>
            }
            
            { label && 
                <div className="ml-3 text-sm leading-6">
                    <label 
                    className="text-sm font-medium text-white" 
                    htmlFor={id}
                    >
                        {label}
                    </label>
                </div>
            }
        </div>
    )
}


export default React.forwardRef(Checkbox)
