import React from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { Page1Dev } from './pageDev/Page1'
import { Page2Dev } from './pageDev/Page2'
import { PageEdu1 } from './pageEdu/Page1'
import { PageEdu2 } from './pageEdu/Page2'
import { PageEdu3 } from './pageEdu/Page3'
import { PageEdu4 } from './pageEdu/Page4'
import { PageEdu5 } from './pageEdu/Page5'

function App() {

  return (
    <div className="App">
      <div className='pageA'>
        <div className='pageDev'>
          <h1 style={{ color: "#f0f0ff" }}>Page Dev</h1>
          <div style={{ gap: "2em", display: "flex" }}>
            <a className='aOfMainPage' href='/Page1Dev'>Page 1</a>
            <a className='aOfMainPage' href='/Page2Dev'>Page 2</a>
            <a className='aOfMainPage' href='/Page3Dev'>Page 3</a>
          </div>
        </div>
        <div className='pageEdu'>
          <h1 style={{ color: "#f0f0ff" }}>Page Edu</h1>
          <div style={{ gap: "2em", display: "flex" }}>
            <a className='aOfMainPage' href="/Page1Edu">Page 1</a>
            <a className='aOfMainPage' href="/Page2Edu">Page 2</a>
            <a className='aOfMainPage' href="/Page3Edu">Page 3</a>
            <a className='aOfMainPage' href="/Page4Edu">Page 4</a>
            <a className='aOfMainPage' href="/Page5Edu">Page 5</a>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/Page1Edu" element={<PageEdu1 />}></Route>
        <Route path="/Page2Edu" element={<PageEdu2 />}></Route>
        <Route path="/Page3Edu" element={<PageEdu3 />}></Route>
        <Route path="/Page4Edu" element={<PageEdu4 />}></Route>
        <Route path="/Page5Edu" element={<PageEdu5 />}></Route>
        {/* Page Dev */}
        <Route path="/Page1Dev" element={<Page1Dev />}></Route>
        <Route path="/Page2Dev" element={<Page2Dev />}></Route>
      </Routes>
    </div>
  )
}

export default App
