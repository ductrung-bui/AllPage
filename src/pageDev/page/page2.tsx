import React from "react";

type Props = {
    main: boolean;
    setMain: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Page2 = (props: Props) => {
    return (
        <div style={{ transform: props.main ? "translateY(-50%)" : "", transition: "all 400ms linear" }}>
            <div className='section2' >
                <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "space-around", transform: "translateY(-30%)" }}>
                    {/* <h1 style={{ marginTop: "50%", fontSize: "60px", color: "#e85d04" }}>Hiểu thêm về chúng tôi</h1> */}
                    <p style={{ marginTop: "10px", fontSize: "40px" }}>Anh Ngữ <span style={{ color: "#e85d04" }}>Giáo Làng</span> </p>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "0 10px" }}>
                        <div style={{ width: "30%", padding: "0 20px", backgroundColor: "rgba(255,255,255,0.5)" }}>
                            <p style={{ fontSize: "60px" }}>01. Lớp học xoay quanh học sinh</p>
                            <p style={{ fontSize: "30px" }}>Hôm nay tôi rất vui mừng chào đón 60 các thầy cô giáo tiêu biểu đại diện cho đội ngũ cán bộ quản lý giáo dục và giáo viên trên cả nước.</p>
                        </div>
                        <div style={{ width: "30%", padding: "0 20px", backgroundColor: "rgba(255,255,255,0.5)" }}>
                            <p style={{ fontSize: "60px" }}>02. Phát triển ngôn ngữ tự nhiên</p>
                            <p style={{ fontSize: "30px" }}>Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.</p>

                        </div>
                        <div style={{ width: "30%", padding: "0 20px", backgroundColor: "rgba(255,255,255,0.5)" }}>
                            <p style={{ fontSize: "60px" }}>03. Giáo Dục là làm mới tư duy</p>
                            <p style={{ fontSize: "30px" }}>Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 