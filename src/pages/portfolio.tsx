import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const toSentenceCase = (text: string) => {
  if (!text) return text;
  const lower = text.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

interface Project {
  title: string;
  description: string;
  category: string;
  role: string;
  link?: string;
  external?: boolean;
}

const projects: Project[] = [
  {
    title: 'GDI Portal Documentation',
    description: 'Comprehensive documentation site for the Genomic Data Infrastructure (GDI) Portal, a government platform for managing access to genomic data. Developed from scratch using Docusaurus, including user guide, deployment guide, and developer guide. Designed complete content strategy, information architecture, and multi-audience structure. Managing end-to-end maintenance and updates.',
    category: 'Technical Documentation',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/',
    external: true,
  },
  {
    title: 'Metadata Capture Documentation',
    description: 'Full-scale documentation site for Luxembourg\'s Metadata Capture platform, a tool for managing and sharing datasets for government and public institutions. Built from scratch with Docusaurus, containing user guide, system admin deployment guide, and developer guide. Designed content strategy and structure for complete documentation lifecycle management.',
    category: 'Technical Documentation',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://docs.metadata.lnds.lu/',
    external: true,
  },
  {
    title: 'Zyllem API Documentation and User Guide',
    description: 'A comprehensive step-by-step guide to integrating with Zyllem, a software solution for last-mile distribution. Created using Readme.io with clear examples and integration instructions.',
    category: 'API Documentation',
    role: 'Technical Writer',
    link: 'https://developer.zyllem.com/',
    external: true,
  },
  {
    title: 'Intel Whitepaper',
    description: 'A detailed whitepaper about an award-winning Intel-powered solution designed by one of Intel\'s channel partners. Demonstrates technical expertise in B2B content creation.',
    category: 'Marketing & Content',
    role: 'Technical Writer & Content Developer',
    link: 'https://drive.google.com/open?id=0BzvSeh0uSLpKaWxMbFBVSzh4ZUk',
    external: true,
  },
  {
    title: 'Intel SSD Brochure',
    description: 'A three-fold brochure targeted at business owners and IT decision makers. Explains enterprise-grade Intel SSD benefits using a well-trained marathon runner analogy for easy understanding.',
    category: 'Marketing & Content',
    role: 'Content Developer & Copywriter',
    link: 'https://drive.google.com/file/d/0BzvSeh0uSLpKNHJ4YVZYLTNrVDQ/view',
    external: true,
  },
  {
    title: 'Zyllem Video Tutorial Series',
    description: 'Step-by-step tutorials on integrating your Shopify store with Zyllem using a plugin. Produced with storyboard, animation, and voice-over using Camtasia Studio.',
    category: 'Video & Multimedia',
    role: 'Video Producer & Scriptwriter',
    link: 'https://www.youtube.com/channel/UC3BdqwCRUBn0OF2A9MFoZ3A',
    external: true,
  },
  {
    title: 'Zyllem Promotional Video',
    description: 'A short promotional video showcasing Zyllem\'s Batch Delivery feature. Produced using Camtasia Studio with professional storyboarding, animation, and voice-over.',
    category: 'Video & Multimedia',
    role: 'Video Producer & Animator',
    link: 'https://www.youtube.com/channel/UC3BdqwCRUBn0OF2A9MFoZ3A',
    external: true,
  },
  {
    title: 'Landing Pages',
    description: 'Developed multiple high-converting landing pages with copywriting and publication. Led the complete sales cycle including lead collection and optimization.',
    category: 'Web & Marketing',
    role: 'Content Developer & Copywriter',
    link: 'https://www.zyllem.com/logistics-management',
    external: true,
  },
  {
    title: 'Zyllem Whitepaper',
    description: 'A comprehensive whitepaper on how Zyllem enables digital transformation for enterprise distribution networks. Designed in A5 booklet format for professional presentation.',
    category: 'Marketing & Content',
    role: 'Technical Writer',
    link: 'https://drive.google.com/open?id=0BzvSeh0uSLpKZFZlWVB2dlJpUE0',
    external: true,
  },
  {
    title: 'Intel-Windows Tablet Tearsheet',
    description: 'A consumer-facing tearsheet on Intel-based Windows 8 tablets highlighting unique capabilities enabled by the operating system and processor. Targeted at end-users.',
    category: 'Marketing & Content',
    role: 'Content Developer',
    link: 'https://drive.google.com/file/d/0BzvSeh0uSLpKMzVreWl6WlF3Mnc/view?usp=sharing',
    external: true,
  },
  {
    title: 'Intel Animated Web Banners',
    description: 'Animated web banners showcasing 2-in-1 devices powered by Intel Core M processors. Created for web campaigns with compelling visuals and messaging.',
    category: 'Video & Multimedia',
    role: 'Content Developer & Designer',
    link: 'https://www.youtube.com/watch?v=P-TPZ3iDF3w',
    external: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-200)',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      backgroundColor: 'var(--ifm-color-emphasis-50)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
    onMouseEnter={(e) => {
      const elem = e.currentTarget;
      elem.style.transform = 'translateY(-4px)';
      elem.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }}
    onMouseLeave={(e) => {
      const elem = e.currentTarget;
      elem.style.transform = 'translateY(0)';
      elem.style.boxShadow = 'none';
    }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem'}}>
        <Heading as="h4" style={{margin: 0}}>{project.title}</Heading>
        <span style={{
          backgroundColor: 'var(--ifm-color-primary)',
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          whiteSpace: 'nowrap',
          marginLeft: '1rem',
        }}>
          {project.category}
        </span>
      </div>
      <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '0.75rem', fontSize: '0.9rem'}}>
        <strong>Role:</strong> {project.role}
      </p>
      <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
        {project.description}
      </p>
      {project.link && (
        <a 
          href={project.link}
          target={project.external ? '_blank' : undefined}
          rel={project.external ? 'noopener noreferrer' : undefined}
          style={{
            display: 'inline-block',
            color: 'var(--ifm-color-primary)',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderBottom: '2px solid var(--ifm-color-primary)',
          }}
        >
          {project.external ? 'View Project →' : 'View Project →'}
        </a>
      )}
    </div>
  );
}

