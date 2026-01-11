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
  {
    title: 'GDI Portal Documentation',
    description: 'Comprehensive documentation site for the Genomic Data Infrastructure (GDI) Portal, a government platform for managing access to genomic data. Developed from scratch using Docusaurus, including user guide, deployment guide, and developer guide. Designed complete content strategy, information architecture, and multi-audience structure. Managing end-to-end maintenance and updates.',
    category: 'User & technical docs',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/',
    repoLink: 'https://github.com/GenomicDataInfrastructure/gdi-userportal-frontend',
    external: true,
    resources: [
      {label: 'User guide (data users)', href: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-data-users'},
      {label: 'User guide (managers)', href: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-catalogue-managers'},
      {label: 'Deployment guide', href: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-system-admins'},
      {label: 'Developer guide', href: 'https://genomicdatainfrastructure.github.io/gdi-userportal-frontend/welcome-developers'},
    ],
  },
  {
    title: 'Metadata Capture Documentation',
    description: "Full-scale documentation site for Luxembourg's Metadata Capture platform, a tool for managing and sharing datasets for government and public institutions. Built from scratch with Docusaurus, containing user guide, system admin deployment guide, and developer guide. Designed content strategy and structure for complete documentation lifecycle management.",
    category: 'User & technical docs',
    role: 'Lead Technical Writer & Content Strategist',
    link: 'https://docs.metadata.lnds.lu/',
    repoLink: 'https://gitlab.com/lnds-lu/tooling/dca-metadata-capture',
    external: true,
    resources: [
      {label: 'User guide', href: 'https://docs.metadata.lnds.lu/user-guide/intro'},
      {label: 'Deployment guide', href: 'https://docs.metadata.lnds.lu/system-admin/'},
      {label: 'Developer guide', href: 'https://docs.metadata.lnds.lu/developer/'},
    ],
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
    description: "A detailed whitepaper about an award-winning Intel-powered solution designed by one of Intel's channel partners. Demonstrates technical expertise in B2B content creation.",
    category: 'Marketing content',
    role: 'Technical Writer & Content Developer',
    link: 'https://drive.google.com/open?id=0BzvSeh0uSLpKaWxMbFBVSzh4ZUk',
    external: true,
  },
  {
    title: 'Intel SSD Brochure',
    description: 'A three-fold brochure targeted at business owners and IT decision makers. Explains enterprise-grade Intel SSD benefits using a well-trained marathon runner analogy for easy understanding.',
    category: 'Marketing content',
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
    description: "A short promotional video showcasing Zyllem's Batch Delivery feature. Produced using Camtasia Studio with professional storyboarding, animation, and voice-over.",
    category: 'Video & Multimedia',
    role: 'Video Producer & Animator',
    link: 'https://www.youtube.com/channel/UC3BdqwCRUBn0OF2A9MFoZ3A',
    external: true,
  },
  {
    title: 'Landing Pages',
    description: 'Developed multiple high-converting landing pages with copywriting and publication. Led the complete sales cycle including lead collection and optimization.',
    category: 'Marketing content',
    role: 'Content Developer & Copywriter',
    link: 'https://www.zyllem.com/logistics-management',
    external: true,
  },
  {
    title: 'Zyllem Whitepaper',
    description: 'A comprehensive whitepaper on how Zyllem enables digital transformation for enterprise distribution networks. Designed in A5 booklet format for professional presentation.',
    category: 'Marketing content',
    role: 'Technical Writer',
    link: 'https://drive.google.com/open?id=0BzvSeh0uSLpKZFZlWVB2dlJpUE0',
    external: true,
  },
  {
    title: 'Intel-Windows Tablet Tearsheet',
    description: "A consumer-facing tearsheet on Intel-based Windows 8 tablets highlighting unique capabilities enabled by the operating system and processor. Targeted at end-users.",
    category: 'Marketing content',
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
      }}
    >
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
      {project.resources && project.resources.length > 0 && (
        <ul style={{marginTop: 0, marginBottom: '0.85rem', paddingLeft: '1.1rem', color: 'var(--ifm-color-emphasis-700)'}}>
          {project.resources.map((res) => (
            <li key={res.href} style={{marginBottom: '0.25rem'}}>
              <a
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'var(--ifm-color-primary)', fontWeight: 600, textDecoration: 'none'}}
              >
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <div style={{display: 'flex', gap: '0.9rem', flexWrap: 'wrap'}}>
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
            View project →
          </a>
        )}
        {project.repoLink && (
          <a 
            href={project.repoLink}
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
            View repository →
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
  const tocEntries = [
    ...categories.map((category) => ({
      label: `${toSentenceCase(category)} (${categoryCounts[category] ?? 0})`,
      href: `#${slugify(category)}`,
    })),
    {label: 'Publications (2)', href: '#publications'},
  ];

  return (
    <Layout title="Portfolio" description="Rhocela Pasigna's Portfolio">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <Heading as="h1">My portfolio</Heading>
          <p style={{fontSize: '1.1rem', marginTop: '1rem', marginBottom: '1.25rem', maxWidth: '880px'}}>
            A concise showcase of my work across API documentation, marketing content, and video production—
            focusing on clarity, user impact, and end-to-end ownership from strategy to delivery.
          </p>
          <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.25rem'}}>
            <a 
              href="mailto:rhocela.pasigna@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: 'var(--ifm-color-primary)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 700,
              }}
            >
              ✉️ Email me
            </a>
            <a 
              href="https://drive.google.com/file/d/1GRXUg1uiGIPiXQtlNAslWxp3eoYxbnx_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: 'var(--ifm-color-emphasis-100)',
                color: 'var(--ifm-font-color-base)',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                border: '1px solid var(--ifm-color-emphasis-300)',
              }}
            >
              📄 Download my CV
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 280px) 1fr',
            gap: '1.75rem',
            alignItems: 'start',
          }}>
            <aside style={{
              position: 'sticky',
              top: '90px',
              padding: '1rem 1.25rem',
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '10px',
              background: 'var(--ifm-color-emphasis-50)',
            }}>
              <Heading as="h3" style={{marginTop: 0, marginBottom: '0.75rem', fontSize: '1.1rem'}}>
                On this page
              </Heading>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: '0.4rem',
              }}>
                {tocEntries.map((entry) => (
                  <li key={entry.href}>
                    <a 
                      href={entry.href}
                      style={{
                        color: 'var(--ifm-color-primary)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      • {entry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div>
              {categories.map((category, idx) => (
                <section
                  key={category}
                  id={slugify(category)}
                  style={{
                    marginBottom: '2.5rem',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    backgroundColor: idx % 2 === 0 ? 'var(--ifm-color-emphasis-50)' : 'var(--ifm-color-emphasis-100)',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                  }}
                >
                  <Heading as="h2" style={{marginBottom: '0.75rem'}}>
                    {toSentenceCase(category)}
                  </Heading>
                  <p style={{marginTop: 0, marginBottom: '1rem', color: 'var(--ifm-color-emphasis-700)'}}>
                    {categoryCounts[category]} project{categoryCounts[category] === 1 ? '' : 's'} focused on {category.toLowerCase()}.
                  </p>
                  {category === 'User & technical docs' && (
                    <>
                      <p style={{marginTop: 0, marginBottom: '1rem', color: 'var(--ifm-color-emphasis-700)'}}>
                        Includes end-user guides, developer guides, and deployment guides to cover both user and technical audiences.
                      </p>
                      <div style={{
                        marginTop: '0.5rem',
                        marginBottom: '1.25rem',
                        padding: '1rem 1.25rem',
                        border: '2px solid var(--ifm-color-info)',
                        borderRadius: '8px',
                        backgroundColor: 'var(--ifm-color-info-contrast-background)',
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'start'
                      }}>
                        <span style={{fontSize: '1.25rem', flexShrink: 0}}>ℹ️</span>
                        <div>
                          <strong style={{display: 'block', marginBottom: '0.35rem', color: 'var(--ifm-color-info-dark)'}}>
                            Additional documentation available upon request
                          </strong>
                          <span style={{color: 'var(--ifm-color-emphasis-800)', lineHeight: 1.6}}>
                            I have additional user and technical documentation that isn't publicly available. During our meeting, I'm happy to share templatised versions (non-confidential) to respect client privacy and agreements.
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.25rem',
                  }}>
                    {projects
                      .filter((p) => p.category === category)
                      .map((project, projectIdx) => (
                        <ProjectCard key={`${category}-${projectIdx}`} project={project} />
                      ))}
                  </div>
                </section>
              ))}

              <section id="publications" style={{
                marginBottom: '2.5rem',
                padding: '1.5rem',
                borderRadius: '12px',
                backgroundColor: 'var(--ifm-color-emphasis-50)',
                border: '1px solid var(--ifm-color-emphasis-200)',
              }}>
                <Heading as="h2" style={{marginBottom: '1rem', paddingBottom: '0.35rem', borderBottom: '2px solid var(--ifm-color-primary)'}}>
                  Publications
                </Heading>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1.25rem',
                }}>
                  <div style={{
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    overflow: 'hidden',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                  }}>
                    <div style={{height: '120px', background: 'linear-gradient(135deg, #e0ecff, #f5f9ff)'}} />
                    <div style={{padding: '1.25rem'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.35rem'}}>
                        <Heading as="h4" style={{margin: 0}}>The Self-Discovery Quizbook</Heading>
                        <span style={{
                          backgroundColor: 'var(--ifm-color-primary)',
                          color: 'white',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                        }}>
                          Book details
                        </span>
                      </div>
                      <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '0.5rem', fontSize: '0.9rem'}}>
                        <strong>Author and creator</strong>
                      </p>
                      <p style={{marginBottom: '0.9rem', lineHeight: '1.6'}}>
                        70 personality quizzes to explore self, relationships, and career—framed for reflection and engaging conversations.
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
                        View on Amazon →
                      </a>
                    </div>
                  </div>

                  <div style={{
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    overflow: 'hidden',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                  }}>
                    <div style={{height: '120px', background: 'linear-gradient(135deg, #f9ecff, #fff7ff)'}} />
                    <div style={{padding: '1.25rem'}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.35rem'}}>
                        <Heading as="h4" style={{margin: 0}}>Prayers of a Worshipper</Heading>
                        <span style={{
                          backgroundColor: 'var(--ifm-color-primary)',
                          color: 'white',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                        }}>
                          Book details
                        </span>
                      </div>
                      <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '0.5rem', fontSize: '0.9rem'}}>
                        <strong>Author and creator</strong>
                      </p>
                      <p style={{marginBottom: '0.9rem', lineHeight: '1.6'}}>
                        70 prayers paired with verses—written for daily surrender, reflection, and peace through worship.
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
                        View on Amazon →
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact" style={{
                marginTop: '1rem',
                padding: '1.5rem',
                backgroundColor: 'var(--ifm-color-emphasis-100)',
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-emphasis-200)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.75rem',
                justifyContent: 'space-between',
              }}>
                <div>
                  <Heading as="h2" style={{margin: 0}}>Interested in working together?</Heading>
                  <p style={{margin: '0.4rem 0 0 0', color: 'var(--ifm-color-emphasis-700)'}}>
                    Let's talk about your project, documentation needs, or content roadmap.
                  </p>
                </div>
                <div style={{display: 'flex', gap: '0.6rem', flexWrap: 'wrap'}}>
                  <a 
                    href="mailto:rhocela.pasigna@gmail.com"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.7rem 1.2rem',
                      backgroundColor: 'var(--ifm-color-primary)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: 700,
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
                      gap: '0.35rem',
                      padding: '0.7rem 1.2rem',
                      backgroundColor: 'white',
                      color: 'var(--ifm-color-primary)',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontWeight: 700,
                      border: '1px solid var(--ifm-color-primary)',
                    }}
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

