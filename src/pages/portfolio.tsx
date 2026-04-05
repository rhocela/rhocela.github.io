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
  let result = lower.charAt(0).toUpperCase() + lower.slice(1);
  // Preserve common acronyms like API at the start of the label
  result = result.replace(/^Api\b/, 'API');
  return result;
};

interface Project {
  title: string;
  description: string;
  category: string;
  role: string;
  link?: string;
  external?: boolean;
  repoLink?: string;
  resources?: { label: string; href: string }[];
}

const projects: Project[] = [
  // End-User Documentation
  {
    title: 'GDI Portal - User guides',
    description: 'Built dual-path documentation system for government genomic data platform, serving data users and catalogue managers with separate guides. Designed complete information architecture from scratch using Docusaurus.',
    category: 'End-User Documentation',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/',
    repoLink: 'https://github.com/GenomicDataInfrastructure/gdi-userportal-frontend',
    external: true,
    resources: [
      {label: 'User guide (data users)', href: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-data-users'},
      {label: 'User guide (catalogue managers)', href: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-catalogue-managers'},
    ],
  },
  {
    title: 'Metadata Capture - User guide',
    description: 'Created comprehensive step-by-step guides for dataset creation, metadata management, and collaboration workflows for Luxembourg government platform. Built complete documentation site from scratch using Docusaurus.',
    category: 'End-User Documentation',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://docs.metadata.lnds.lu/',
    repoLink: 'https://gitlab.com/lnds-lu/tooling/dca-metadata-capture',
    external: true,
    resources: [
      // {label: 'User guide', href: 'https://docs.metadata.lnds.lu/user-guide/intro'},
    ],
  },
  
  // Developer Documentation
  {
    title: 'GDI Portal - Developer guide',
    description: 'Designed developer documentation covering architecture, API integration, component docs, and contribution guidelines for genomic data infrastructure. Enabled rapid onboarding through structured setup instructions and development workflows.',
    category: 'Developer Documentation',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-developers',
    repoLink: 'https://github.com/GenomicDataInfrastructure/gdi-userportal-frontend',
    external: true,
  },
  {
    title: 'Metadata Capture - Developer guide',
    description: 'Created API documentation, environment setup, and architecture guides for open-source metadata platform. Established contribution guidelines to support developer onboarding and customization workflows.',
    category: 'Developer Documentation',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://docs.metadata.lnds.lu/developer/',
    repoLink: 'https://gitlab.com/lnds-lu/tooling/dca-metadata-capture',
    external: true,
  },
  {
    title: 'Zyllem - API documentation',
    description: 'Built comprehensive integration guide for last-mile distribution software with step-by-step workflows and code examples using Readme.io.',
    category: 'Developer Documentation',
    role: 'Technical Writer',
    link: 'https://developer.zyllem.com/',
    external: true,
  },
  
  // Deployment guide
  {
    title: 'GDI Portal - Deployment guide',
    description: 'Created production deployment documentation covering installation, security configuration, monitoring, and troubleshooting for government genomic data platform administrators.',
    category: 'Deployment guide',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-system-admins',
    repoLink: 'https://github.com/GenomicDataInfrastructure/gdi-userportal-frontend',
    external: true,
  },
  {
    title: 'Metadata Capture - Deployment guide',
    description: 'Developed system administration guide covering installation, database setup, security hardening, and operational procedures for Luxembourg metadata platform.',
    category: 'Deployment guide',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://docs.metadata.lnds.lu/system-admin/',
    repoLink: 'https://gitlab.com/lnds-lu/tooling/dca-metadata-capture',
    external: true,
  },
  
  // Marketing & sales
  {
    title: 'Intel - Whitepaper',
    description: 'Authored detailed technical whitepaper showcasing award-winning Intel-powered solution for B2B audience, demonstrating product innovation and channel partner success.',
    category: 'Marketing & sales',
    role: 'Technical Writer & Content Developer',
    link: 'https://drive.google.com/open?id=0BzvSeh0uSLpKaWxMbFBVSzh4ZUk',
    external: true,
  },
  {
    title: 'Intel SSD - Brochure',
    description: 'Developed tri-fold brochure for business owners explaining enterprise SSD benefits through accessible marathon runner analogy, simplifying complex technical advantages.',
    category: 'Marketing & sales',
    role: 'Content Developer & Copywriter',
    link: 'https://drive.google.com/file/d/0BzvSeh0uSLpKNHJ4YVZYLTNrVDQ/view',
    external: true,
  },
  {
    title: 'Zyllem - Campaign landing pages',
    description: 'Created high-converting landing pages with complete sales cycle management, including copywriting, publication, lead collection, and conversion optimization.',
    category: 'Marketing & sales',
    role: 'Content Developer & Copywriter',
    link: 'https://www.zyllem.com/logistics-management',
    external: true,
  },
  {
    title: 'Zyllem - Whitepaper',
    description: 'Authored comprehensive whitepaper on digital transformation for enterprise distribution networks, designed as professional A5 booklet for sales presentations.',
    category: 'Marketing & sales',
    role: 'Technical Writer',
    link: 'https://drive.google.com/open?id=0BzvSeh0uSLpKZFZlWVB2dlJpUE0',
    external: true,
  },
  {
    title: 'Intel Windows Tablet - Tearsheet',
    description: 'Created consumer-facing tearsheet highlighting Intel-based Windows 8 tablet capabilities, translating technical processor features into end-user benefits.',
    category: 'Marketing & sales',
    role: 'Content Developer',
    link: 'https://drive.google.com/file/d/0BzvSeh0uSLpKMzVreWl6WlF3Mnc/view?usp=sharing',
    external: true,
  },
  
  // Video & multimedia
  {
    title: 'Zyllem Video Tutorial Series',
    description: 'Produced complete tutorial series for Shopify-Zyllem integration, handling storyboard development, animation, scripting, and voice-over using Camtasia Studio.',
    category: 'Video & multimedia',
    role: 'Video Producer & Scriptwriter',
    link: 'https://www.youtube.com/channel/UC3BdqwCRUBn0OF2A9MFoZ3A',
    external: true,
  },
  {
    title: 'Zyllem Promotional Video',
    description: 'Created promotional video showcasing Batch Delivery feature with complete production workflow: storyboarding, animation, scripting, and voice-over using Camtasia Studio.',
    category: 'Video & multimedia',
    role: 'Video Producer & Animator',
    link: 'https://www.youtube.com/channel/UC3BdqwCRUBn0OF2A9MFoZ3A',
    external: true,
  },
  {
    title: 'Intel Animated Web Banners',
    description: 'Designed animated web banners for Intel Core M 2-in-1 device campaigns, creating compelling visual messaging for digital marketing.',
    category: 'Video & multimedia',
    role: 'Content Developer & Designer',
    link: 'https://www.youtube.com/watch?v=P-TPZ3iDF3w',
    external: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={{
      background: 'var(--ifm-color-emphasis-0)',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid var(--ifm-color-emphasis-200)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
      onMouseEnter={(e) => {
        const elem = e.currentTarget;
        elem.style.transform = 'translateY(-4px)';
        elem.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        const elem = e.currentTarget;
        elem.style.transform = 'translateY(0)';
        elem.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      }}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', gap: '1rem'}}>
        <Heading as="h3" style={{margin: 0, fontSize: '1.2rem', flex: 1}}>{project.title}</Heading>
      </div>
      <p style={{
        color: 'var(--ifm-color-primary-dark)',
        marginBottom: '1rem',
        fontSize: '0.95rem',
        fontWeight: 600
      }}>
        {project.role}
      </p>
      <p style={{marginBottom: '1.5rem', lineHeight: '1.7', flex: 1}}>
        {project.description}
      </p>
      {project.resources && project.resources.length > 0 && (
        <ul style={{
          margin: '0 0 1.5rem 0',
          paddingLeft: '1.25rem',
          lineHeight: '1.7'
        }}>
          {project.resources.map((res) => (
            <li key={res.href} style={{marginBottom: '0.5rem'}}>
              <a
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--ifm-color-primary)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--ifm-color-primary-light)',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--ifm-color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--ifm-color-primary-light)';
                }}
              >
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'auto'}}>
        {project.link && (
          <a 
            href={project.link}
            target={project.external ? '_blank' : undefined}
            rel={project.external ? 'noopener noreferrer' : undefined}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--ifm-color-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            View project
          </a>
        )}
        {project.repoLink && (
          <a 
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--ifm-color-emphasis-0)',
              color: 'var(--ifm-color-primary)',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: '2px solid var(--ifm-color-primary-light)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--ifm-color-primary-light)';
            }}
          >
            View repository
          </a>
        )}
      </div>
    </div>
  );
}

