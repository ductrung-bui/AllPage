import './CPage1Edu.css'
import background from "./assetsEdu/background.png";
import attent from "./assetsEdu/attent.svg";
import attent2 from "./assetsEdu/attent2.svg";
import attent3 from "./assetsEdu/attent3.svg";
import section1 from "./assetsEdu/sectionImage.svg";
import section2 from "./assetsEdu/sectionImage2.svg";
import contact from "./assetsEdu/ContactSvg.svg";
import footer from "./assetsEdu/imgFooter.svg";
import footer2 from "./assetsEdu/imgFooter2.svg";
import footer3 from "./assetsEdu/imgFooter3.svg";


export const PageEdu1 = () => {

    return (
        <div className='AppPageEdu1'>

            <div className='main'>
                <div className='mainCover'>
                    <div className='main-left'>
                        <p style={{ margin: "0" }}>TRUNG TÂM ANH NGỮ</p>
                        <p className='titleBackground'>Giáo Làng</p>
                        <p style={{ fontSize: "30px" }}>Comprehensive Solution, driven by trust</p>
                    </div>
                    <div className='main-right'>
                        <img className='main-right-image' id="img" src={background} alt="" width={550} />
                    </div>
                </div>
            </div>
            <div style={{ height: "5em" }}></div>
            <div style={{ color: "#9146FF", marginLeft: "30%", fontSize: "30px", }}>
                <h1>Hiểu thêm về chúng tôi</h1>
            </div>
            <div style={{ height: "2em" }}></div>

            <div className='section'>
                <div>
                    <div style={{ display: "flex" }}>
                        <div className='box'>
                            <span className='box-span'>
                                <img id="img" src={attent} width={100} />
                            </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "50%", marginLeft: "100px" }}>
                            <h1>01. Lớp học xoay quanh học sinh</h1>
                            <p style={{ fontSize: "24px" }}>Hôm nay tôi rất vui mừng chào đón 60 các thầy cô giáo tiêu biểu đại diện cho đội ngũ cán bộ quản lý giáo dục và giáo viên trên cả nước.</p>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className='box' style={{ transform: "translateY(20%)" }}>
                            <span className='box-span'>
                                <img id="img" src={attent2} width={180} />
                            </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", width: "50%", marginLeft: "100px" }}>
                            <h1>02. Phát triển ngôn ngữ tự nhiên</h1>
                            <p style={{ fontSize: "24px" }}>Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className=' box3'>
                        <span className='box-span'>
                            <img id="img" src={attent3} />
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <h1>03. Giáo dục làm mới tư duy</h1>
                        <p style={{ fontSize: "24px" }}>Tư duy của mỗi học sinh cần được phát triển để hội nhập với thời đại.</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "12em" }}></div>
            <div className='quatrinh'>
                <h1 style={{ color: "#9146FF", marginLeft: "40%", fontSize: "40px" }}>Quá trình học tập</h1>
                <img id="img" src="https://yola.vn/wp-content/uploads/2018/03/Final-1.jpg" alt="" />
            </div>
            <div style={{ color: "#9146FF", marginLeft: "40%", fontSize: "26px", }}>
                <h1>CÁC KHÓA HỌC</h1>
            </div>
            <div className='section2'>
                <div>
                    <img id="img" src={section1} width={600} />
                </div>
                <div>
                    <p style={{ fontSize: "46px", fontWeight: "800", color: "#9146FF" }}>IELTS</p>
                    <p style={{ fontSize: "26px" }}>IELTS là một bài thi chuẩn hóa được Hội Đồng Anh đưa ra, nhằm xác định năng lực tiếng anh để phù hợp với môi trường quốc tế. Chương trình IELTS của Giáo Làng mang tính khác biệt trong phương pháp dạy và học.</p>
                    <a className='buttonBackground' href="">Click me</a>
                </div>
            </div>
            <div className='section2'>
                <div>
                    <p style={{ fontSize: "46px", fontWeight: "800", color: "#9146FF" }}>NGỮ PHÁP</p>
                    <p style={{ fontSize: "26px" }}>Ngữ pháp là một kỹ năng không thể thiếu trong quá trình nâng cao năng lực tiếng anh. Giáo Làng đào tạo ngữ pháp các lớp từ tiểu học đến THPT, thi chuyển cấp.</p>
                    <a className='buttonBackground' href="">Click me</a>
                </div>
                <div>
                    <img id="img" src={section2} width={600} />
                </div>
            </div>
            <div className='section2'>
                <div>
                    <img id="img" src={section1} width={600} />
                </div>
                <div>
                    <p style={{ fontSize: "46px", fontWeight: "800", color: "#9146FF" }}>GIAO TIẾP</p>
                    <p style={{ fontSize: "26px" }}>Là một kỹ năng đặc biệt quan trọng trong cuộc sống, Giáo Làng đã có kinh nghiệm trong việc giúp nhiều bạn học sinh giao tiếp tốt trong môi trường quốc tế.</p>
                    <a className='buttonBackground' href="">Click me</a>
                </div>
            </div>
            <div className='section2'>
                <div>
                    <p style={{ fontSize: "46px", fontWeight: "800", color: "#9146FF" }}>TRẺ EM</p>
                    <p style={{ fontSize: "26px" }}>Đây là một chương trình học tiếng Anh năng động được thiết kế đặc biệt cho học sinh từ 3 đến 12 tuổi</p>
                    <a className='buttonBackground' href="">Click me</a>
                </div>
                <div>
                    <img id="img" src={section2} width={600} />
                </div>
            </div>
            <div style={{ height: "6em" }}></div>
            <div className='contact'>
                <div className='contactCover'>
                    <div className='main-left'>
                        <p className='titleBackground2'>GIÁO LÀNG ĐƯỢC TIN TƯỞNG TRONG 5 NĂM VỪA QUA</p>
                    </div>
                    <p style={{ fontSize: "24px", display: "flex", textAlign: "center", justifyContent: "center", marginTop: "2em" }}>Sự tin tưởng của mọi người là chìa khóa để Giáo Làng có được sự phát triển như hôm nay.</p>
                    <div style={{ height: "3em" }}></div>
                    <div style={{ display: "flex", gap: "6em", textAlign: "center", justifyContent: "center", fontSize: "26px" }}>
                        <div>
                            <h2>100000</h2>
                            <p>Student</p>
                        </div>
                        <div>
                            <h2>100+</h2>
                            <p>Teacher</p>
                        </div>
                        <div>
                            <h2>30</h2>
                            <p>Cities</p>
                        </div>
                        <div>
                            <h2>80</h2>
                            <p>Centers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "3em" }}></div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "#9146FF", fontSize: "30px" }}>FAQS</h1>
                <p style={{ color: "#9146FF", fontSize: "30px" }}>Các câu hỏi thường gặp</p>
                <p style={{ color: "#9146FF", fontSize: "30px" }} >And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <input type="text" style={{ width: "100%", height: "5vh", marginBottom: "20px" }} />
                <input type="text" style={{ width: "100%", height: "5vh", marginBottom: "20px" }} />
                <input type="text" style={{ width: "100%", height: "5vh", marginBottom: "20px" }} />
                <input type="text" style={{ width: "100%", height: "5vh", marginBottom: "20px" }} />
                <input type="text" style={{ width: "100%", height: "5vh", marginBottom: "20px" }} />
            </div >

            <div style={{ height: "3em" }}></div>

            <div className='contact'>
                <div className='contactCover'>
                    <h1>Muc dang ki</h1>
                </div>
            </div>
            <div style={{ height: "3em" }}></div>

            <div className='contactFooter'>
                <div className='box'>
                    <img id="img" src={footer} width={180} />
                </div>
                <div className='box'>
                    <img id="img" src={footer2} width={180} />
                </div>
                <div className='box'>
                    <img id="img" src={footer3} width={180} />
                </div>
            </div>
        </div>
    )
}


