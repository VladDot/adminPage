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
        <>
            <div className="form-example">
                <label title={name}>{text} </label>
                <input
                    onChange={onChange}
                    required
                    type={type}
                    name={name}
                />
            </div>
        </>
    );
};
