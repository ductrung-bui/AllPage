import React from "react";

type Props = {
    main: boolean;
    setMain: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Page3 = (props: Props) => {
    return (
        <div style={{ transform: props.main ? "translateY(-50%)" : "", transition: "all 400ms linear" }}>
            <div className='section3'>
                {/* <h1 style={{ marginLeft: "40%", marginTop: 0, fontSize: "60px", color: "#e85d04" }}>Các khóa học </h1> */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3em", margin: "0 20px", transform: "translateY(10%)" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2em" }}>
                        <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                            <img className='imgGrammar' src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                            <div>
                                <h1>IELTS</h1>
                                <p style={{ fontSize: "26px" }}>IELTS là một bài thi chuẩn hóa được Hội Đồng Anh đưa ra, nhằm xác định năng lực tiếng anh để phù hợp với môi trường quốc tế. Chương trình IELTS của Giáo Làng mang tính khác biệt trong phương pháp dạy và học.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                            <img className='imgGrammar' src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt="" />
                            <div>
                                <h1>NGỮ PHÁP</h1>
                                <p style={{ fontSize: "26px" }}>Ngữ pháp là một kỹ năng không thể thiếu trong quá trình nâng cao năng lực tiếng anh. Giáo Làng đào tạo ngữ pháp các lớp từ tiểu học đến THPT, thi chuyển cấp.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2em" }}>
                        <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                            <img className='imgGrammar' src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                            <div>
                                <h1>GIAO TIẾP</h1>
                                <p style={{ fontSize: "26px" }}>Là một kỹ năng đặc biệt quan trọng trong cuộc sống, Giáo Làng đã có kinh nghiệm trong việc giúp nhiều bạn học sinh giao tiếp tốt trong môi trường quốc tế.</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                            <img className='imgGrammar' src="https://expatlifeinthailand.com//assets/media/2020/03/classroom.jpg" alt="" />
                            <div>
                                <h1>TRẺ EM</h1>
                                <p style={{ fontSize: "26px" }}>Đây là một chương trình học tiếng Anh năng động được thiết kế đặc biệt cho</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 