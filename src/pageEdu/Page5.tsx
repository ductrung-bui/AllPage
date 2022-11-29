import imgS1 from './assetsEdu/section1.svg';
import imgS2 from './assetsEdu/section2.svg';
import imgS3 from './assetsEdu/section3.svg';
import imgS4 from './assetsEdu/section4.svg';
import './CPage5Edu.css'

export const PageEdu5 = () => {

    return (
        <div className='AppOfPage5Edu'>

            <div className='main7'>
                <div className='main7cover'>
                    <div className='mainTitle'>
                        <p style={{ fontSize: "100px", margin: 0 }}>Giáo Làng</p>
                        <p style={{ fontSize: "30px" }}>Comprehensive Solution, driven by trust</p>
                    </div>
                    <div className='mainImg'>
                        <img src="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" width={300} />
                    </div>
                </div>
            </div>
            <div className='coverMain7'>
                <div className='box7'>
                    <div className='childBox7'>
                        <h1>Lớp học xoay quanh học sinh</h1>
                        <p>Hôm nay tôi rất vui mừng chào đón 60 các thầy cô giáo tiêu biểu đại diện cho đội ngũ cán bộ quản lý giáo dục và giáo viên trên cả nước.</p>
                    </div>
                </div>
                <div className='box7'>
                    <div className='childBox7'>
                        <h1>Phát triển ngôn ngữ tự nhiên</h1>
                        <p>Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.</p>
                    </div>
                </div>
                <div className='box7'>
                    <div className='childBox7'>
                        <h1>Giáo Dục là làm mới tư duy</h1>
                        <p>Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "5em" }}></div>
            <div className='sectionMain7'>
                <div className='coverSectionM7'>
                    <div style={{ width: "60%" }}>
                        <h1 style={{ fontSize: "50px", fontWeight: "600", color: "#e63946" }}>IELTS</h1>
                        <p style={{ fontSize: "25px" }}>
                            IELTS là một bài thi chuẩn hóa được Hội Đồng Anh đưa ra, nhằm xác định năng lực tiếng anh để phù hợp với môi trường quốc tế. Chương trình IELTS của Giáo Làng mang tính khác biệt trong phương pháp dạy và học.
                        </p>
                    </div>
                    <div className="imgSection">
                        <img src={imgS1} width={300} height={300} />
                    </div>
                </div>
                <div className='coverSectionM7'>
                    <div className="imgSection">
                        <img src={imgS2} width={300} height={300} />
                    </div>
                    <div style={{ width: "60%" }}>
                        <h1 style={{ fontSize: "50px", fontWeight: "600", color: "#e63946" }}>
                            NGỮ PHÁP
                        </h1>
                        <p style={{ fontSize: "25px" }}>
                            Ngữ pháp là một kỹ năng không thể thiếu trong quá trình nâng cao năng lực tiếng anh. Giáo Làng đào tạo ngữ pháp các lớp từ tiểu học đến THPT, thi chuyển cấp.
                        </p>
                    </div>
                </div>
                <div className='coverSectionM7'>
                    <div style={{ width: "60%" }}>
                        <h1 style={{ fontSize: "50px", fontWeight: "600", color: "#e63946" }}>
                            GIAO TIẾP
                        </h1>
                        <p style={{ fontSize: "25px" }}>
                            Là một kỹ năng đặc biệt quan trọng trong cuộc sống, Giáo Làng đã có kinh nghiệm trong việc giúp nhiều bạn học sinh giao tiếp tốt trong môi trường quốc tế.
                        </p>
                    </div>
                    <div className="imgSection">
                        <img src={imgS3} width={300} height={300} />
                    </div>
                </div>
                <div className='coverSectionM7'>
                    <div className="imgSection">
                        <img src={imgS4} width={300} height={300} />
                    </div>
                    <div style={{ width: "60%" }}>
                        <h1 style={{ fontSize: "50px", fontWeight: "600", color: "#e63946" }}>
                            TRẺ EM
                        </h1>
                        <p style={{ fontSize: "25px" }}>
                            Đây là một chương trình học tiếng Anh năng động được thiết kế đặc biệt cho học sinh từ 3 đến 12 tuổi
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ height: "10em" }}></div>
            <div className='section2Main7'>
                <div>
                    <h1>Our <span style={{ color: "#e63946" }}>Achievement</span></h1>
                </div>
                <div style={{ display: "flex", gap: "2em", fontSize: "40px", fontWeight: "600" }}>
                    <p><span style={{ color: "#e63946" }}>100000 </span>Student</p>
                    <p><span style={{ color: "#e63946" }}>100+ </span> Teachers</p>
                    <p><span style={{ color: "#e63946" }}>30 </span> Cities</p>
                    <p><span style={{ color: "#e63946" }}>80 </span> Centers</p>
                </div>
            </div>
            <div style={{ height: "6em", }}></div>
            <div style={{ textAlign: "center", backgroundColor: "#edede9", height: "105vh", width: "100%" }}>
                <div style={{ fontSize: "50px", fontWeight: "600" }}>Quá trình học</div>
                <div>
                    <img className='imgQTH' style={{ height: "90vh", width: "80%" }} src="https://yola.vn/wp-content/uploads/2018/03/Final-1.jpg" />
                </div>
            </div>
            <div style={{ height: "6em", }}> </div>
            <div style={{ textAlign: "center" }}>
                <h1>Contact</h1>
            </div>
            <div style={{ height: "6em", }}>
            </div>
        </div>
    )
}


