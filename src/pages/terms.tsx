import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { format } from 'date-fns';

export default function TermsPage() {
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
          Terms & Conditions of Use
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
          <Text>
            Please read these Terms of Use (the “
            <Box as="span" fontWeight="bold">
              Terms
            </Box>
            ”) and our Privacy Policy (“{' '}
            <Box as="span" fontWeight="bold">
              Privacy Policy
            </Box>
            ”) carefully because they govern your use of our sites located at
            developerdao.com, and all associated sites, domains, subdomains,
            communications channels, addresses and directories (the “
            <Box as="span" fontWeight="bold">
              Sites
            </Box>
            ”) and any of Developer DAO’s websites, materials, marketplaces,
            stores, products, services, hackathons, presentations or other
            provided services (“{' '}
            <Box as="span" fontWeight="bold">
              Services
            </Box>
            ”) and describe Your rights and obligations and our disclaimers and
            limitations of legal liability.
          </Text>
          <OrderedList mt="2.5rem">
            <VStack spacing="2.5">
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Agreement to Terms
                </Box>
                . By accessing, using, participating in, or receiving any of the
                Sites or Services, or clicking “I agree” to these Terms, or
                otherwise acknowledging these Terms, You accept and agree to be
                bound by and to comply with these Terms. If You do not agree to
                these Terms, You shall avoid accessing or using our Sites or the
                Services. Further, core aspects of Our Services may be
                controlled by, affected by, or subject to Developer DAO and the
                indeterminate tokenholders thereto who govern and control
                Developer DAO as well as the sub-DAOs thereto. The actions,
                products, communications and services of Developer DAO and the
                sub-DAOs thereto are entirely subject to the actions of the
                aforementioned indeterminate tokenholders.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Privacy Policy
                </Box>
                . Please review our Privacy Policy, which also governs your use
                of the Site, for information on how we collect, use, and share
                your information.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Changes to the Terms or the Sites and Services
                </Box>
                . We may update the Terms from time to time at our sole
                discretion. If we do, we’ll let you know by posting the updated
                Terms on the Sites. It’s important that you review the Terms
                whenever we update them or you use the Sites and Services. If
                you continue to use the Sites and Services after we have posted
                updated Terms it means that you accept and agree to the changes.
                If you don’t agree to be bound by the changes, you may not use
                the Site and Services anymore. We may change or discontinue all
                or any part of the Site, at any time and without notice, at our
                sole discretion.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Who may use the Sites and Services?
                </Box>
                You may use the Sites and Services only if you are 18 years or
                older and capable of forming a binding contract with the
                Developer DAO Foundation, and not otherwise barred from using
                the Site and Services under applicable law.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  The Developer DAO Foundation Intellectual Property.
                </Box>
                We may make available through the Sites and Services that are
                subject to intellectual property rights. We or our licensors, or
                the third parties who otherwise own the intellectual property
                rights, retain all rights to that content.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  General Prohibitions and Developer DAO Foundation’s
                  Enforcement Rights.
                </Box>
                You agree not to do any of the following:
                {/* Why isn't type propery changing the numbers to letters? */}
                <OrderedList type="a" mt="2.5">
                  <VStack spacing="2.5" alignItems="left">
                    <ListItem>
                      Use, display, mirror, or frame the Site or any individual
                      element within the Sites and Services, Site’s name, any
                      Developer DAO Foundation trademark, logo or other
                      proprietary information, or the layout and design of any
                      page or form contained on a page, without the Developer
                      DAO Foundation’s express written consent;
                    </ListItem>
                    <ListItem>
                      Access, tamper with, or use non-public areas of the Sites
                      and Services, Developer DAO Foundation’s computer systems,
                      or the technical delivery systems of Developer DAO
                      Foundation’s providers;
                    </ListItem>
                    <ListItem>
                      Attempt to probe, scan, or test the vulnerability of any
                      Developer DAO Foundation’s system or network or breach any
                      security or authentication measures;
                    </ListItem>
                    <ListItem>
                      Avoid, bypass, remove, deactivate, impair, descramble, or
                      otherwise circumvent any technological measure implemented
                      by the Developer DAO Foundation or any of Developer DAO
                      Foundation’s providers or any other third party (including
                      another user) to protect the Sites and Services;
                    </ListItem>
                    <ListItem>
                      Use the Sites and Services, or any portion thereof, for
                      any commercial purpose or for the benefit of any third
                      party or in any manner not permitted by these Terms;
                    </ListItem>
                    <ListItem>
                      Interfere with, or attempt to interfere with, the access
                      of any user, host, or network, including, without
                      limitation, sending a virus, overloading, flooding,
                      spamming, or mail-bombing the Sites and Services;
                    </ListItem>
                    <ListItem>
                      Impersonate or misrepresent your affiliation with any
                      person or entity;
                    </ListItem>
                    <ListItem>
                      Violate any applicable law or regulation; or
                    </ListItem>
                    <ListItem>
                      Encourage or enable any other individual to do any of the
                      foregoing.
                    </ListItem>
                  </VStack>
                </OrderedList>
                <Text mt="1.5rem">
                  The Developer DAO Foundation is not obligated to monitor
                  access to or use of the Sites and Services or to review or
                  edit any content. However, we have the right to do so for the
                  purpose of operating the Sites and Services, to ensure
                  compliance with these Terms and to comply with applicable law
                  or other legal requirements. We reserve the right, but are not
                  obligated, to remove or disable access to any content, at any
                  time and without notice, including, but not limited to, if we,
                  at our sole discretion, consider it objectionable or in
                  violation of these Terms. We have the right to investigate
                  violations of these Terms or conduct that affects the Sites
                  and Services. We may also consult and cooperate with law
                  enforcement authorities to prosecute users who violate the
                  law.
                </Text>
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Links to Third-Party Websites or Resources.
                </Box>
                The Sites and Services may allow you to access third-party
                websites or other resources. We provide access only as a
                convenience and are not responsible for the content, products,
                or services on or available from those resources or links
                displayed on such websites. You acknowledge sole responsibility
                for, and assume all risk arising from, your use of any
                third-party resources.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Termination.
                </Box>
                We may suspend or terminate your access to and use of the Sites
                and Services at our sole discretion at any time and without
                notice to you. Upon any termination, discontinuation, or
                cancellation of these Terms or the Sites and Services, the
                following Sections will survive 5, 6, 7, 8, 9, 10, 11, 12, 13,
                14, and 15.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Geographic Restrictions.
                </Box>{' '}
                The Developer DAO Foundation is based in the Cayman Islands. We
                make no claims that the Sites and Services or any of its content
                is accessible or appropriate outside of the Cayman Islands.
                Access to the Sites and Services may not be legal by certain
                persons or in certain countries. If you access the Sites and
                Services from outside the Cayman Islands, you do so on your own
                initiative and are responsible for compliance with local laws.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Warranty Disclaimers.
                </Box>
                <OrderedList mt="2.5">
                  <VStack spacing="2.5">
                    <ListItem>
                      Developer DAO Foundation does not operate an exchange
                      platform of any kind or offer trade execution or clearing
                      services with respect to traditional or digital assets and
                      therefore has no oversight, involvement, or control with
                      respect to Your transactions pursuant to the Sites or
                      Services or any Distributed Ledger Technology. You are
                      responsible for complying with all Applicable Law and
                      regulations applicable to Your transactions. Developer DAO
                      Foundation does not own or control the underlying software
                      protocols that are used in connection with the Sites and
                      Services, including but not limited to the Ethereum
                      network and Ether tokens and CODE Tokens. In general, the
                      underlying protocols on which the Services are based are
                      open-source and anyone can use, copy, modify, and
                      distribute them. The Developer DAO Foundation is not
                      responsible for the operation of the underlying protocols,
                      and the Developer DAO Foundation makes no guarantee of
                      their functionality, security, or availability.
                    </ListItem>
                    <ListItem>
                      To the maximum extent permitted under Applicable Law, the
                      Sites and the Services (and any of their content or
                      functionality) provided by or on behalf of Us are provided
                      on an “AS IS” basis, and we expressly disclaim, and You
                      hereby waive, any representations, conditions or
                      warranties of any kind, whether express or implied, legal,
                      statutory or otherwise, or arising from statute, otherwise
                      in law, course of dealing, or usage of trade, including,
                      without limitation, the implied or legal warranties and
                      conditions of merchantability, quality or fitness for a
                      particular purpose, title, security, availability,
                      reliability, accuracy, quiet enjoyment and
                      non-infringement of third party rights. Without limiting
                      the foregoing, We do not represent or warrant that the
                      Sites or the Services (including any related data) will be
                      uninterrupted, available at any particular time or
                      error-free. We do not warrant that errors in the Sites or
                      the Service are correctable or will be corrected beyond
                      good faith measures by Us, to the extent possible and
                      practical.
                    </ListItem>
                    <ListItem>
                      You acknowledge that Your data on the Sites or through the
                      Services may become permanently lost or corrupted or
                      temporarily unavailable due to a variety of causes, and
                      agree that, to the maximum extent permitted under
                      Applicable Law, we will not be liable for any loss or
                      damage caused by denial-of-service attacks, 51% attacks,
                      software failures, lost private or public keys, viruses or
                      other technologically harmful materials (including those
                      which may infect Your computer equipment), protocol
                      changes by third-party providers, Internet outages, force
                      majeure events or other disasters, scheduled or
                      unscheduled maintenance, or other causes either within or
                      outside our control. The disclaimer of implied warranties
                      contained in these Terms may not apply if and to the
                      extent such warranties cannot be excluded or limited under
                      the Applicable Law of the jurisdiction in which You
                      reside.
                    </ListItem>
                  </VStack>
                </OrderedList>
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Indemnity.
                </Box>
                You will indemnify and hold The Developer DAO Foundation and its
                officers, directors, supervisors, employees, and agents,
                harmless from and against any claims, disputes, demands,
                liabilities, damages, losses, and costs and expenses, including,
                without limitation, reasonable legal and accounting fees arising
                out of or in any way connected with (a) your access to or use of
                the Site and Services, or (b) your violation of these Terms.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Limitation of Liability.
                </Box>
                <OrderedList mt="2.5">
                  <VStack spacing="2.5">
                    <ListItem>
                      The Developer DAO Foundation, together with any
                      Indemnitee, shall not in any event be liable for any
                      incidental, indirect, special, punitive, exemplary,
                      consequential or similar damages or liabilities whatsoever
                      (including, without limitation, damages for loss of data,
                      information, revenue or other business or financial
                      benefit) arising out of or in connection with any of the
                      Sites and/or Services (and any of their content and
                      functionality), any execution or settlement of a
                      transaction, any performance or non-performance of the
                      Services, Your Distributed Ledger Technology assets, other
                      digital assets or any other product, service or other item
                      provided by or on behalf of an Indemnitee, whether under
                      contract, tort (including negligence), civil liability,
                      statute, strict liability, breach of warranties, or under
                      any other theory of liability, and whether or not any
                      Indemnitee has been advised of, knew of or should have
                      known of the possibility of such damages and
                      notwithstanding any failure of the essential purpose of
                      these Terms or any limited remedy nor is The Developer DAO
                      Foundation in any way responsible for the execution or
                      settlement of transactions between users of the Services.
                    </ListItem>
                    <ListItem>
                      In no event will the Indemnitees&apos; aggregate liability
                      arising out of or in connection with the Sites and the
                      Services (and any of their content and functionality), any
                      performance or nonperformance of the Services, Your
                      Distributed Ledger Technology assets, other digital assets
                      or any other product, service or other item provided by or
                      on behalf of an Indemnitee, whether under contract, tort
                      (including negligence), civil liability, statute, strict
                      liability or other theory of liability exceed the amount
                      of the fees paid by You to us under these Terms in the one
                      year period immediately preceding the event giving rise to
                      the claim for liability.
                    </ListItem>
                  </VStack>
                </OrderedList>
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  Governing Law and Forum Choice.
                </Box>
                These Terms and any action related thereto will be governed by
                the laws of the Cayman Islands, without regard to its conflict
                of laws provisions. The parties expressly consent to personal
                and exclusive jurisdiction in the courts located in the Cayman
                Islands, and you and the Developer DAO Foundation each waive any
                objection to jurisdiction and venue in such courts.
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  General Terms.
                </Box>
                <OrderedList mt="2.5">
                  <VStack spacing="2.5">
                    <ListItem>
                      <Box as="span" fontWeight="bold">
                        Reservation of Rights.
                      </Box>
                      The Developer DAO Foundation and its licensors exclusively
                      own all rights, titles and interests in and to the Sites
                      and Services, including all associated intellectual
                      property rights. You acknowledge that the Sites and
                      Services are protected by copyright, trademark, and other
                      laws of the Cayman Islands and other jurisdictions. You
                      agree not to remove, alter, or obscure any copyright,
                      trademark, service mark, or other proprietary rights
                      notices incorporated in or accompanying the Sites and
                      Services.
                    </ListItem>
                    <ListItem>
                      <Box as="span" fontWeight="bold">
                        Entire Agreement.
                      </Box>
                      These Terms constitute the entire and exclusive
                      understanding and agreement between the Developer DAO
                      Foundation and you regarding the Sites and Services, and
                      these Terms supersede and replace all prior oral or
                      written understandings or agreements between the Developer
                      DAO Foundation and you regarding the Sites and Services.
                      If any provision of these Terms is held invalid or
                      unenforceable by a court of competent jurisdiction, that
                      provision will be enforced to the maximum extent
                      permissible and the other provisions of these Terms will
                      remain in full force and effect. Except where provided by
                      applicable law in your jurisdiction, you may not assign or
                      transfer these Terms, by operation of law or otherwise,
                      without the Developer DAO Foundation’s prior written
                      consent. Any attempt by you to assign or transfer these
                      Terms absent our consent or your statutory right without
                      such consent will be null. The Developer DAO Foundation
                      may freely assign or transfer these Terms without
                      restriction. Subject to the foregoing, these Terms will
                      bind and inure to the benefit of the parties, their
                      successors, and permitted assigns.
                    </ListItem>
                    <ListItem>
                      <Box as="span" fontWeight="bold">
                        Notices.
                      </Box>
                      Any notices or other communications provided by The
                      Developer DAO Foundation under these Terms will be given
                      by posting to the Sites.
                    </ListItem>
                    <ListItem>
                      <Box as="span" fontWeight="bold">
                        Waiver of Rights.
                      </Box>
                      The Developer DAO Foundation’s failure to enforce any
                      right or provision of these Terms will not be considered a
                      waiver of such right or provision. The waiver of any such
                      right or provision will be effective only if in writing
                      and signed by a duly authorized representative of The
                      Developer DAO Foundation. Except as expressly set forth in
                      these Terms, the exercise by either party of any of its
                      remedies under these Terms will be without prejudice to
                      its other remedies under these Terms or otherwise.
                    </ListItem>
                    <ListItem>
                      <Box as="span" fontWeight="bold">
                        Contact Information.
                      </Box>
                      If you have any questions about these Terms or the Sites
                      and Services, please contact The Developer DAO Foundation
                      at developerdaooperations@gmail.com.
                    </ListItem>
                  </VStack>
                </OrderedList>
              </ListItem>
            </VStack>
          </OrderedList>
        </Flex>
      </Box>
    </Flex>
  );
}
