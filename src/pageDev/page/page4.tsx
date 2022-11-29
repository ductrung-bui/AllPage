import React from "react";

type Props = {
    main: boolean;
    setMain: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Page4 = (props: Props) => {
    return (
        <div style={{ transform: props.main ? "translateY(-50%)" : "", transition: "all 400ms linear" }}>
            <div className='section4'>
                {/* <h1 style={{ fontSize: "40px" }}>Quá Trình học tập </h1> */}
                <img style={{ transform: "translateY(10%)" }} src="https://yola.vn/wp-content/uploads/2018/03/Final-1.jpg" alt="" />
            </div>
        </div>
    )
} 