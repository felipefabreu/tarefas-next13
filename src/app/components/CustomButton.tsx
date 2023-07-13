import { CustomButtonProps } from "../types";


const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {

    return(

        <button
            disabled={false}
            type={"button"}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleClick}
        >
            <span>
                {title}
            </span>
        </button>

    );

}

export default CustomButton;