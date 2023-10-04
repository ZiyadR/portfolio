import React from 'react'
import Project from './Project'

const WorkPage = () => {
  return (
    <main className="container mx-auto py-10 min-h-[90vh]">
      <ul className="flex flex-wrap">
        <li className="min-w-[50%] py-6">
          <Project title="Webdesign" image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </li>
        <li className="min-w-[50%] py-6">
          <Project title="Branding" image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </li>
        <li className="min-w-[50%] py-6">
          <Project title="Prints" image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </li>
        <li className="min-w-[50%] py-6">
          <Project title="Social Media" image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </li>
        <li className="min-w-[50%] py-6">
          <Project title="Logo Design" image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </li>
        <li className=" min-w-[50%] py-6">
          <Project title="Typography" image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" />
        </li>
      </ul>
    </main>
  )
}

export default WorkPage