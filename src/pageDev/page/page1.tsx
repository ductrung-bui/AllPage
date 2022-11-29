import React from "react";

type Props = {
    main: boolean;
    setMain: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Page1 = (props: Props) => {

    return (
        <main style={{ transform: props.main ? "translateY(-50%)" : "", transition: "all 400ms linear" }}>
            <div className='section'>
                <div style={{ position: "absolute", display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                    <h1>Học Anh Ngữ tại Giáo Làng </h1>
                    <p >Comprehensive Solution, driven by trust </p>
                </div>
            </div>
        </main>
    )
} 