export default function Portfolio(): ReactNode {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const tocEntries = [
    ...categories.map((category) => ({
      label: category,
      href: `#${slugify(category)}`,
    })),
    {label: 'Publications', href: '#publications'},
    {label: 'Contact', href: '#contact'},
  ];

  return (
    <Layout title="Portfolio" description="Rhocela Pasigna's Portfolio">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <Heading as="h1">My portfolio</Heading>
          <p style={{fontSize: '1.1rem', marginTop: '1rem', marginBottom: '2rem'}}>
            A showcase of my work across API documentation, marketing content, and video production.
            Each project represents my commitment to creating clear, user-focused, and impactful content.
          </p>

          <div style={{
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: '8px',
            padding: '1rem 1.25rem',
            marginBottom: '2rem',
            background: 'var(--ifm-color-emphasis-50)',
          }}>
            <Heading as="h3" style={{marginTop: 0}}>On this page</Heading>
            <ul style={{
              listStyle: 'disc',
              paddingLeft: '1.25rem',
              marginBottom: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.35rem 1rem',
            }}>
              {tocEntries.map((entry) => (
                <li key={entry.href} style={{margin: 0}}>
                  <a href={entry.href} style={{color: 'var(--ifm-color-primary)', fontWeight: 600}}>
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {categories.map((category) => (
            <section key={category} id={slugify(category)} style={{marginBottom: '3rem'}}>
              <Heading as="h2" style={{marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--ifm-color-primary)'}}>
                {toSentenceCase(category)}
              </Heading>
              {projects
                .filter((p) => p.category === category)
                .map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
            </section>
          ))}

          <section id="publications" style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--ifm-color-primary)'}}>
              Publications & thought leadership
            </Heading>
            
            {/* Book 1 */}
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              backgroundColor: 'var(--ifm-color-emphasis-50)',
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem'}}>
                <Heading as="h4" style={{margin: 0}}>The Self-Discovery Quizbook</Heading>
                <span style={{
                  backgroundColor: 'var(--ifm-color-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  marginLeft: '1rem',
                }}>
                  Book Details
                </span>
              </div>
              <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '0.75rem', fontSize: '0.9rem'}}>
                <strong>Author & Creator</strong>
              </p>
              <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
                Interactive book featuring 70 personality quizzes designed to help you explore your psyche 
                and uncover your inner thoughts on self, relationships, career, and beyond. Perfect for 
                self-reflection, personal growth, and thought-provoking conversations.
              </p>
              <a 
                href="https://www.amazon.com/Self-Discovery-Quizbook-Personality-Subconscious-Rediscover-ebook/dp/B0DNY6879W"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  color: 'var(--ifm-color-primary)',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--ifm-color-primary)',
                }}
              >
                Read on Amazon →
              </a>
            </div>

            {/* Book 2 */}
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              backgroundColor: 'var(--ifm-color-emphasis-50)',
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem'}}>
                <Heading as="h4" style={{margin: 0}}>Prayers of a Worshipper</Heading>
                <span style={{
                  backgroundColor: 'var(--ifm-color-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  marginLeft: '1rem',
                }}>
                  Book Details
                </span>
              </div>
              <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '0.75rem', fontSize: '0.9rem'}}>
                <strong>Author & Creator</strong>
              </p>
              <p style={{marginBottom: '1rem', lineHeight: '1.6'}}>
                Soul-stirring collection of 70 prayers paired with Bible verses, written during times of 
                worship and reflection. A spiritual companion for those seeking devotion, daily surrender, 
                and the peace that only comes through communion with God.
              </p>
              <a 
                href="https://www.amazon.com/Prayers-Worshipper-Christian-Devotional-meditation/dp/B0D31WNBBM"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  color: 'var(--ifm-color-primary)',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--ifm-color-primary)',
                }}
              >
                Read on Amazon →
              </a>
            </div>
          </section>

          <section id="contact" style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <Heading as="h2">Interested in working together?</Heading>
            <p style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
              I'm always interested in new opportunities and collaborations. Let's connect!
            </p>
            <a 
              href="mailto:rhocela.pasigna@gmail.com"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Get In Touch
            </a>
          </section>
        </div>
      </main>
    </Layout>
  );
}
