import type {ReactNode} from 'react';
import {useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BrandLogos from '@site/src/components/BrandLogos';

export default function About(): ReactNode {
  return (
    <Layout title="CV" description="CV - Rhocela Pasigna">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          {/* Hero Section */}
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
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
            <Heading as="h1" style={{marginBottom: '1rem'}}>Rhocela Pasigna</Heading>
            <p style={{fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem'}}>
              Senior Technical Writer • Documentation Lead • Scrum Master
            </p>

            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <StatCard emoji="📚" value="10+ Years" label="Experience" />
              <StatCard emoji="🌍" value="4 Countries" label="Global work" />
              <StatCard emoji="🏢" value="5 Industries" label="Diverse sectors" />
              <StatCard emoji="⚡" value="Scrum Master" label="Agile leader" />
            </div>
          </div>

          {/* About Summary Card */}
          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>About me</Heading>
            <div style={{
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              lineHeight: '1.8'
            }}>
              <p style={{marginBottom: '1rem'}}>
                Senior Technical Writer with a proven track record of building and leading documentation functions from the ground up.
              </p>
              <p style={{marginBottom: '1rem'}}>
                I establish documentation practices and standards while managing the entire documentation lifecycle—from planning to publication. I treat documentation as a product and advocate for developing it with the same high standards as the core product, using modern processes like docs-as-code.
              </p>
              <p style={{marginBottom: '1rem'}}>
                I transform complex ideas—blending technical expertise with clear, accessible content—to reach diverse audiences. Whether writing for engineers, sales professionals, or end users, I believe the true value of documentation lies in its usability and user experience.
              </p>
              <p style={{marginBottom: '1rem'}}>
                Passionate about fostering a culture of excellence through knowledge sharing, I am looking to connect with teams building great products and recognizing that great documentation is an essential part of that success.

                {/* I'm also experienced as a Scrum Master, driving continuous improvement and cross-functional collaboration. */}
              </p>
              {/* <p style={{marginBottom: 0}}>
                Looking to connect with teams building great products and recognizing that great documentation is an essential part of that success.
              </p> */}
            </div>
          </section>

          {/* Documentation Philosophy - Icon Boxes */}
          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>Documentation philosophy</Heading>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              <PhilosophyCard 
                emoji="🎯"
                title="Documentation as a product"
                description="I advocate for developing documentation with the same high standards as the core product, using modern processes like docs-as-code."
              />
              <PhilosophyCard 
                emoji="👥"
                title="Usability first"
                description="Beyond accuracy, the true value lies in usability. Good documentation delivers the best user journey and experience."
              />
              <PhilosophyCard 
                emoji="🗺️"
                title="User journey focused"
                description="I design structure and navigation to guide users through tasks with minimal friction, prioritizing discoverability."
              />
              <PhilosophyCard 
                emoji="✨"
                title="Precision + creativity"
                description="Balance exactness with just-enough creativity—clear narratives, thoughtful visuals—to drive real value."
              />
              {/* <PhilosophyCard 
                emoji="🌐"
                title="Writing for everyone"
                description="I write for audiences of varying technical skills—from engineers to end users. Clear communication means understanding your reader."
              /> */}
            </div>
          </section>

          {/* Professional Overview */}
          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>Professional overview</Heading>
            <div style={{
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)'
            }}>
              <ul style={{margin: 0, lineHeight: '1.8'}}>
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

          {/* Work Experience */}
          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>Work experience</Heading>
            
            {/* Job 1 */}
            <WorkExperienceCard 
              emoji="💼"
              title="Senior Technical Writer II"
              company="Luxembourg National Data Service (LNDS) (Luxembourg)"
              period="Jul 2025 - Present"
              responsibilities={[
                'Build and scale the documentation function from the ground up, owning the full lifecycle from tool evaluation and information architecture to content strategy, publication, and long-term maintenance',
                'Define documentation standards, workflows, and best practices, treating documentation as a product and aligning it with engineering and business goals',
                'Develop and execute a documentation roadmap and content strategy covering API guides, system operations manuals, integration guides, and user-facing documentation',
                'Partner with Development, Data, and Communications teams to align documentation with technical requirements, release cycles, and audience needs',
                'Establish and maintain a centralized documentation library, ensuring content accuracy, discoverability, and ongoing relevance',
                'Translate complex technical concepts into clear, usable, and audience-appropriate content for engineers, internal teams, and external users',
                'Implement review, feedback, and continuous improvement processes, incorporating stakeholder and user input to raise documentation quality and usability',
                'Coach and enable teams on technical writing principles, documentation workflows, and contribution standards, fostering a culture of shared ownership and quality',
                'Monitor industry trends and modern documentation practices (e.g., docs-as-code) to continuously evolve tooling, processes, and standards',
                'Serve as Scrum Master for a cross-functional team, facilitating agile ceremonies, removing impediments, and promoting continuous improvement and collaboration',
                'Support the Communications team by shaping technical content for external audiences, ensuring clarity, accuracy, and consistency with product messaging'
              ]}
            />

            {/* Job 2 */}
            <WorkExperienceCard 
              title="Technical Writer"
              company="MobiLab Solutions GmbH (Germany)"
              period="Sep 2023 - Jul 2025"
              responsibilities={[
                'Established and led documentation efforts for data integration products, acting as the sole technical writer during the initial phase and building foundational practices and standards',
                'Wrote end-to-end documentation for multiple audiences, including implementation and design documents, user guides, and tutorials',
                'Defined documentation structure, UX writing standards, and language consistency across products and related materials',
                'Collaborated with clients, Product Owners, Project Managers, Designers, and Engineers to understand technical concepts, product requirements, and user journeys',
                'Created, reviewed, and edited product-oriented blog content, ensuring alignment with product messaging and documentation standards',
                'Laid the groundwork for scaling documentation, enabling smoother onboarding and knowledge transfer as additional writers joined'
              ]}
            />

            {/* Job 3 */}
            <WorkExperienceCard 
              title="Senior Technical Writer"
              company="Zylem Pte Ltd (Singapore)"
              period="Dec 2015 - July 2023"
              responsibilities={[
                'Delivered diverse content needs for both internal and external communications and analyzed data to find the most suitable format for each',
                'Developed and maintained user guides, knowledge base, API documentation, release notes, training materials, and blog posts',
                'Assisted the Marketing and Communications teams in efforts from conceptualization to publication of the company website, social media, webinars, and blogs. Created sales and marketing content for print and digital media, including videos, newsletters, and campaigns',
                'Co-managed SaaS implementation projects from requirement gathering to the go-live phase'
              ]}
            />

            {/* Job 4 */}
            <WorkExperienceCard 
              title="Senior Content Developer"
              company="in2 Marketing (Singapore)"
              period="Jun 2012 - Nov 2015"
              responsibilities={[
                'Developed print and online B2B and B2C marketing content for Intel, Dell, Toshiba, and Lenovo across print and digital platforms',
                'Developed content strategy for clients\' B2B events across the Asia Pacific region',
                'Collaborated with the Design team to conceptualize content, designs, videos, and marketing campaign ideas',
                'Built and managed the company\'s Facebook page, increasing brand awareness'
              ]}
            />

            {/* Job 5 */}
            <WorkExperienceCard 
              title="Product Specialist"
              company="Lexmark (Philippines)"
              period="Jul 2005 - Apr 2012"
              responsibilities={[
                'Successfully led a team of eight professionals, resolving technical issues concerning multifunction printers and end-of-line printers',
                'Contributed to knowledge base articles',
                'Consistently surpassed KPIs and maintained exceptional customer service'
              ]}
            />

            {/* Job 6 */}
            <WorkExperienceCard 
              title="Level 2 Technical Support Representative"
              company="Stream Global Solutions, Inc. (Philippines)"
              period="Aug 2006 - Jan 2009"
              responsibilities={[
                'Resolved escalated issues concerning Dell PCs and notebooks',
                'Maintained a "High-Flyer Customer Satisfaction Award" for two consecutive years',
                'Created documentation and reports involving technical solutions'
              ]}
            />

            {/* Job 7 */}
            <WorkExperienceCard 
              title="Content Developer"
              company="Cebuhopper.com (Philippines)"
              period="Aug 2005 - Dec 2006"
              responsibilities={[
                'Wrote compelling write-ups and product advertisements',
                'Shaped the overall content of the website'
              ]}
            />
          </section>

          {/* Skills */}
          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>Skills</Heading>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <SkillCategory 
                emoji="📝"
                title="Documentation"
                skills={[
                  'API documentation',
                  'End-user documentation',
                  'System design documentation',
                  'System operations manuals',
                  'Integration guides',
                  'User guides and manuals',
                  'Docs-as-code',
                  'Markdown and HTML',
                  'Developer experience',
                  'Documentation libraries'
                ]}
              />
              <SkillCategory 
                emoji="💬"
                title="Content & Communication"
                skills={[
                  'Technical writing',
                  'UX writing',
                  'Visual communication',
                  'External communications',
                  'Content strategy',
                  'Business communication',
                  'Copywriting and blog writing',
                  'Whitepapers and reports',
                  'Marketing materials',
                  'Training development'
                ]}
              />
              <SkillCategory 
                emoji="👔"
                title="Leadership & Agile"
                skills={[
                  'Scrum master',
                  'Team management',
                  'Team coaching',
                  'Cross-functional collaboration',
                  'Agile ceremonies',
                  'Stakeholder management',
                  'SaaS implementation'
                ]}
              />
            </div>
          </section>

          {/* Tools & Technologies */}
          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>Tools</Heading>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {['GitLab', 'GitHub', 'VS Code', 'Docusaurus', 'Confluence', 'JIRA', 'Mermaid', 'Draw.io', 
                'Readme.io', 'Camtasia', 'Miro', 'Figma', 'Postman', 'Swagger', 'Zendesk', 'Google Ads', 
                'Filmora', 'Adobe FrameMaker'].map((tool) => (
                <ToolTag key={tool} name={tool} />
              ))}
            </div>
          </section>

          {/* Additional Info Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <InfoCard emoji="🎓" title="Education">
              <p style={{margin: 0, fontWeight: 'bold'}}>Bachelor's Degree in Computer Engineering</p>
              <p style={{margin: '0.25rem 0 0 0', fontSize: '0.9rem'}}>University of San Carlos, Philippines</p>
              <p style={{margin: '0.25rem 0 0 0', fontSize: '0.85rem', opacity: 0.7}}>2001 - 2006</p>
            </InfoCard>
            
            <InfoCard emoji="📜" title="Certificates">
              <p style={{margin: 0}}>Microsoft AZ-900: Azure Fundamentals</p>
            </InfoCard>
            
            <InfoCard emoji="🗣️" title="Languages">
              <p style={{margin: 0}}>English • Filipino</p>
            </InfoCard>
          </div>

          {/* Download CV Button */}
          <div style={{textAlign: 'center', paddingBottom: '2rem'}}>
            <a 
              href="https://drive.google.com/file/d/1GRXUg1uiGIPiXQtlNAslWxp3eoYxbnx_/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
            >
              📄 Download full CV
            </a>
          </div>
        </div>
        
        <BrandLogos />
      </main>
    </Layout>
  );
}

// Component Definitions
const StatCard = ({emoji, value, label}: {emoji: string; value: string; label: string}) => (
  <div style={{
    background: 'var(--ifm-color-emphasis-0)',
    borderRadius: '12px',
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid var(--ifm-color-emphasis-200)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'default'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  }}>
    <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>{emoji}</div>
    <div style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>{value}</div>
    <div style={{fontSize: '0.9rem', opacity: 0.8}}>{label}</div>
  </div>
);

const PhilosophyCard = ({emoji, title, description}: {emoji: string; title: string; description: string}) => (
  <div style={{
    background: 'var(--ifm-color-emphasis-0)',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid var(--ifm-color-emphasis-200)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'default'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  }}>
    <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>{emoji}</div>
    <h4 style={{marginBottom: '0.5rem', fontSize: '1.1rem'}}>{title}</h4>
    <p style={{margin: 0, fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.9}}>{description}</p>
  </div>
);

const SkillCategory = ({emoji, title, skills}: {emoji: string; title: string; skills: string[]}) => (
  <div style={{
    background: 'var(--ifm-color-emphasis-0)',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid var(--ifm-color-emphasis-200)'
  }}>
    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
      <span style={{fontSize: '1.5rem'}}>{emoji}</span>
      <h3 style={{margin: 0, fontSize: '1.2rem'}}>{title}</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '1.25rem', lineHeight: '1.8'}}>
      {skills.map((skill) => (
        <li key={skill} style={{fontSize: '0.95rem'}}>{skill}</li>
      ))}
    </ul>
  </div>
);

