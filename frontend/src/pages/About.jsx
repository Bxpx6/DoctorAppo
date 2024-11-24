import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
          <p>Prescripto is a user-friendly doctor appointment website designed to bridge the gap between patients and healthcare professionals. With just a few clicks, users can find and book appointments with specialists, general practitioners, or nearby clinics. Our platform ensures a seamless experience by offering personalized recommendations and real-time availability of doctors.  </p>
          <p>At Prescripto, we prioritize convenience and efficiency. Patients can browse doctor profiles, check reviews, and access vital details about their expertise. The website also supports secure communication, enabling users to consult online when needed. With advanced features like reminders and digital prescriptions, we aim to redefine the way healthcare is accessed.</p>
          <p>Prescripto is committed to improving healthcare accessibility. By integrating technology with care, we create a platform that’s not just functional but empathetic. Whether for routine check-ups or urgent consultations, Prescripto ensures that healthcare is always within reach, fostering a healthier and happier community for all</p>
        </div>
      </div>
    </div>
  )
}

export default About
