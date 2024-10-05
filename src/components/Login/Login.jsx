import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Input, Checkbox, Button } from "../index"

function Login() {

    const { register, handleSubmit } = useForm()

    const loginUser = (data) => {
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
                <h1 className="mb-2 text-5xl font-extrabold text-white">Log in</h1>
                <p className="text-xs text-slate-400">Before we start, please log into your account</p>
            </div>
            <div className="my-14 w-full flex-col items-start justify-start gap-4">
                <form onSubmit={handleSubmit(loginUser)}>
                    <div className='space-y-5'>
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
                        <div className="inline-flex w-full items-center justify-between">
                            <Checkbox
                            label="Remember me"
                            type="checkbox"
                            {...register("rememberMe")}
                            />

                            <Link to="/forgot-password">
                                <p className="cursor-pointer text-sm text-white hover:underline">Forgot password?</p>
                            </Link>
                        </div>
                        
                        <Button type="submit"> Log in </Button>
                    </div>
                </form>

                <p className="my-14 text-sm font-light text-white">
                    Don&#x27;t have an account?
                    <Link to="/register">
                        <span className="cursor-pointer font-bold hover:underline"> Create an account </span>
                    </Link>
                </p>
            </div>
        </div>
    </div>

  )
}

export default Login
