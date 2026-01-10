import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

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
          <Heading as="h1">About Me</Heading>
          
          <section style={{marginTop: '2rem', lineHeight: '1.8'}}>
            <p>
              I treat documentation as a product, and I advocate for developing it with the same high 
              standards as the core product, using processes like docs-as-code.
            </p>

            <p>
              Throughout my experience, I have worked as an individual contributor, a team member, and a team lead.
            </p>

            <p>
              I transform complex ideas, blending technical expertise and creative flair, to produce clear 
              and captivating content. I write for audiences of varying technical skills—from engineers to 
              sales professionals and end users.
            </p>

            <p>
              Apart from accuracy and completeness, I believe that the key value of a document lies in its 
              usability. Good documentation comes in various formats, delivering the best user journey and experience.
            </p>

            <p>
              Beyond technical writing, I've successfully co-managed SaaS implementation projects across Southeast 
              Asia, engaging with clients from requirement gathering to the go-live phase.
            </p>

            <p>
              I hold a Bachelor of Science degree in Computer Engineering. Experienced and committed to growth, 
              I value ownership, reliability, and continuous improvement.
            </p>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">My Documentation Philosophy</Heading>
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'var(--ifm-color-info-light)',
              borderRadius: '8px',
              marginTop: '1rem',
              lineHeight: '1.8'
            }}>
              <p>
                <strong>Documentation as a Product:</strong> I advocate for developing documentation with the 
                same high standards as the core product, using modern processes like docs-as-code. Documentation 
                deserves the same rigor, planning, and care as any feature you release.
              </p>
              <p>
                <strong>Usability First:</strong> Beyond accuracy and completeness, I believe the true value of 
                a document lies in its usability. Good documentation comes in various formats, delivering the 
                best user journey and experience for your audience.
              </p>
              <p>
                <strong>Writing for Everyone:</strong> I write for audiences of varying technical skills—from 
                engineers to sales professionals and end users. Clear communication means understanding your 
                reader and tailoring content to their needs.
              </p>
            </div>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Current Role</Heading>
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
            <Heading as="h2">Key Skills</Heading>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '1rem'
            }}>
              <div>
                <Heading as="h3">Documentation</Heading>
                <ul>
                  <li>API Documentation</li>
                  <li>System Operations Manuals</li>
                  <li>Integration Guides</li>
                  <li>User Guides & Manuals</li>
                  <li>Docs-as-Code</li>
                  <li>Developer Experience</li>
                  <li>Documentation Libraries</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Content & Communication</Heading>
                <ul>
                  <li>Technical Writing</li>
                  <li>External Communications</li>
                  <li>Content Strategy</li>
                  <li>Copywriting</li>
                  <li>Whitepapers & Reports</li>
                  <li>Marketing Materials</li>
                </ul>
              </div>
              <div>
                <Heading as="h3">Leadership & Agile</Heading>
                <ul>
                  <li>Scrum Master</li>
                  <li>Team Coaching</li>
                  <li>Cross-functional Collaboration</li>
                  <li>Agile Ceremonies</li>
                  <li>Stakeholder Management</li>
                  <li>SaaS Implementation</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Tools & Technologies</Heading>
            <p style={{marginTop: '1rem'}}>
              Docs-as-Code • API Documentation Tools • Readme.io • Camtasia Studio • 
              Content Management Systems • Agile/Scrum • Project Management • 
              Data Science Documentation • Technical Communication
            </p>
          </section>

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2">Education</Heading>
            <p style={{marginTop: '1rem'}}>
              <strong>Bachelor of Science in Computer Engineering</strong>
            </p>
          </section>

          <section style={{marginTop: '3rem', paddingBottom: '2rem'}}>
            <Heading as="h2">Get My CV</Heading>
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
                Download My CV
              </a>
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
