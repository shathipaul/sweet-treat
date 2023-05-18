'use client'
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    name: string;
    email: string;
    password: string | number;
  }

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-sm bg-white/30 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                            <input type="name" {...register("name", { required: true })} name="name" id="name" className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Alex Dowson"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" {...register("email", { required: true })} name="email" id="email" className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" {...register("password", { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ , required: true })} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"/>
                            {errors.password && "Password must include uppercase, lowercase, a number and 8 characters long"}
                            
                        </div>
                        <button type="submit" className="flex mx-auto text-white border bg-gray-500 py-2 px-6 rounded-md">Sign in</button>
                        <p className="text-sm font-light text-gray-300">
                            Dont have an account yet? <a href="/" className="font-medium text-primary-200 hover:underline">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
  }
  