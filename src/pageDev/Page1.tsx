import svg from './assetsDev/svgviewer-output.svg'
import './CPage1Dev.css'


export const Page1Dev = () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    });

    const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach((element) => observer.observe(element));

    return (
        <div>
            <div className='mainn' >
                <div className='cloudAni'>
                    <img className='cloud1' src="https://thumb.tildacdn.com/tild6536-3031-4932-b531-306465643064/-/resize/420x/-/format/webp/Saly-1-1.png" alt="" />
                    <img className='cloud2' src="https://thumb.tildacdn.com/tild6536-3031-4932-b531-306465643064/-/resize/420x/-/format/webp/Saly-1-1.png" alt="" />
                    <img className='cloud3' src="https://thumb.tildacdn.com/tild6536-3031-4932-b531-306465643064/-/resize/420x/-/format/webp/Saly-1-1.png" alt="" />
                    <img className='cloud4' src="https://thumb.tildacdn.com/tild6536-3031-4932-b531-306465643064/-/resize/420x/-/format/webp/Saly-1-1.png" alt="" />
                </div>
                <div className='inMainn'>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className='inMainn-left'>
                            <p style={{ fontSize: "40px", color: "#000", fontWeight: "600" }}>Trung tâm Anh Ngữ</p>
                            <h1 className='titleMainn' >Giáo Làng</h1>
                            {/* <a className='Button' href=""> Click me</a> */}
                            <p style={{ fontSize: "25px", color: "#000", fontWeight: "500", width: "50%", }}>Được mọi người tin tưởng trong 5 năm về giáo giục và chất lượng giảng dạy</p>
                        </div>
                        <div className='inMainn-right-image'>
                            <img className='svgReact' src={svg} width={600} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h1 style={{ marginLeft: "100px", fontSize: "40px", color: "#000", fontWeight: "600", zIndex: "1000" }}>Các khóa học nổi bật </h1>
                        <div style={{ gap: "2em", display: "flex" }}>
                            <div className='boxMainn' style={{ width: "28vh", zIndex: "1000", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "25vh", marginLeft: "100px" }}>
                                <img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                            </div>
                            <div className='boxMainn' style={{ width: "28vh", zIndex: "1000", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "25vh", marginLeft: "100px" }}>
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                            </div>
                            <div className='boxMainn' style={{ width: "28vh", zIndex: "1000", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "25vh", marginLeft: "100px" }}>
                                <img src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt="" />
                            </div>
                            <div className='boxMainn' style={{ width: "28vh", zIndex: "1000", borderRadius: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "25vh", marginLeft: "100px" }}>
                                <img src="https://expatlifeinthailand.com//assets/media/2020/03/classroom.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className='inMainn-right'>
            <div className='coverMainn'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt a odio corporis illum nam quaerat necessitatibus sapiente modi, quae voluptatum suscipit fuga delectus dolorem perspiciatis? Aliquid aliquam vero quos.</p>
            </div>
            <div className='coverMainn'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt a odio corporis illum nam quaerat necessitatibus sapiente modi, quae voluptatum suscipit fuga delectus dolorem perspiciatis? Aliquid aliquam vero quos.</p>
            </div>
            <div className='coverMainn'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nesciunt a odio corporis illum nam quaerat necessitatibus sapiente modi, quae voluptatum suscipit fuga delectus dolorem perspiciatis? Aliquid aliquam vero quos.</p>
            </div>
          </div> */}
                </div>
            </div>
            {/* <div style={{ height: "20em" }}></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontSize: "44px" }}>Title</h1>
        <div className="paper">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat a veniam laborum natus accusantium doloremque eligendi est. Beatae voluptatum, nesciunt numquam incidunt doloribus libero harum cumque at maxime magnam nam.</p>
        </div>
      </div>
      <div style={{ height: "6em" }}></div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <a className='Button Button2'> click me
          <div className='child'>

          </div>
        </a>
      </div>


      <div style={{ height: "6em" }}></div> */}

        </div>
    )
}


