import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact(): ReactNode {
  return (
    <Layout title="Contact" description="Get in touch with Rhocela Pasigna">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <Heading as="h1">Get In Touch</Heading>
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
              backgroundColor: 'var(--ifm-color-emphasis-50)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
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
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                Get a response within 24 hours
              </p>
            </div>

            {/* LinkedIn */}
            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--ifm-color-emphasis-50)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
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
                  Connect with Me
                </a>
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                View my professional profile
              </p>
            </div>

            {/* GitHub */}
            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--ifm-color-emphasis-50)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
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
                  View GitHub Profile
                </a>
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                Check out my projects
              </p>
            </div>

            {/* GitLab */}
            <div style={{
              padding: '2rem',
              backgroundColor: 'var(--ifm-color-emphasis-50)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
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
                  View GitLab Profile
                </a>
              </p>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
                Explore my contributions
              </p>
            </div>
          </div>

          <section style={{
            padding: '2rem',
            backgroundColor: 'var(--ifm-color-info-light)',
            borderRadius: '8px',
            marginTop: '2rem',
          }}>
            <Heading as="h2">What I'm Looking For</Heading>
            <ul style={{lineHeight: '1.8', marginTop: '1rem', fontSize: '1.05rem'}}>
              <li>Freelance technical writing projects</li>
              <li>API documentation and developer experience</li>
              <li>Content strategy and marketing materials</li>
              <li>Video tutorials and multimedia content</li>
              <li>Full-time or contract-based roles</li>
              <li>Collaboration with SaaS and tech companies</li>
            </ul>
          </section>

          <section style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <Heading as="h2">Download My CV</Heading>
            <p style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
              Get a comprehensive overview of my experience, skills, and achievements.
            </p>
            <a 
              href="https://drive.google.com/file/d/1GRXUg1uiGIPiXQtlNAslWxp3eoYxbnx_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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
              Download CV
            </a>
          </section>
        </div>
      </main>
    </Layout>
  );
}
