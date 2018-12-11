import React from 'react'
import { Link } from 'gatsby'
import ServiceLayout from '../../components/servicLayout'
import LogisticImage from '../../images/life-support.jpg'
const SecondPage = () => (
  <ServiceLayout title="Life Support" img={LogisticImage}>
    <p>
      SMB is pleased to introduce itself as a major Life Support Service
      provider throughout Iraq, achieving major success as a leader where
      opportunities arise.
    </p>
    <p>
      SMB is powered by perseverance, dedication, and commitment to serve it
      clients. With three regional offices throughout Iraq and unprecedented
      success. Being an organization with extensive resources, experience and
      expertise in the service industry, SMB is all set to meet any challenges
      placed in its path. We are interested and highly keen in meeting your
      needs, preferences, and requirements.
    </p>
    <section>
      <h2>Non-Governmental Organization (NGO) and Private Sector Services</h2>
      <p>
        SMB also extends our expertise in services to Non-Governmental
        Organizations and Private Sectors. SMB has been involved in several
        projects over the years assisting specialty organizations with the
        supply or services in multiple areas.
      </p>
    </section>
    <section>
      <h2>Our services have consisted of the following, but not limited to:</h2>
      <ul class="service__list">
        <li class="a">Construction and Supply of Ambulances</li>
        <li class="a">Military and Civilian Clothing and Accessories</li>
        <li class="a">Armored Vehicles</li>
        <li class="a">Food Baskets</li>
        <li class="a">Wellness and Life Support Products</li>
      </ul>
    </section>
  </ServiceLayout>
)

export default SecondPage
