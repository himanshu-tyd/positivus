import React from 'react'
import {BrandLogos, Brands, Case, Contact, Footer, Happy, Hero, Nav, Services, Team, Testimonials, WorkProcess} from './sections'

const App = () => {
  return (
        <main className='relative' >
            <Nav/>
            <section className='section'><Hero/></section>
            <section className='section'><Brands/></section>
            <section className='section'><Services/></section>
            <section className='section'><Happy/></section>
            <section className='section'><Case/></section>
            <section className='section'><WorkProcess/></section>
            <section className='section'><Team/></section>
            <section className='section'><Testimonials/></section>
            <section className='section'><Contact/></section>
            <Footer/>
        </main>
     
  )
}

export default App