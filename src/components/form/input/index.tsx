import { ChangeEvent } from "react";

interface IInputProps {
    text: string;
    type: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({
    text,
    name,
    type,
    onChange,
}) => {
    return (
        <label
            className="form-example"
            title={name}
        >
            <span>{text}</span>
            <input
                onChange={onChange}
                required
                type={type}
                name={name}
            />
        </label>
    );
};