// Count projects per category for the sidebar labels
const categoryCounts = projects.reduce<Record<string, number>>((acc, project) => {
  acc[project.category] = (acc[project.category] || 0) + 1;
  return acc;
}, {});

export default function Portfolio(): ReactNode {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <Layout title="Portfolio" description="Rhocela Pasigna's Portfolio">
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '3rem 2rem',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <Heading as="h1" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
            Portfolio
          </Heading>
          <p style={{fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)', maxWidth: '700px', margin: '0 auto 2rem auto'}}>
            A selection of my professional work in documentation, content strategy, and multimedia production.
          </p>
          
          {/* Info Box - Additional documentation available */}
          <div style={{
            background: 'var(--ifm-color-info-lightest)',
            borderRadius: '12px',
            padding: '1.25rem',
            marginBottom: '0',
            display: 'flex',
            alignItems: 'start',
            gap: '1rem',
            border: '1px solid var(--ifm-color-info-light)',
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            <span style={{fontSize: '1.5rem', flexShrink: 0}}>ℹ️</span>
            <div style={{lineHeight: '1.6'}}>
              <strong style={{display: 'block', marginBottom: '0.5rem'}}>Additional documentation available upon request</strong>
              <span>I have additional user and technical documentation that isn't publicly available. During our meeting, I'm happy to share templatised versions (non-confidential) to respect client privacy and agreements.</span>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'min(280px, 100%) 1fr',
          gap: '2rem',
          alignItems: 'start',
        }}>
          {/* Table of Contents Sidebar */}
          <div style={{
            position: 'sticky',
            top: '90px',
            background: 'var(--ifm-color-emphasis-0)',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid var(--ifm-color-emphasis-200)',
          }}>
            <Heading as="h3" style={{fontSize: '1rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)'}}>
              Contents
            </Heading>
            <nav>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {Object.entries(categoryCounts).map(([cat, count]) => (
                  <li key={cat} style={{marginBottom: '0.75rem'}}>
                    <a 
                      href={`#${slugify(cat)}`}
                      style={{
                        textDecoration: 'none',
                        color: 'var(--ifm-color-emphasis-800)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-lightest)';
                        e.currentTarget.style.color = 'var(--ifm-color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--ifm-color-emphasis-800)';
                      }}
                    >
                      <span style={{fontSize: '0.95rem'}}>{toSentenceCase(cat)}</span>
                      <span style={{
                        backgroundColor: 'var(--ifm-color-primary-lightest)',
                        color: 'var(--ifm-color-primary)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}>
                        {count}
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#publications"
                    style={{
                      textDecoration: 'none',
                      color: 'var(--ifm-color-emphasis-800)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-lightest)';
                      e.currentTarget.style.color = 'var(--ifm-color-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--ifm-color-emphasis-800)';
                    }}
                  >
                    <span style={{fontSize: '0.95rem'}}>Publications</span>
                    <span style={{
                      backgroundColor: 'var(--ifm-color-primary-lightest)',
                      color: 'var(--ifm-color-primary)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}>
                      2
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div>
            {/* Projects by Category */}
            {Object.entries(categoryCounts).map(([category]) => {
              const categoryProjects = projects.filter(p => p.category === category);
              return (
                <section 
                  key={category}
                  id={slugify(category)}
                  style={{
                    marginBottom: '3rem',
                    background: 'var(--ifm-color-emphasis-0)',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                  }}
                >
                  <Heading as="h2" style={{
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    color: 'var(--ifm-color-primary)'
                  }}>
                    {toSentenceCase(category)}
                  </Heading>
                  <p style={{
                    marginBottom: '2rem',
                    color: 'var(--ifm-color-emphasis-700)',
                    lineHeight: '1.7'
                  }}>
                    {category === 'End-User Documentation' && 'User guides and documentation designed to help end-users understand and effectively use products and platforms.'}
                    {category === 'Developer Documentation' && 'Technical documentation, API references, integration guides, and architecture documentation for developers building and extending solutions.'}
                    {category === 'Deployment guide' && 'Installation guides, configuration documentation, deployment procedures, and operational documentation for system administrators and DevOps teams.'}
                    {category === 'Marketing & sales' && 'Whitepapers, brochures, case studies, and sales collateral communicating product value to business stakeholders.'}
                    {category === 'Video & multimedia' && 'Educational tutorials, promotional videos, animations, and visual content for user engagement and marketing.'}
                  </p>
                  
                  {/* Info Box for Video & Multimedia */}
                  {category === 'Video & multimedia' && (
                    <div style={{
                      background: 'var(--ifm-color-info-lightest)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      marginBottom: '2rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      border: '1px solid var(--ifm-color-info-light)',
                    }}>
                      <span style={{fontSize: '1.5rem'}}>🎬</span>
                      <div style={{lineHeight: '1.6'}}>
                        <strong>Hybrid Role:</strong> I wear two hats — not only do I document the workflows and processes, I also produce the videos and multimedia content myself using various tools and platforms.
                      </div>
                    </div>
                  )}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    {categoryProjects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Publications Section */}
            <section 
              id="publications"
              style={{
                marginBottom: '3rem',
                background: 'var(--ifm-color-emphasis-0)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                border: '1px solid var(--ifm-color-emphasis-200)',
              }}
            >
              <Heading as="h2" style={{
                fontSize: '1.8rem',
                marginBottom: '0.5rem',
                color: 'var(--ifm-color-primary)'
              }}>
                Publications
              </Heading>
              <p style={{
                marginBottom: '2rem',
                color: 'var(--ifm-color-emphasis-700)',
                lineHeight: '1.7'
              }}>
                Published books and written works.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}>
                {/* The Self-Discovery Quizbook */}
                <div style={{
                  background: 'var(--ifm-color-emphasis-0)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  border: '1px solid var(--ifm-color-emphasis-200)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                  onMouseEnter={(e) => {
                    const elem = e.currentTarget;
                    elem.style.transform = 'translateY(-4px)';
                    elem.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    const elem = e.currentTarget;
                    elem.style.transform = 'translateY(0)';
                    elem.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', gap: '1rem'}}>
                    <Heading as="h3" style={{margin: 0, fontSize: '1.2rem', flex: 1}}>
                      The Self-Discovery Quizbook
                    </Heading>
                    <span style={{
                      backgroundColor: 'var(--ifm-color-primary)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      whiteSpace: 'nowrap',
                      fontWeight: 500
                    }}>
                      Book
                    </span>
                  </div>
                  <p style={{
                    color: 'var(--ifm-color-primary-dark)',
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}>
                    Author and creator
                  </p>
                  <p style={{marginBottom: '1.5rem', lineHeight: '1.7', flex: 1}}>
                    A personal project. 70 personality quizzes to explore self, relationships, and career—framed for reflection and engaging conversations.
                  </p>
                  <a 
                    href="https://www.amazon.com/Self-Discovery-Quizbook-Personality-Subconscious-Rediscover-ebook/dp/B0DNY6879W"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: 'var(--ifm-color-primary)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      marginTop: 'auto',
                      alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    View on Amazon
                  </a>
                </div>

                {/* Prayers of a Worshipper */}
                <div style={{
                  background: 'var(--ifm-color-emphasis-0)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  border: '1px solid var(--ifm-color-emphasis-200)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                  onMouseEnter={(e) => {
                    const elem = e.currentTarget;
                    elem.style.transform = 'translateY(-4px)';
                    elem.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    const elem = e.currentTarget;
                    elem.style.transform = 'translateY(0)';
                    elem.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', gap: '1rem'}}>
                    <Heading as="h3" style={{margin: 0, fontSize: '1.2rem', flex: 1}}>
                      Prayers of a Worshipper
                    </Heading>
                    <span style={{
                      backgroundColor: 'var(--ifm-color-primary)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      whiteSpace: 'nowrap',
                      fontWeight: 500
                    }}>
                      Book
                    </span>
                  </div>
                  <p style={{
                    color: 'var(--ifm-color-primary-dark)',
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    fontWeight: 600
                  }}>
                    Author and creator
                  </p>
                  <p style={{marginBottom: '1.5rem', lineHeight: '1.7', flex: 1}}>
                    A personal project. 70 prayers paired with verses—written for daily surrender, reflection, and peace through worship.
                  </p>
                  <a 
                    href="https://www.amazon.com/Prayers-Worshipper-Christian-Devotional-meditation/dp/B0D31WNBBM"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.5rem',
                      backgroundColor: 'var(--ifm-color-primary)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      marginTop: 'auto',
                      alignSelf: 'flex-start'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section style={{
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              textAlign: 'center'
            }}>
              <Heading as="h2" style={{
                fontSize: '1.8rem',
                marginBottom: '0.5rem',
                color: 'var(--ifm-color-primary)'
              }}>
                Interested in working together?
              </Heading>
              <p style={{
                marginBottom: '2rem',
                color: 'var(--ifm-color-emphasis-700)',
                lineHeight: '1.7'
              }}>
                Let's talk about your project, documentation needs, or content roadmap.
              </p>
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
                <a 
                  href="mailto:rhocela.pasigna@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'var(--ifm-color-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  ✉️ Email me
                </a>
                <a 
                  href="https://www.linkedin.com/in/rhocela-pasigna-a39287b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'var(--ifm-color-emphasis-0)',
                    color: 'var(--ifm-color-primary)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    border: '2px solid var(--ifm-color-primary-light)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--ifm-color-primary-light)';
                  }}
                >
                  💼 LinkedIn
                </a>
              </div>

              {/* Back to top */}
              <div style={{marginTop: '2rem'}}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    color: 'var(--ifm-color-primary)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  ↑ Back to top
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

