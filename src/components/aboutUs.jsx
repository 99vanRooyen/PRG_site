import React from 'react'

export default function  AboutUs() {
  return (

    //The background for my component
    <div className="w-full flex flex-col  justify-start  items-center bg-[url('./assets/Home-Bg.png')] bg-no-repeat bg-center">
        <br/>
      <div className="bg-[#b8d46593] w-[95%] p-7 flex flex-col  justify-around ">
         <h1 className="  flex justify-center items-center font-bold text-black p-3 text-2xl">ABOUT US</h1>
         <p className="p-3 text-black">At Print Rebel Graphix, we believe in bold creativity and top-quality printing
            Specializing in custom apparel, business branding, signage, and promotional materials,
            we bring your vision to life with precision and style. Our team is dedicated to delivering
           eye catching designs using premium materials and advanced printing techniques.
           With fast turnaround times and a passion for perfection, we ensure your brand
           stands out in the crowd. Whether you’re a business looking to make an impact or
           an individual with a unique idea, we’re here to make it happen</p>
      </div>
      <br/>
      <div className="bg-[#545f2c] w-[95%] p-7 flex flex-col  justify-around ">
        <h1 className="flex justify-center items-center font-bold text-white p-3 text-2xl ">VALUES</h1>
        <p className="p-3">At Print Rebel Graphix, our values drive everything we do. We believe in creativity,
        pushing boundaries to deliver unique designs. Quality is our priority, ensuring every
        print is sharp and long-lasting. We value customer satisfaction, working closely with
        you to bring your vision to life. Most importantly, we embrace a rebellious spirit
        because standing out is what we do best</p>
      </div>  

      <br/>
      <div className="bg-[#b8d46593] w-[95%] p-7 flex flex-col  justify-around ">
       <h1 className=" flex justify-center items-center font-bold text-black p-3 text-2xl ">MISSION</h1> 
        <p className="p-3 text-black">At Print Rebel Graphix, our mission is to transform ideas into bold, high-quality prints
        that leave a lasting impression. We’re dedicated to providing creative,
         customized solutions for businesses and individuals who refuse to blend in.
         With premium materials, innovative techniques, and a passion for excellence,
        we ensure every design stands out—because printing isn’t just our job, it’s our art,
        and we do it with rebellion</p>

      </div> 

      
    </div>
  )
}