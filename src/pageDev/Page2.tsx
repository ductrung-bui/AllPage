import './CPage2Dev.css'
import React, { useEffect } from 'react';
import img3D1 from './assetsDev/img3D1.svg'
import img3D2 from './assetsDev/img3D2.svg'
import img3D3 from './assetsDev/img3D3.svg'
import img3D4 from './assetsDev/img3D4.svg'
import img3D5 from './assetsDev/img3D5.svg'
import img3D6 from './assetsDev/img3D6.svg'
import img3D7 from './assetsDev/img3D7.svg'
import img3D8 from './assetsDev/img3D8.svg'
import img3D9 from './assetsDev/img3D9.svg'
import img3D10 from './assetsDev/img3D10.svg'
import img3D11 from './assetsDev/img3D11.svg'
import img3D12 from './assetsDev/img3D12.svg'
import img3D13 from './assetsDev/img3D13.svg'

export const Page2Dev = () => {


    return (
        <div className='AppOfPage2Dev'>
            <div id='mmainP2D' className="mainP2D">
                <img id='backgroundMainP2DD' className='backgroundMainP2D' src={img3D10}
                />
                <div style={{ color: "#fff", margin: "50px" }}>
                    <div className='sectionPD2'>
                        <div style={{ flex: 1 }}>
                            <h1 style={{ fontSize: "60px" }}>
                                Lorem ipsum dolor sit.
                            </h1>
                        </div>
                        <div style={{ flex: 1 }}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}