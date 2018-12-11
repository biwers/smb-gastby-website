import React from 'react'
import { Link } from 'gatsby'
import ServiceLayout from '../components/servicLayout'

const SecondPage = () => (
  <ServiceLayout title="Careers" isNotService>
    <p>
      SMB Group is always looking for new talent. As a growing organization we
      have rewarding career opportunities at every level across all of our
      divisions from Field Services to Geoscience jobs.
    </p>
    <p>
      Are you an <strong>experienced professional</strong> looking for a new
      challenge in the oilfield services industry, where you will get the chance
      to get involved in significant projects? If so please review the vacancies
      below or send your speculative application to{' '}
      <address>
        <strong>careers@smbgroup-iq.com</strong>
      </address>
    </p>

    <p>
      <strong>Graduate</strong> jobs. Are you prepared to work outdoors in
      demanding conditions? If the answer is yes, then you will enjoy a
      rewarding career with SMB Group as a field engineer. Every year we hire
      talented and motivated individuals who can demonstrate relevant work
      experience, evidence of practical and technical capability, or a relevant
      extracurricular activity. Please send your application to{' '}
      <address>
        <strong>careers@smbgroup-iq.com</strong>
      </address>
    </p>

    <p>
      If you need assistance, information, or answers to your questions, feel
      free to contact the SMB Group HR Team{' '}
      <address>
        <strong>careers@smbgroup-iq.com</strong>
      </address>
    </p>
  </ServiceLayout>
)

export default SecondPage
