import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();

    const { loading, error } = useSelector(
        (state) => state.auth
    );

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            loginUser({
                email: formData.email,
                password: formData.password
            })
        );
    };

    return (
        <div>
            <h1>Admin Login</h1>

            <form>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="button"
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    {loading
                        ? "Logging in..."
                        : "Login"}
                </button>
                <Link to={'/register'}>Register here</Link>

                {error && (
                    <p>{error}</p>
                )}
            </form>
        </div>
    );
};

export default Login;