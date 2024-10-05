import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className="mb-1 inline-block">{label}</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500 ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)