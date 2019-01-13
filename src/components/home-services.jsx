import React from 'react'
import styles from './services.module.scss'
import Card from './common/card'
import Img from 'gatsby-image'
const Services = props => {
  console.log(props)
  return (
    <div className={styles.services}>
      <Card
        title="Construction"
        img={<Img fluid={props.images.construction.childImageSharp.fluid} />}
        to="/services/construction"
        style={{ flex: '1 1 50%' }}
        body={
          <p>
            <strong>SMB</strong> Group (SMB) has been a recognized and trusted
            corporate brand in Kurdistan and Iraq. Over the years, we have been
            involved on a multitude of iconic projects in Kurdistan and
            throughout the country.
          </p>
        }
      />
      <Card
        title="Oil & Gas"
        img={<Img fluid={props.images.oil.childImageSharp.fluid} />}
        to="/services/oilgas"
        body={
          <p>
            <strong>SMB </strong>
            is a top-tier oilfield service company with a track record in
            delivering solutions that assist oil and gas operators make the most
            of their field operations.
          </p>
        }
        noGrow={true}
      />
      <Card
        title="Equipment"
        img={<Img fluid={props.images.equipment.childImageSharp.fluid} />}
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
        img={<Img fluid={props.images.logistics.childImageSharp.fluid} />}
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
        img={<Img fluid={props.images.support.childImageSharp.fluid} />}
        to="/services/lifesupport"
        body={
          <p>
            <strong>SMB</strong> is pleased to introduce itself as a major Life
            Support Service provider throughout Iraq, achieving major success as
            a leader where opportunities arise.
          </p>
        }
      />
    </div>
  )
}

export default Services
