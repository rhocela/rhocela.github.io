import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact(): ReactNode {
  return (
    <Layout title="Contact" description="Get in touch with Rhocela Pasigna">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <Heading as="h1">Get in touch</Heading>
                    {/* <Heading as="h1">Get in touch</Heading> */}
          <p style={{fontSize: '1.1rem', marginTop: '1rem', marginBottom: '3rem'}}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}>
            {/* Email */}
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>✉️</div>
              <Heading as="h3">Email</Heading>
              <p>
                <a 
                  href="mailto:rhocela.pasigna@gmail.com"
                  style={{
                    color: 'var(--ifm-color-primary)',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  rhocela.pasigna@gmail.com
                </a>
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: 0}}>
                Get a response within 24 hours
              </p>
            </div>

            {/* LinkedIn */}
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>💼</div>
              <Heading as="h3">LinkedIn</Heading>
              <p>
                <a 
                  href="https://www.linkedin.com/in/rhocela-pasigna-a39287b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--ifm-color-primary)',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  Connect with me
                </a>
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: 0}}>
                View my professional profile
              </p>
            </div>

            {/* GitHub */}
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🔗</div>
              <Heading as="h3">GitHub</Heading>
              <p>
                <a 
                  href="https://github.com/rhocela"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--ifm-color-primary)',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  View GitHub profile
                </a>
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: 0}}>
                Check out my projects
              </p>
            </div>

            {/* GitLab */}
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🦊</div>
              <Heading as="h3">GitLab</Heading>
              <p>
                <a 
                  href="https://gitlab.com/rose.pasigna"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--ifm-color-primary)',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  View GitLab profile
                </a>
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: 0}}>
                Explore my contributions
              </p>
            </div>
          </div>

          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>What I'm looking for</Heading>
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
            }}>
              <ul style={{lineHeight: '1.8', margin: 0, fontSize: '1.05rem'}}>
                <li>Technical writing projects</li>
                <li>Full-time or contract-based roles</li>
                <li>Documentation lead or content strategy roles</li>
                <li>Collaboration with data or tech companies</li>
              </ul>
            </div>
          </section>

          <section style={{marginBottom: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>Download my CV</Heading>
            <div style={{
              padding: '2rem',
              background: 'var(--ifm-color-emphasis-0)',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid var(--ifm-color-emphasis-200)',
            }}>
              <p style={{marginTop: 0, marginBottom: '1.5rem', lineHeight: '1.7'}}>
                Get a printable copy of my experience, skills, and achievements.
              </p>
              <a 
                href="https://drive.google.com/file/d/1GRXUg1uiGIPiXQtlNAslWxp3eoYxbnx_/view?usp=sharing"
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
                Download CV
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
