import { routes } from "../../constants/routes";
import { Input } from "./input";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Form = () => {
    const [initialValue, setInitialValue] = useState({
        name: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setInitialValue((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(initialValue);
        navigate(routes.admin);
    };

    return (
        <section className="section-form">
            <div className="container">
                <h1>Login Form</h1>
                <form
                    onSubmit={handleSubmit}
                    className="form-example"
                    id="myForm"
                >
                    <Input
                        text="Enter your name:"
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                    <Input
                        text="Enter your password:"
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                    {initialValue && (
                        <button type="submit">
                            <p>Submit</p>
                        </button>
                    )}
                </form>
            </div>
        </section>
    );
};
