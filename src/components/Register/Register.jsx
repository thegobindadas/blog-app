import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Input, Checkbox, Button } from "../index"

function Register() {

    const { register, handleSubmit } = useForm()

    const registerUser = (data) => {
        try {
            console.log("hello");
            console.log(data);
        } catch (error) {
            console.log(error);
            throw error
        }
    }


  return (
    <div className="mx-auto flex w-full items-stretch gap-10 flex items-center justify-center">
        <div className="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
            <div className="w-full">
                <h1 className="mb-2 text-5xl font-extrabold text-white">Register</h1>
                <p className="text-xs text-slate-400">Before we start, please create your account</p>
            </div>
            <div className="my-14 w-full flex-col items-start justify-start gap-4">
                <form onSubmit={handleSubmit(registerUser)}>
                <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name..."
                        autoComplete="off"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        type="email"
                        placeholder="Enter your email..."
                        autoComplete="off"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password..."
                        autoComplete="off"
                        {...register("password", {
                            required: true,})}
                        />
                        <Checkbox
                        label={`I agree to the terms and conditions`}
                        type="checkbox"
                        {...register("termsAndCondition", {
                            required: true,})}
                        />
                        
                        <Button type="submit"> Create Account </Button>
                    </div>
                </form>

                <p className="my-14 text-sm font-light text-white">
                    Already registered? 
                    <Link to="/login">
                        <span className="cursor-pointer font-bold hover:underline"> Sign in to your account</span>
                    </Link>
                </p>
            </div>
        </div>
    </div>

  )
}

export default Register
