import React from 'react'
import ServiceLayout from '../../components/servicLayout'
import constructionImage from '../../images/construction.png'
const SecondPage = () => (
  <ServiceLayout title="Construction" img={constructionImage}>
    <p>
      SMB Group (SMB) has been a recognized and trusted corporate brand in
      Kurdistan and Iraq. Over the years, we have been involved on a multitude
      of iconic projects in Kurdistan and throughout the country. Many of our
      projects have been recognized in the industry for ingenuity and
      innovation. We are known for our unique, one-of-a-kind project work, but
      also deliver a variety of other projects from small renovations, to new
      larger developments. Whether a project is under a Construction Management,
      Project Management, General Contracting, Design-Build or alternate
      methodology, we have the experience and expertise to deliver.
    </p>
    <p>
      Dedication to strengthening our relationships and providing quality
      services has resulted in numerous alliances with clients, as well as local
      architects, subcontractors and suppliers. Many of these relationships have
      been established for years and provide us with greater insight on market
      conditions to ensure best value for our clients.
    </p>

    <section>
      <h2>Specialty Areas include, but not limited too:</h2>
      <ul class="service__list">
        <li>Building design</li>
        <li>Civil, Mechanical and Electrical Engineering</li>
        <li>Roads, Highways and Bridges</li>
        <li>Refurbishment and Fit-out</li>
        <li>Construction Management</li>
        <li>Pipeline and Flowlines</li>
      </ul>
    </section>
  </ServiceLayout>
)

export default SecondPage
