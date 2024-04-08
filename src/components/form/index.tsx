import { Link } from "react-router-dom";
import { Input } from "./input";
import { ChangeEvent, FormEventHandler, useState } from "react";

export const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(formData);

        setFormData({
            name: "",
            password: "",
        });
    };

    return (
        <>
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
                {formData && (
                    <button type="submit">
                        {/* <Link to={"/admin"}>Submit</Link> */} submit
                    </button>
                )}
            </form>
        </>
    );
};
