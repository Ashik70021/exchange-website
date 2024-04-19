import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-600 ">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="Email" className="block text-gray-600 ">Email</label>
                        <input type="text" name="Email" id="Email" placeholder="Email" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Confirm Password</label>
                        <input type="password" name="Confirm Password" id="password" placeholder="Confirm Password" className="w-full border px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600" />
                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#FF4240] text-gray-50">Sign up</button>

                </form>
                <p className="text-xs text-center sm:px-6 text-[]">Already have  account?
                    <NavLink to="/login"><a rel="noopener noreferrer" href="#" className="underline text-[#FF4240]"> Login</a></NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;