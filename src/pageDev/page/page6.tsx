import React from "react";

type Props = {
    main: boolean;
    setMain: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Page6 = (props: Props) => {
    return (
        <div style={{ transform: props.main ? "translateY(-50%)" : "" }}>Trung</div>
    )
} 