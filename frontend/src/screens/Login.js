import { useEffect, useRef, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { connect } from 'react-redux';
import { signIn } from '../utils/Actions/authActions';
import { useToast } from '@chakra-ui/react';

function Login(props) {
    let { url } = useRouteMatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState(false);
    const passwordInput = useRef();
    const { authError } = props;
    const toast = useToast();

    useEffect(() => {
        const showToast = () => {
            let description = "";
            switch (authError) {
                case "auth/user-not-found":
                    description = "Invalid email and password!";
                    break;
                case "auth/wrong-password":
                    description = "Invalid Password or User doesn't exist";
                    break;
                case "auth/network-request-failed":
                    description = "Something went wrong. Please check the network and try again";
                    break;
                default:
                    break;
            };
            toast({
                title: "An Error Occurred",
                position: "top-right",
                description,
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        };

        if (authError) {
            showToast()
        };
        
    }, [authError,toast]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUserIn({ email, password });
    }

    const togglePassword = () => {
        setToggle(!toggle);
        if (passwordInput.current.type === "password") {
            passwordInput.current.type = "text"
        } else{
            passwordInput.current.type = "password";
        }
    }

    return (
        <div className="flex h-full w-full">
            <div className="hidden lg:block lg:w-1/2 bg-login bg-red-500 text-white h-full">
                <div className="bg-blue-900 bg-opacity-75 h-full flex  flex-column justify-center items-center">
                    <div className="w-4/5">
                        <img className="m-auto my-3" src={logo} alt="logo" height="100" width="100" />
                        <h1 className="text-center my-3 font-bold text-xl">ChatWithMe App</h1>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full md:3/4 lg:w-1/2 mx-auto h-full">
                <div className="w-full bg-white h-full m-auto flex justify-center items-center">
                    <form className="bg-white rounded px-5 py-4 mt-1 w-full md:w-3/4 lg:w-4/5" onSubmit={handleSubmit}>
                        <div className="text-black mt-8 mb-6 text-center">
                            <h1 className="text-3xl font-bolder">Welcome Back</h1>
                            <p className="text-base md:text-sm">Login in to your existing account</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-base md:text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="
                                shadow appearance-none
                                border rounded w-full
                                py-4 px-3 text-gray-700
                                leading-tight 
                                focus:outline-none
                                focus:shadow-outline"
                                type="text"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-1">
                            <label className="block text-black text-base md:text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow 
                                appearance-none
                                border
                                rounded w-full py-4 px-3
                                text-gray-700 mb-3 leading-tight
                                focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                ref={passwordInput}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setPassword(e.target.value);
                                }}
                            />
                            <span className="toggle-password-icon" onClick={togglePassword}>
                                {toggle ? <FiEyeOff size="20px" /> : <FiEye size="20px" />}
                            </span>
                            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                        </div>
                        <div className="text-right mb-3">
                            <Link className="inline-block align-baseline font-bold text-base md:text-sm text-blue-500 hover:text-blue-800" to="/forget-password">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className="text-center">
                            <button className="w-40 shadow-lg rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-red-400 hover:to-pink-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Login
                            </button>
                        </div>
                        <div className="my-6 text-center">
                            <p className="text-black text-base md:text-sm">
                                Don't have an account? {" "}
                                <Link className="text-base md:text-sm text-blue-700 hover:text-black" to={`${url}register`}>
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authErr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUserIn: (credentials) => dispatch(signIn(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
