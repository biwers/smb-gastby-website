import React from 'react'
import { Link } from 'gatsby'
import ServiceLayout from '../../components/servicLayout'
import LogisticImage from '../../images/oil-gas.jpg'
const SecondPage = () => (
  <ServiceLayout title="Logistical Services" img={LogisticImage}>
    <p>
      SMB delivers comprehensive Integrated Logistic Support (ILS) services
      enabling our customers to adopt a disciplined approach to managing their
      assets through life.
    </p>
    <p>
      Our integrated logistic support (ILS) solutions and supply chain
      consultancy services enable our customers to manage increasingly complex
      logistic support packages through life. We have highly experienced ILS
      professionals and supply chain managers that are developing and
      implementing support strategies focused on achieving more efficient and
      effective acquisition and through life support at minimum whole-life cost.
    </p>
    <p>
      Our services include logistic support analysis, risk management,
      reliability centred maintenance, configuration management and obsolescence
      management. SMB has worked in partnership with the Kurdistan Government
      since 2005, providing integrated logistic support services that ensure
      operational flexibility and sustainability at minimum cost.
    </p>
    <section>
      <h2>Services:</h2>
      <ul class="service__list">
        <li class="a">Transportation &amp; Shipping of Equipment</li>
        <li class="a">Movement &amp; Tracking of Employees and Contractors</li>
        <li class="a">Recruitment of Key Personnel and Existing Personnel</li>
        <li class="a">Hiring of Equipment, Materials &amp; Machinery</li>
        <li class="a">Site Clearance Process for Company Personnel</li>
        <li class="a">Purchasing of Logistics Equipment</li>
        <li class="a">Alcohol Licensing (if applicable)</li>
        <li class="a">Approved Suppliers and Associated</li>
        <li class="a">Order Process</li>
        <li class="a">Administration and Required Approvals</li>
        <li class="a">Approval of Safety and Emergency Procedures</li>
      </ul>

      <p>
        Packaging, handling, storage, and transportation (PHS &T). This element
        includes resources and procedures to ensure that all equipment and
        support items are preserved, packaged, packed, marked, handled,
        transported, and stored properly for short- and long-term requirements.
        It includes material-handling equipment and packaging, handling and
        storage requirements, and pre-positioning of material and parts. It also
        includes preservation and packaging level requirements and storage
        requirements (for example, sensitive, proprietary, and controlled
        items). This element includes planning and programming the details
        associated with movement of the system in its shipping configuration to
        the ultimate destination via transportation modes and networks available
        and authorized for use. It further encompasses establishment of critical
        engineering design parameters and constraints (e.g., width, length,
        height, component and system rating, and weight) that must be considered
        during system development. Customs requirements, air shipping
        requirements, rail shipping requirements, container considerations,
        special movement precautions, mobility, and transportation asset impact
        of the shipping mode or the contract shipper must be carefully assessed.
        PHS&T planning must consider:
      </p>
      <ul class="service__list">
        <li class="a">
          System constraints (such as design specifications, item configuration,
          and safety precautions for hazardous material)
        </li>
        <li class="a">Special security requirements</li>
        <li class="a">Geographic and environmental restrictions</li>
        <li class="a">Special handling equipment and procedures</li>
        <li class="a">Impact on spare or repair parts storage requirements</li>
        <li class="a">
          Emerging PHS &amp; T technologies, methods, or procedures and
          resource-intensive PHS &amp; T procedures
        </li>
        <li class="a">Environmental impacts and constraints</li>
        <li class="a">Transportation</li>
      </ul>
    </section>
    <section>
      <h2>Facilities</h2>
      <p>
        The Facilities logistics element is composed of a variety of planning
        activities, all of which are directed toward ensuring that all required
        permanent or semi-permanent operating and support facilities (for
        instance, training, field and depot maintenance, storage, operational,
        and testing) are available concurrently with system fielding. Planning
        must be comprehensive and include the need for new construction as well
        as modifications to existing facilities. It also includes studies to
        define and establish impacts on life cycle cost, funding requirements,
        facility locations and improvements, space requirements, environmental
        impacts, duration or frequency of use, safety and health standards
        requirements, and security restrictions. Also included are any utility
        requirements, for both fixed and mobile facilities, with emphasis on
        limiting requirements of scarce or unique resources.
      </p>
    </section>
  </ServiceLayout>
)

export default SecondPage
