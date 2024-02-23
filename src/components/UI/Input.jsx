import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
    return (
        <input
            ref={ref}
            className=" border-none bg-inputBg focus:bg-inputBgFocus w-[100%] outline-none text-primary p-2 placeholder:text-secondary"
            {...props}
        />
    )
})

export default Input
