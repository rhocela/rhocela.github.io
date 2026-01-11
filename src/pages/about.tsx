import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BrandLogos from '@site/src/components/BrandLogos';

export default function About(): ReactNode {
  return (
    <Layout title="About" description="About Rhocela Pasigna">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <img 
              src="/img/rhocela-headshot.png" 
              alt="Rhocela Pasigna" 
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                margin: '0 auto 1.5rem',
                display: 'block',
                border: '5px solid var(--ifm-color-primary-light)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
              }}
            />
          </div>
          <Heading as="h1">About me</Heading>
          
          <section style={{marginTop: '2rem', lineHeight: '1.8'}}>
            <p>
              Senior Technical Writer with a proven track record of building and leading documentation functions from the ground up.
            </p>

            <p>
              I establish documentation practices and standards while managing the entire documentation lifecycle—from planning to publication. I treat documentation as a product and advocate for developing it with the same high standards as the core product, using modern processes like docs-as-code.
            </p>

            <p>
              I transform complex ideas—blending technical expertise with clear, accessible content—to reach diverse audiences. Whether writing for engineers, sales professionals, or end users, I believe the true value of documentation lies in its usability and user experience.
            </p>

            <p>
              Passionate about fostering a culture of excellence through knowledge sharing and best practices. I'm also experienced as a Scrum Master, driving continuous improvement and cross-functional collaboration.
            </p>

            <p>
              Looking to connect with teams building great products and recognizing that great documentation is an essential part of that success.
            </p>

            <div style={{
              marginTop: '2rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--ifm-color-primary-lightest)',
              borderRadius: '8px',
              border: '1px solid var(--ifm-color-primary-light)',
              textAlign: 'center',
              fontSize: '1.05rem',
              fontWeight: 500
            }}>
              🌍 Global experience: 🇵🇭 Philippines • 🇸🇬 Singapore • 🇩🇪 Germany • 🇱🇺 Luxembourg
            </div>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Professional overview</Heading>
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'var(--ifm-color-emphasis-50)',
              borderRadius: '8px',
              marginTop: '1rem',
              lineHeight: '1.8'
            }}>
              <ul style={{margin: 0}}>
                <li>Over 10 years delivering high-quality documentation for varied audiences</li>
                <li>Versatile experience as an individual contributor, team member, and team lead</li>
                <li>Own the full documentation lifecycle: tool assessment, content strategy, writing, review, publishing, feedback, and maintenance</li>
                <li>Expert at creating content for diverse audiences: engineers, solution architects, developers, sales professionals, and non-technical users</li>
                <li>Developed conceptual guides, how-to guides, references, and tutorials</li>
                <li>Collaborate effectively with cross-functional teams; familiar with Agile, DevOps, SDLC, and docs-as-code</li>
                <li>Strong advocate for treating documentation as a product held to the same standards as the core product</li>
                <li>Contributed beyond technical writing—co-led marketing efforts and SaaS rollouts in Southeast Asia</li>
              </ul>
            </div>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">My documentation philosophy</Heading>
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'var(--ifm-color-info-light)',
              borderRadius: '8px',
              marginTop: '1rem',
              lineHeight: '1.8'
            }}>
              <p>
                <strong>Documentation as a product:</strong> I advocate for developing documentation with the 
                same high standards as the core product, using modern processes like docs-as-code. Documentation 
                deserves the same rigor, planning, and care as any feature you release.
              </p>
              <p>
                <strong>Usability first:</strong> Beyond accuracy and completeness, I believe the true value of 
                a document lies in its usability. Good documentation comes in various formats, delivering the 
                best user journey and experience for your audience.
              </p>
              <p>
                <strong>User journey and information architecture:</strong> I design structure, layout, and navigation 
                to guide users through tasks with minimal friction. Acting as a user advocate first and foremost, I 
                prioritize discoverability, task orientation, and clear paths so people can find what they need fast 
                and accomplish goals confidently.
              </p>
              <p>
                <strong>Precision and appropriate creativity:</strong> High-quality documentation balances exactness with 
                just-enough creativity—clear narratives, thoughtful visuals, and engaging examples—to drive usability, 
                effectiveness, and real value. The goal is content people want to read and can act on.
              </p>
              <p>
                <strong>Writing for everyone:</strong> I write for audiences of varying technical skills—from 
                engineers to sales professionals and end users. Clear communication means understanding your 
                reader and tailoring content to their needs.
              </p>
            </div>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Current role</Heading>
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'var(--ifm-color-primary-lightest)',
              borderRadius: '8px',
              borderLeft: '4px solid var(--ifm-color-primary)',
              marginTop: '1rem'
            }}>
              <h3 style={{marginTop: 0}}>Senior Technical Writer II</h3>
              <p style={{fontWeight: 'bold', color: 'var(--ifm-color-primary-dark)', marginBottom: '0.5rem'}}>
                Luxembourg National Data Service (LNDS)
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
                July 2025 - Present • Luxembourg (Hybrid)
              </p>
              <ul style={{lineHeight: '1.8', marginBottom: 0}}>
                <li>Develop comprehensive documentation including API guides, system operations manuals, integration guides, and user manuals</li>
                <li>Work closely with Development and Data Science teams to gather information and ensure documentation aligns with project requirements and standards</li>
                <li>Create and manage a documentation library, ensuring all materials are up-to-date and easily accessible</li>
                <li>Translate complex technical concepts into clear, concise, and user-friendly content</li>
                <li>Proofread and edit documentation to ensure clarity, consistency, and accuracy</li>
                <li>Collect and incorporate feedback from users and stakeholders to continuously improve documentation quality</li>
                <li>Stay updated with the latest trends and technologies to ensure documentation reflects current best practices</li>
                <li>Coach teams on technical writing and best practices, fostering a culture of collaboration and continuous learning</li>
                <li>Serve as a Scrum Master for a cross-functional team, facilitating agile ceremonies, removing impediments, and promoting collaboration</li>
                <li>Assist the Communications team in crafting technical content tailored for external audiences, ensuring clarity, accuracy, and engagement</li>
              </ul>
            </div>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Key skills</Heading>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '1rem'
            }}>
              <div>
                <Heading as="h3">Documentation</Heading>
                <ul>
                  <li>API documentation</li>
                  <li>End-user documentation</li>
                  <li>System design documentation</li>
                  <li>System operations manuals</li>
                  <li>Integration guides</li>
                  <li>User guides and manuals</li>
                  <li>Docs-as-code</li>
                  <li>Markdown and HTML</li>
                  <li>Developer experience</li>
                  <li>Documentation libraries</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Content and communication</Heading>
                <ul>
                  <li>Technical writing</li>
                  <li>UX writing</li>
                  <li>Visual communication</li>
                  <li>External communications</li>
                  <li>Content strategy</li>
                  <li>Business communication</li>
                  <li>Copywriting and blog writing</li>
                  <li>Whitepapers and reports</li>
                  <li>Marketing materials</li>
                  <li>Training development</li>
                  <li>Video storyboarding</li>
                  <li>Marketing collateral development</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Leadership and agile</Heading>
                <ul>
                  <li>Scrum master</li>
                  <li>Team management</li>
                  <li>Team coaching</li>
                  <li>Cross-functional collaboration</li>
                  <li>Agile ceremonies</li>
                  <li>Stakeholder management</li>
                  <li>SaaS implementation</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Tools and technologies</Heading>
            <p style={{marginTop: '1rem'}}>
              GitLab • GitHub • VS Code • Docusaurus • Confluence • JIRA • Mermaid • Draw.io • Readme.io • Camtasia • Miro • Figma • Postman • Swagger • Zendesk • Google Ads • Filmora • Adobe FrameMaker
            </p>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Certificates</Heading>
            <p style={{marginTop: '1rem'}}>Microsoft AZ-900: Azure Fundamentals</p>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Languages</Heading>
            <p style={{marginTop: '1rem'}}>English • Filipino</p>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Education</Heading>
            <div style={{marginTop: '1rem'}}>
              <p style={{margin: 0}}><strong>Bachelor’s Degree in Computer Engineering</strong></p>
              <p style={{margin: 0}}>University of San Carlos – Technological Center, Cebu City, Philippines</p>
              <p style={{margin: 0}}>June 2001 – March 2006</p>
            </div>
          </section>

          <section style={{marginTop: '3rem', paddingBottom: '2rem'}}>
            {/* <Heading as="h2">Get my CV</Heading> */}
            <p>
              <a 
                href="https://drive.google.com/file/d/1GRXUg1uiGIPiXQtlNAslWxp3eoYxbnx_/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--ifm-color-primary)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                Download my CV
              </a>
            </p>
          </section>
        </div>
        
        <BrandLogos />
      </main>
    </Layout>
  );
}
