import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';

export default function PrivcayPolicyPage() {
  return (
    <Flex
      mx="auto"
      flexDirection={{ base: 'column' }}
      justifyContent="space-between"
      pt={{ base: '0', lg: '4.5rem' }}
      pb="5rem"
      w="100%"
      maxW="5xl"
    >
      <Box mx="auto">
        <Heading
          as="h1"
          fontFamily="Inter"
          fontWeight="800"
          mr="2rem"
          fontSize={{ base: '2.625rem', xl: '3.375rem' }}
          lineHeight={{ base: '2.625rem', xl: '4rem' }}
        >
          Privay Policy
        </Heading>
        <Text fontSize="xs" mt="1rem">
          Last updated: {`${format(new Date(2022, 7, 22), "do',' MMMM yyyy")}`}
        </Text>
        <Flex
          mt="2.5rem"
          as="main"
          flexDirection={{ base: 'column' }}
          justifyContent="space-between"
          pt={{ base: '0', lg: '4.5rem' }}
          pb="5rem"
          w="100%"
        >
          <VStack alignItems="left" spacing="2.5">
            <Heading as="h2" fontSize="md">
              General Information
            </Heading>
            <Text>
              The information in this section is relevant to all categories of
              data subject.
            </Text>
            <Text>
              This includes:
              <UnorderedList pt="1rem" mb="1rem" pl=".5rem">
                <ListItem>Staff and Contractors</ListItem>
                <ListItem>Website Users</ListItem>
                <ListItem>Suppliers and Potential Suppliers</ListItem>
                <ListItem>Clients and Potential Clients</ListItem>
              </UnorderedList>
            </Text>
            <Heading as="h2" fontSize="md" mb="1rem">
              Who controls your personal data?
            </Heading>
            <Text>
              The Developer DAO Foundation, a Cayman Islands foundation company
              (including our subsidiaries, affiliates, and as governed by the
              Developer DAO Decentralized Autonomous Organization token holders,
              “we”, “us” or “our”) is responsible for your personal data.
            </Text>
            <Text>
              You can contact a representative by sending an email to the
              following address: developerdaooperations@gmail.com.
            </Text>
          </VStack>
          <VStack mt="2.5rem" alignItems="left">
            <Heading as="h3" fontSize="md">
              Your rights
            </Heading>
            <Text>You have the following rights:</Text>
            <OrderedList>
              <VStack spaing="2.5" mt="1.5rem">
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    The right to be informed.
                  </Box>
                  You have the right to be informed about how the Developer DAO
                  Foundation processes your personal data. Typically, the
                  Developer DAO Foundation communicates this information through
                  privacy notices such as this one.
                </ListItem>
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    The right to data access.
                  </Box>
                  You have a right to obtain a copy of the personal data we hold
                  about you, subject to certain exceptions.
                </ListItem>
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    The right of data rectification.
                  </Box>
                  You always have a right to ask for immediate correction of
                  inaccurate or incomplete personal data which we hold about
                  you.
                </ListItem>
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    The right of data erasure.
                  </Box>
                  You have the right to request that personal data be erased
                  when it is no longer needed, where applicable law obliges us
                  to delete the data or the processing of it is unlawful. You
                  may also ask us to erase personal data where you have
                  withdrawn your consent or objected to the data processing.
                  However, this is not a general right to data erasure – there
                  are exceptions.
                </ListItem>
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    The right to restrict data processing.
                  </Box>
                  You have the right to restrict the processing of your personal
                  data in specific circumstances. Where that is the case, we may
                  still store your information, but not use it further.
                </ListItem>
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    The right to data portability.
                  </Box>
                  You have the right to receive your personal data in a
                  structured, machine-readable format for your own purposes, or
                  to request us to share it with a third party.
                </ListItem>
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    The right to object to data processing.
                  </Box>
                  You have the right to object to our processing of your
                  personal data based on legitimate interests, where your data
                  privacy rights outweigh our reasoning for legitimate
                  interests.
                </ListItem>
                <ListItem>
                  <Box as="span" fontWeight="bold">
                    Rights in relation to automated decision-making and
                    profiling.
                  </Box>
                  You have the right not to be subjected to a decision based
                  solely on automated processing, including profiling, which
                  produces legal or similarly significant effects. Currently,
                  the Developer DAO Foundation does not perform any automated
                  decision-making or profiling.
                </ListItem>
              </VStack>
            </OrderedList>
            <Text>
              You may request to enforce your data privacy rights by emailing
              developerdaooperations@gmail.com.{' '}
            </Text>
            <Text>
              In certain circumstances, we may need to restrict the above rights
              to safeguard the public interest (e.g., the prevention or
              detection of crime) or our business interests (e.g., the
              maintenance of legal privilege).
            </Text>
          </VStack>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              Consent as a legal basis for processing.
            </Heading>
            <Text>
              For some data processing, the Developer DAO Foundation uses
              consent as a legal basis. If you have consented to processing by
              The Developer DAO Foundation, please be aware that you have the
              right to withdraw this consent at any point. If you would like to
              withdraw consent for a particular type of data processing that the
              Developer DAO Foundation performs, please email the following
              address: developerdaooperations@gmail.com.
            </Text>
          </VStack>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              How we share your data
            </Heading>
            <Text>
              We will not share your information with any third parties for the
              purposes of direct marketing. In some circumstances we are legally
              obliged to share information. For example, under a court order. In
              any scenario, we will satisfy ourselves that we have a lawful
              basis on which to share the information and document our decision
              making and satisfy ourselves we have a legal basis on which to
              share the information.
            </Text>
          </VStack>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              How we protect your information
            </Heading>
            <Text>
              We implement appropriate technical and organisational measures to
              protect personal data that we hold from unauthorised disclosure,
              use, alteration, or destruction. Where appropriate, we use
              encryption and other technologies that assist in securing the data
              you provide. We also require our service providers to comply with
              strict data privacy requirements where they process your personal
              data.
            </Text>
          </VStack>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              How long we keep your pesonal data
            </Heading>
            <Text>
              We only keep your personal data for as long as necessary for the
              purposes described in this privacy notice, or until you notify us
              that you no longer wish us to process your data. After this time,
              we will securely delete your personal data, unless we are required
              to keep it to meet legal or regulatory obligations, or to resolve
              potential legal disputes.
            </Text>
          </VStack>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              Contact and further information
            </Heading>
            <Text>
              We only keep your personal data for as long as necessary for the
              purposes described in this privacy notice, or until you notify us
              that you no longer wish us to process your data. After this time,
              we will securely delete your personal data, unless we are required
              to keep it to meet legal or regulatory obligations, or to resolve
              potential legal disputes.
            </Text>
          </VStack>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              Contact and furhter information
            </Heading>
            <Text>
              If you have any questions about how we use your personal data or
              wish to make a complaint about how we handle it, you may contact
              the Developer DAO Foundation at: developerdaooperations@gmail.com.
            </Text>
          </VStack>
          <VStack spacing="2.5" mt="2.5rem" alignItems="left">
            <Heading as="h2" fontSize="lg">
              MEMBERS OF STAFF AND CONTRACTORS WITH THE DEVELOPER DAO FOUNDATION
            </Heading>
            <Heading as="h3" fontSize="md">
              Why we use your personal data?
            </Heading>
            <Text>
              We may use your personal data as listed above for the following
              purposes, to the extent applicable:
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  human resources management including organization and personal
                  administration, working hours management, improving and
                  maintaining effective staff administration, internal workforce
                  analysis, reporting and planning;
                </ListItem>
                <ListItem>staff succession planning;</ListItem>
                <ListItem>
                  compensation and benefits management and performance reviews;
                </ListItem>
                <ListItem>
                  talent management and acquisition including recruitment,
                  assessing suitability and working capacity, background checks
                  and verification of qualifications, obtaining and providing
                  references;
                </ListItem>
                <ListItem>
                  talent management and acquisition including recruitment,
                  assessing suitability and working capacity, background checks
                  and verification of qualifications, obtaining and providing
                  references;
                </ListItem>
                <ListItem>
                  learning and development management including certifications,
                  training staff and performing assessments and employee
                  satisfaction surveys;
                </ListItem>
                <ListItem>
                  processes related to joining and leaving including internal
                  moves and terminations;
                </ListItem>
                <ListItem>
                  sickness and other leave and vacations management;
                </ListItem>
                <ListItem>reporting and managing process quality;</ListItem>
                <ListItem>
                  travel and expenses management and organization of business
                  trips;
                </ListItem>
                <ListItem>
                  carrying out the obligations and exercising specific rights in
                  the field of employment or a collective agreement;
                </ListItem>
                <ListItem>
                  internal and external communication of Developer DAO
                  Foundation’s organization and representation of The Developer
                  DAO Foundation including commercial register and assigning
                  powers of attorney;
                </ListItem>
                <ListItem>
                  organizing Developer DAO Foundation events and documentation
                  of such events including managing and organizing internal
                  non-marketing related campaigns, events and meetings;
                </ListItem>
                <ListItem>
                  managing Developer DAO Foundation assets including pictures
                  and videos depicting employees or other individuals available
                  for download on the Developer DAO Foundation website, etc.;
                </ListItem>
                <ListItem>
                  finance and shared accounting services providing record to
                  report, order to cash and purchase to pay services;
                </ListItem>
                <ListItem>
                  business reporting, statistics and analytics;
                </ListItem>
                <ListItem>
                  monitoring and auditing compliance of contractors’ and
                  employees’ activities in the workplace with Developer DAO
                  Foundation’s policies, contractual obligations and legal
                  requirements including disciplinary actions;
                </ListItem>
                <ListItem>
                  carrying out audits, reviews and regulatory checks to meet
                  obligations to regulators;
                </ListItem>
                <ListItem>
                  governance, risk and compliance, including compliance with
                  laws, law enforcement, court and regulatory bodies’
                  requirements (such as for the process of verifying the
                  identity of customers, called as Know Your Customer / Anti
                  Money Laundering monitoring purposes), customs and global
                  trade compliance, conflict of interest and security
                  obligations) and prevention, detection, investigation and
                  remediation of crime and fraud or prohibited activities or to
                  otherwise protect legal rights and to establish, exercise or
                  defend legal claims;
                </ListItem>
                <ListItem>
                  managing the customer relationship, processing customer orders
                  and providing customer support, processing, evaluating and
                  responding to requests and inquiries; managing the suppliers,
                  contractors, advisers and other professional experts including
                  contact interaction, processing and fulfilling purchases and
                  invoices, and contract lifecycle management;
                </ListItem>
                <ListItem>
                  making use of work performance and products and for references
                  on documents, such as drawings, purchase orders, sales orders,
                  invoices, reports;
                </ListItem>
                <ListItem>
                  maintaining and protecting the security of products,
                  facilities, services, systems, networks, computers, and
                  information, preventing, and detecting security threats, fraud
                  or other criminal or malicious activities, and ensuring
                  business continuity; and
                </ListItem>
                <ListItem>
                  managing IT resources, including infrastructure management
                  including data back-up, information systems’ support and
                  service operations for application management, end user
                  support, testing, maintenance, security (incident response,
                  risk, vulnerability, breach response), master data and
                  workplace including user accounts management, software
                  licenses assignment, security and performance testing and
                  business continuity.
                </ListItem>
              </VStack>
            </UnorderedList>
            <Text>
              We collect only the personal data from you that we need for the
              purposes described above. Certain personal data collected from you
              relates to your next of kin and emergency contacts. In these
              cases, you are requested to inform such persons about this Notice.
            </Text>

            <Heading as="h3" fontSize="md">
              What happens if you do not provide us with the information we have
              requested?
            </Heading>
            <Text>
              Where it concerns processing operations related to your
              relationship with the Developer DAO Foundation as a member,
              contractor or employee (as described above), the Developer DAO
              Foundation will not be able to adequately contract with or employ
              you without certain personal data and you may not be able to
              exercise your contractor or employee rights if you do not provide
              the personal data requested. Although we cannot mandate you to
              share your personal data with us, please note that this then may
              have consequences which could affect your contractual relationship
              or employment in a negative manner, such as not being able to
              exercise your statutory rights or even to continue your contract
              or employment. Whenever you are asked to provide us with any
              personal data related to you, we will indicate which personal data
              is required, and which personal data may be provided voluntarily.
            </Text>
            <Heading as="h3" fontSize="md">
              The legal basis we rely on
            </Heading>
            <Text>
              For the use of your personal data for the purposes described above
              (in section 4), we rely on the following legal basis, as
              applicable:
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  We process your personal data for the fulfilment of
                  obligations in your contractor or employment contract with us
                  and similar collective contractor or employment agreements, or
                  as part of pre-contractual measures to establish
                  contractor-related or employment and related contracts
                </ListItem>
                <ListItem>
                  In some cases, we rely on our legitimate interests to process
                  your personal data insofar as this is not overridden by your
                  own privacy interests. Such interests may include:
                  <UnorderedList>
                    <VStack spacing="2.5" mt="1rem">
                      <ListItem>
                        monitoring (for example through IT systems),
                        investigating and ensuring compliance with legal,
                        regulatory, standard and the Developer DAO Foundation
                        internal requirements and policies;
                      </ListItem>
                      <ListItem>
                        prevention of fraud and criminal activity including
                        investigations of such activity, misuse of the Developer
                        DAO Foundation assets, products, and services, and as
                        strictly necessary and proportionate for ensuring
                        network and information security; and
                      </ListItem>
                      <ListItem>
                        ​​transmitting personal data within the Developer DAO
                        Foundation group for internal administrative purposes as
                        necessary, for example, to provide centralised services.
                      </ListItem>
                    </VStack>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  You may obtain a copy of our assessment regarding our
                  legitimate interest to process your personal data by
                  submitting a request to developerdaooperations@gmail.com.
                </ListItem>
                <ListItem>
                  In some cases, we process your personal data on the basis of
                  statutory requirements, for example, on the basis of labour
                  law, allowances, tax or reporting obligations, cooperation
                  obligations with authorities or statutory retention periods in
                  order to carry out our contractual responsibilities as a
                  contracting entity or employer, as applicable;
                </ListItem>
                <ListItem>
                  In exceptional circumstances, we may ask your consent at the
                  time of collecting the personal data, for example photos,
                  communications materials, and events. If we ask you for
                  consent in order to use your personal data for a particular
                  purpose, we will remind you that you are free to withdraw your
                  consent at any time and we will tell you how you can do this.
                </ListItem>
              </VStack>
            </UnorderedList>
          </VStack>
          <Heading as="h2" fontSize="lg" mt="2.5rem">
            WEBSITE USERS
          </Heading>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              Unsolicited Personal Information
            </Heading>
            <Text>
              If you send the Developer DAO Foundation unsolicited personal
              information, for example a CV, the Developer DAO Foundation
              reserves the right to immediately delete that information without
              informing you or to decide which category of data subject that you
              appear to be and manage your personal data within the remit of
              that category as described elsewhere in this Privacy Notice. We do
              not knowingly collect or solicit personal information from anyone
              under 18 years of age. If you are under 18, please do not send any
              personal information about yourself to us.
            </Text>
            <Heading as="h3" fontSize="md">
              Users of our website that do not fall under the specifically
              stated Data Subject Types.{' '}
            </Heading>
            <Heading as="h4" fontSize="base">
              Unsolicited Personal Information
            </Heading>
            <Text>We collect the following categories of personal data:</Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  The business contact information you share with us: name,
                  title, job title, email address, business address, telephone
                  number, mobile telephone number, etc.
                </ListItem>
                <ListItem>
                  Information your browser makes available when you visit the
                  Developer DAO Foundation website: IP address, the source of
                  your site visit, time spent on the website or a particular
                  page, links clicked, comments shared, browser type, date and
                  time of visit, etc.
                </ListItem>
              </VStack>
            </UnorderedList>
            <Heading as="h4" fontSize="base">
              Unsolicited Personal Information
            </Heading>
            <Text>We collect the following categories of personal data:</Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  The business contact information you share with us: name,
                  title, job title, email address, business address, telephone
                  number, mobile telephone number, etc.
                </ListItem>
                <ListItem>
                  Information your browser makes available when you visit the
                  Developer DAO Foundation website: IP address, the source of
                  your site visit, time spent on the website or a particular
                  page, links clicked, comments shared, browser type, date and
                  time of visit, etc.
                </ListItem>
              </VStack>
            </UnorderedList>
            <Heading as="h4" fontSize="base">
              What we use your personal data for
            </Heading>
            <Text>We use your personal data to:</Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  respond to your specific request that you make, for example
                  request a demonstration, whitepapers, newsletters, or other
                  information.
                </ListItem>
                <ListItem>
                  provide customer support and process, evaluate and respond to
                  requests and inquiries;
                </ListItem>
                <ListItem>
                  conduct and facilitate customer satisfaction surveys;
                </ListItem>
                <ListItem>
                  conduct marketing and sales activities (including generating
                  leads, pursuing marketing prospects, performing market
                  research, determining and managing the effectiveness of our
                  advertising and marketing campaigns and managing our brand);
                </ListItem>
                <ListItem>
                  send you marketing communications (such as alerts, promotional
                  materials, newsletters, etc.);
                </ListItem>
                <ListItem>
                  perform data analytics (such as market research, trend
                  analysis, financial analysis, and customer segmentation).
                </ListItem>
              </VStack>
            </UnorderedList>
            <Text>
              We only collect the personal data from you that we need for the
              above purposes. We may also anonymise your personal data, so it no
              longer identifies you and use it for various purposes, including
              the improvement of our services and testing our IT systems.
            </Text>
            <Heading as="h4" fontSize="base">
              The legal basis on which we use your personal data
            </Heading>
            <Text>
              We use your personal data for the purposes described in this
              notice based on one of the following legal bases, as applicable:
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  Legitimate interest as by using our website it is understood
                  that there is potential for you to be a potential customer,
                  contractor, employee, or supplier.
                </ListItem>
              </VStack>
            </UnorderedList>
            <Heading as="h3" fontSize="md">
              Copyright Violations
            </Heading>
            <Text>
              We reserve the right to restrict access to or remove material that
              we believe in good faith to be copyrighted material and/or
              illegally copied and/or distributed, and restrict and discontinue
              service to offenders. If you believe that material or content
              residing on or accessible through the Services infringes your
              copyright (or the copyright of someone on behalf of which you are
              authorized to act), please send a notice of copyright infringement
              containing the following information to
              developerdaooperations@gmail.com:
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  A physical or electronic signature of a person authorized to
                  act on behalf of the owner of the copyright that has been
                  allegedly infringed;
                </ListItem>
                <ListItem>
                  Identification of works or materials being infringed;
                </ListItem>
              </VStack>
            </UnorderedList>
          </VStack>
          <Heading as="h2" fontSize="lg" mt="2.5rem">
            SUPPLIERS OR POTENTIAL SUPPLIERS
          </Heading>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              The personal data we collect about you and how we use it
            </Heading>
            <Text>
              We collect and use personal data that concerns you in connection
              with the agreements with our suppliers. We may collect the
              following categories of personal data:
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  Identification data and business contact information, you
                  share with us such as first name, last name,
                  job/position/title, nationality, business email address,
                  business address, telephone number, mobile telephone number.
                </ListItem>
                <ListItem>
                  Additional information you provide to us in the course of our
                  business relations such as data concerning the fulfilment of
                  our contractual obligations and pre-contractual measures
                  including correspondence data, offers, tenders, resume/CV,
                  conditions, contract and order data, invoices, payments,
                  business partner history, records relating to
                  queries/questions/complaints/orders.
                </ListItem>
                <ListItem>
                  Electronic identification data and information collected by
                  the communications systems, IT applications and website
                  browser (where supplier has access or is affected by such
                  systems or applications and in accordance with the applicable
                  law) such as information technology usage (system access, IT
                  and internet usage), device identifier (mobile device ID, PC
                  ID), registration and login credentials, IP address, login
                  data and log files, Analytics ID, time and URL, searches,
                  website registration and cookie data, sound recordings (e.g.
                  voice mail/phone recordings, Skype recordings).
                </ListItem>
              </VStack>
            </UnorderedList>
            <Heading as="h4" fontSize="base">
              What we use your personal data for
            </Heading>
            <Text>
              We may use your personal data as described above for the following
              purposes::
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  supplier and service provider management throughout the supply
                  chain including contact interaction including tendering,
                  engagement, processing orders, process and fulfilment of
                  purchases, administration and management of suppliers,
                  vendors, contractors, advisers and other professional experts;
                </ListItem>
                <ListItem>
                  paying debts, supplier invoice and payment management,
                  purchasing of direct and indirect services;
                </ListItem>
                <ListItem>
                  reporting and analytics including market intelligence and
                  development and improvement of services or products through
                  assessment and analysis of the information;
                </ListItem>
                <ListItem>management of process quality;</ListItem>
                <ListItem>
                  references on documents, such as tenders, purchase orders,
                  invoices, reports;
                </ListItem>
                <ListItem>contract lifecycle management;</ListItem>
                <ListItem>
                  payment collection and insolvency processes; training
                  suppliers;
                </ListItem>
                <ListItem>
                  finance and shared accounting services, providing record to
                  report and purchase to pay services;
                </ListItem>
                <ListItem>
                  reorganisation, acquisition and sale of activities, business
                  units and companies;
                </ListItem>
                <ListItem>
                  monitoring and auditing compliance with the Developer DAO
                  Foundation’s policies, contractual obligations and legal
                  requirements;
                </ListItem>
                <ListItem>
                  carrying out audits, reviews and regulatory checks to meet
                  obligations to regulators;
                </ListItem>
                <ListItem>
                  governance, risk and compliance, including due diligence and
                  anti-money laundering obligations, customs and global trade
                  compliance and sanctioned party list screening, security,
                  including prevention, detection of crime and fraud;
                </ListItem>
                <ListItem>
                  maintain and protect the security of products, facilities,
                  services, systems, networks, computers and information,
                  preventing and detecting security threats, and fraud or other
                  criminal or malicious activities;
                </ListItem>
                <ListItem>
                  and manage IT resources, including infrastructure management
                  including data back-up, information systems’ support and
                  service operations for application management, end user
                  support, testing, maintenance, security (incident response,
                  risk, vulnerability, breach response), user accounts
                  management, software licenses assignment, security and
                  performance testing and business continuity.
                </ListItem>
              </VStack>
            </UnorderedList>
            <Text>
              We collect only the personal data from you that we need for the
              purposes described above. For statistical purposes, improvement of
              our services and testing of our IT systems we use as much as
              reasonably possible anonymised data. This means that these data
              can no longer (in)directly identify you or single you out as an
              individual.
            </Text>
            <Heading as="h4" fontSize="base">
              What happens if you do not provide us with the information we had
              asked you for or if you ask us to stop processing your
              information?
            </Heading>
            <Text>
              Where it concerns processing operations related to the agreements
              with our suppliers (as described above), the Developer DAO
              Foundation will not be able to adequately establish, conduct or
              terminate a business relationship with you or your company and
              generally perform the purposes described above without certain
              personal data. Although we cannot obligate you to share your
              personal data with us, please note that this then may have
              consequences which could affect the business relationship in a
              negative manner, such as not being able to take requested
              pre-contractual measures to enter into a contract with you or to
              establish and continue the business relationship you have asked
              for.
            </Text>
            <Heading as="h4" fontSize="base">
              The legal basis on which we use your personal data
            </Heading>
            <Text>
              We use your personal data for the purposes described in this
              notice based on one of the following legal bases, as applicable:
            </Text>
            <Heading as="h3" fontSize="md">
              The legal basis on which we use your personal data
            </Heading>
            <Text>
              We use your personal data for the purposes described in this
              notice based on one of the following legal bases, as applicable:
            </Text>
            <Text>
              We may process your personal data for the fulfilment of
              contractual obligations resulting from contracts with you or your
              company, or as part of pre-contractual measures we take;
            </Text>
            <Text>
              In some cases, we rely on our legitimate interests to process your
              personal data insofar as this is not overridden by your own
              privacy interests. Such interests may include:
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  conduct, management, development and furtherance of our
                  business in the broadest sense possible including supply of
                  products and services, performance of agreements and order
                  management with suppliers, process and fulfilment of
                  purchases, process quality management and improvement of
                  products or services, analytics and market intelligence,
                  reduction of default risks in our procurement processes and
                  reorganization, acquisition and sale of activities, business
                  divisions and companies;
                </ListItem>
                <ListItem>
                  monitor, investigate and ensure compliance with legal,
                  regulatory, standard and the Developer DAO Foundation internal
                  requirements and policies;
                </ListItem>
                <ListItem>
                  prevent fraud and criminal activity including investigations
                  of such activity, misuse of the Developer DAO Foundation
                  assets, products and services, and as strictly necessary and
                  proportionate for ensuring network and information security;
                  and
                </ListItem>
                <ListItem>
                  transmitting personal data within the the Developer DAO
                  Foundation group for internal administrative purposes as
                  necessary for example to provide centralised services.
                </ListItem>
              </VStack>
            </UnorderedList>
            <Text>
              In some cases, we process your personal data on the basis of legal
              obligations and statutory requirements, for example, on the basis
              of tax or reporting obligations, cooperation obligations with
              authorities, statutory retention periods or the disclosure of
              personal data within the scope of official or judicial measures
              may be required for the purposes of taking evidence, prosecution
              or enforcement of civil law claims.
            </Text>
            <Text>
              Regarding personal data concerning criminal convictions and
              offences, we will only process such data where such processing is
              permitted by applicable (local) law.
            </Text>
          </VStack>
          <Heading as="h2" fontSize="lg" mt="2.5rem">
            CUSTOMERS/CLIENTS OR POTENTIAL CUSTOMERS/CLIENTS
          </Heading>
          <VStack mt="2.5rem" spacing="2.5" alignItems="left">
            <Heading as="h3" fontSize="md">
              The personal data we collect about you and how we use it
            </Heading>
            <Text>We collect the following categories of personal data:</Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  Identification data and business contact information, you
                  share with us such as first name, last name,
                  job/position/title, nationality, business email address,
                  business address, telephone number, mobile telephone number.
                </ListItem>
                <ListItem>
                  Additional information you provide to us in the course of our
                  business relations such as: interests in the Developer DAO
                  Foundation’s services or products, marketing preferences,
                  registration information provided at events, fairs, contract
                  or order data, invoices, payments, business partner history,
                  etc.
                </ListItem>
                <ListItem>
                  Information your browser makes available when you visit the
                  Developer DAO Foundation website: IP address, the source of
                  your site visit, time spent on the website or a particular
                  page, links clicked, comments shared, browser type, date and
                  time of visit, etc.
                </ListItem>
                <ListItem>
                  To the extent necessary to fulfil our obligations, data
                  obtained from publicly accessible sources or which are
                  legitimately transmitted by other third parties (e.g. a credit
                  agency): commercial register data, association register data,
                  creditworthiness data.
                </ListItem>
              </VStack>
            </UnorderedList>
            <Heading as="h4" fontSize="base">
              What we use your personal data for
            </Heading>
            <Text>We use your personal data to:</Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  process and fulfil orders and keep you informed about the
                  status of your or your company’s order;
                </ListItem>
                <ListItem>
                  provide and administer our products and services;
                </ListItem>
                <ListItem>
                  provide customer support and process, evaluate and respond to
                  requests and inquiries;
                </ListItem>
                <ListItem>
                  conduct and facilitate customer satisfaction surveys;{' '}
                </ListItem>
                <ListItem>
                  conduct marketing and sales activities (including generating
                  leads, pursuing marketing prospects, performing market
                  research, determining and managing the effectiveness of our
                  advertising and marketing campaigns and managing our brand);
                </ListItem>
                <ListItem>
                  send you marketing communications (such as alerts, promotional
                  materials, newsletters, etc.);
                </ListItem>
                <ListItem>
                  perform data analytics (such as market research, trend
                  analysis, financial analysis, and customer segmentation).
                </ListItem>
              </VStack>
            </UnorderedList>
            <Text>
              We only collect the personal data from you that we need for the
              above purposes. We may also anonymise your personal data, so it no
              longer identifies you and use it for various purposes, including
              the improvement of our services and testing our IT systems.
            </Text>
            <Heading as="h4" fontSize="base">
              What happens if you do not provide us with the information we had
              asked you for, or if you ask us to stop processing your
              information?
            </Heading>
            <Text>
              Certain personal data is necessary to establish, conduct or
              terminate a business relationship with you. We need you to provide
              us with the personal data required for the fulfilment of
              contractual obligations or which we are legally obliged to
              collect. Without such personal data, we will not be able to
              establish, execute or terminate a contract with you. Also, we will
              be unable to take the requested pre-contractual measures to enter
              a contract with you or to establish and continue the business
              relationship you have asked for.
            </Text>
            <Heading as="h4" fontSize="base">
              The legal basis on which we use your personal data
            </Heading>
            <Text>
              We use your personal data for the purposes described in this
              notice based on one of the following legal bases, as applicable:
            </Text>
            <UnorderedList>
              <VStack spacing="2.5" alignItems="left">
                <ListItem>
                  We may process your personal data for the fulfilment of
                  contractual obligations resulting from contracts with you or
                  your company, or as part of pre-contractual measures we have
                  been asked to take;
                </ListItem>
                <ListItem>
                  We may process your personal data on the basis of statutory
                  requirements, for example, on the basis of tax or reporting
                  obligations, cooperation obligations with authorities or
                  statutory retention periods;
                </ListItem>
                <ListItem>
                  We will ask your consent for the activities described in this
                  privacy notice when required by applicable law, for example
                  when we process your data for marketing purposes where we
                  don’t have an existing business relationship with you or your
                  company; or
                </ListItem>
                <ListItem>
                  We will rely on our legitimate interests to process your
                  personal data within the scope of the business relationship
                  with you or your company. Our legitimate interests to collect
                  and use the personal data for this purpose are management and
                  furtherance of our business. You may obtain a copy of our
                  assessment of why we may process your personal data for these
                  interests by submitting a request at
                  developerdaooperations@gmail.com.
                </ListItem>
              </VStack>
            </UnorderedList>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
}
