import Link from "next/link";

export default function ForgotPasswordPage() {
    return (
        <>
            <div className="flex h-svh flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-sm space-y-10">
                    <div>
                        <img
                            alt="Your Company"
                            src={'../img/logo.jpg'}
                            className="mx-auto h-16 w-auto rounded-tr-lg rounded-bl-lg border-4 border-amber-600 delay-700 duration-500 transition-all"
                        />
                        <h2 className="mt-10 text-center text-sm font-bold leading-snug tracking-tight text-gray-200">
                            Enter the email address associated with your account and we'll send you link to reset your password.
                        </h2>
                    </div>
                    <form action="#" method="POST" className="space-y-6">
                        <div className="relative -space-y-px rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    autoComplete="email"
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                            >
                                Send Email
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm leading-6 text-gray-500">
                        {/* Not a member?{' '} */}
                        <Link href="/auth/login" className="font-semibold text-amber-600 hover:text-amber-500">
                            Back to login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}