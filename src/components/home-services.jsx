import React from 'react'
import styles from './services.module.scss'
import Card from './common/card'

const Services = props => (
  <div className={styles.services}>
    <Card
      title="Construction"
      img="http://smbgroup-iq.com/assets/img/construction.png"
      to="/services/construction"
      body={
        <p>
          <strong>SMB</strong> Group (SMB) has been a recognized and trusted
          corporate brand in Kurdistan and Iraq. Over the years, we have been
          involved on a multitude of iconic projects in Kurdistan and throughout
          the country.
        </p>
      }
    />
    <Card
      title="Oil & Gas"
      img="http://smbgroup-iq.com/assets/img/oil-gas.jpg"
      to="/services/oilgas"
      body={
        <p>
          <strong>SMB</strong>
          is a top-tier oilfield service company with a track record in
          delivering solutions that assist oil and gas operators make the most
          of their field operations.
        </p>
      }
    />
    <Card
      title="Equipment"
      img="http://smbgroup-iq.com/assets/img/equipment.jpeg"
      to="/services/equipment"
      body={
        <p>
          <strong>SMB</strong> are one of Kurdistan’s largest and most diverse
          specialist equipment rental company, providing equipment rental and
          contract management services to key businesses in virtually every
          sector of the Kurdish industry.
        </p>
      }
    />
    <Card
      title="Logistics"
      img="http://smbgroup-iq.com/assets/img/logistics.jpg"
      to="/services/logistics"
      body={
        <p>
          <strong>SMB</strong> delivers comprehensive Integrated Logistic
          Support (ILS) services enabling our customers to adopt a disciplined
          approach to managing their assets and consumables.
        </p>
      }
    />
    <Card
      title="Life support"
      img="http://smbgroup-iq.com/assets/img/life-support.jpg"
      to="/services/lifesupport"
      body={
        <p>
          <strong>SMB</strong> is pleased to introduce itself as a major Life
          Support Service provider throughout Iraq, achieving major success as a
          leader where opportunities arise.
        </p>
      }
    />
  </div>
)

export default Services
