import img1 from './assetsEdu/img1.jpg'
import './CPage4Edu.css'

export const PageEdu4 = () => {

    return (
        <div>
            <div className='container'>
                <div className='sectionn'>
                    <div style={{ position: "absolute", display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                        <h1>Học Anh Ngữ tại Giáo Làng </h1>
                        <p >Comprehensive Solution, driven by trust </p>
                    </div>
                </div>
                <div className='sectionn2'>
                    <div style={{ position: "absolute", display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "space-around" }}>
                        <h1 style={{ marginTop: "5%", fontSize: "60px", color: "#e85d04" }}>Hiểu thêm về chúng tôi</h1>
                        <p style={{ marginTop: "2%", fontSize: "40px" }}>Anh Ngữ <span style={{ color: "#e85d04" }}>Giáo Làng</span> </p>
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
                <div className='sectionn3'>
                    <h1 style={{ marginLeft: "40%", marginTop: 0, fontSize: "60px", color: "#e85d04" }}>Các khóa học </h1>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3em", margin: "0 20px", }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2em" }}>
                            <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                                <img className='imgGrammar' src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                                <div>
                                    <h1 style={{ color: "#000" }}>IELTS</h1>
                                    <p style={{ fontSize: "26px", color: "#000" }}>IELTS là một bài thi chuẩn hóa được Hội Đồng Anh đưa ra, nhằm xác định năng lực tiếng anh để phù hợp với môi trường quốc tế. Chương trình IELTS của Giáo Làng mang tính khác biệt trong phương pháp dạy và học.</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                                <img className='imgGrammar' src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt="" />
                                <div>
                                    <h1 style={{ color: "#000" }}>NGỮ PHÁP</h1>
                                    <p style={{ fontSize: "26px", color: "#000" }}>Ngữ pháp là một kỹ năng không thể thiếu trong quá trình nâng cao năng lực tiếng anh. Giáo Làng đào tạo ngữ pháp các lớp từ tiểu học đến THPT, thi chuyển cấp.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2em" }}>
                            <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                                <img className='imgGrammar' src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                                <div>
                                    <h1 style={{ color: "#000" }}>GIAO TIẾP</h1>
                                    <p style={{ fontSize: "26px", color: "#000" }}>Là một kỹ năng đặc biệt quan trọng trong cuộc sống, Giáo Làng đã có kinh nghiệm trong việc giúp nhiều bạn học sinh giao tiếp tốt trong môi trường quốc tế.</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", width: "50%", backgroundColor: "rgba(255,255,255,0.5)" }}>
                                <img className='imgGrammar' src="https://expatlifeinthailand.com//assets/media/2020/03/classroom.jpg" alt="" />
                                <div>
                                    <h1 style={{ color: "#000" }}>TRẺ EM</h1>
                                    <p style={{ fontSize: "26px", color: "#000" }}>Đây là một chương trình học tiếng Anh năng động được thiết kế đặc biệt cho</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sectionn4'>
                    <h1 style={{ fontSize: "40px", color: "#000" }}>Quá Trình học tập </h1>
                    <img src="https://yola.vn/wp-content/uploads/2018/03/Final-1.jpg" alt="" />
                </div>
                <div className='sectionn5'>
                    <h1 style={{ color: "#fff" }}>Các câu hỏi thường gặp</h1>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <h1 style={{ color: "#fff" }}>Contact</h1>
                </div>
            </div>

        </div>
    )
}