const ToolTag = ({name}: {name: string}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <span 
      style={{
        display: 'inline-block',
        padding: '0.5rem 1rem',
        background: isHovered ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-100)',
        color: isHovered ? 'white' : 'inherit',
        borderRadius: '20px',
        fontSize: '0.9rem',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        cursor: 'default',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isHovered ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </span>
  );
};

const WorkExperienceCard = ({emoji, title, company, period, responsibilities}: {
  emoji?: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}) => (
  <div style={{
    background: 'var(--ifm-color-emphasis-0)',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid var(--ifm-color-emphasis-200)',
    marginBottom: '1.5rem'
  }}>
    <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem'}}>
      {emoji && <div style={{fontSize: '2rem', flexShrink: 0}}>{emoji}</div>}
      <div style={{flex: 1}}>
        <h3 style={{margin: 0, fontSize: '1.2rem'}}>{title}</h3>
        <p style={{margin: '0.25rem 0', fontWeight: 'bold', color: 'var(--ifm-color-primary-dark)'}}>
          {company}
        </p>
        <p style={{margin: '0.25rem 0 0 0', fontSize: '0.9rem', opacity: 0.8}}>
          {period}
        </p>
      </div>
    </div>
    <ul style={{lineHeight: '1.7', marginBottom: 0, marginTop: '1rem', paddingLeft: '1.25rem'}}>
      {responsibilities.map((responsibility, index) => (
        <li key={index} style={{fontSize: '0.95rem', marginBottom: '0.5rem'}}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

const InfoCard = ({emoji, title, children}: {emoji: string; title: string; children: ReactNode}) => (
  <div style={{
    background: 'var(--ifm-color-emphasis-0)',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid var(--ifm-color-emphasis-200)'
  }}>
    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
      <span style={{fontSize: '1.5rem'}}>{emoji}</span>
      <h3 style={{margin: 0, fontSize: '1.1rem'}}>{title}</h3>
    </div>
    {children}
  </div>
);
