import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: '[TODO: Replace with actual testimonial quote from your clients/colleagues]',
    author: '[TODO: Testimonial Author Name]',
    role: '[TODO: Author Role/Title]',
    company: '[TODO: Company Name]',
  },
  {
    quote: '[TODO: Replace with actual testimonial quote from your clients/colleagues]',
    author: '[TODO: Testimonial Author Name]',
    role: '[TODO: Author Role/Title]',
    company: '[TODO: Company Name]',
  },
  {
    quote: '[TODO: Replace with actual testimonial quote from your clients/colleagues]',
    author: '[TODO: Testimonial Author Name]',
    role: '[TODO: Author Role/Title]',
    company: '[TODO: Company Name]',
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: 'var(--ifm-color-emphasis-50)',
      borderLeft: '4px solid var(--ifm-color-primary)',
      borderRadius: '4px',
      marginBottom: '1.5rem',
    }}>
      <div style={{
        fontSize: '1.5rem',
        color: 'var(--ifm-color-primary)',
        marginBottom: '1rem',
      }}>
        ❝
      </div>
      <p style={{
        fontStyle: 'italic',
        fontSize: '1.05rem',
        lineHeight: '1.8',
        marginBottom: '1.5rem',
        color: 'var(--ifm-color-emphasis-800)',
      }}>
        {testimonial.quote}
      </p>
      <div>
        <p style={{margin: 0, fontWeight: 'bold', color: 'var(--ifm-color-emphasis-900)'}}>
          {testimonial.author}
        </p>
        <p style={{margin: '0.25rem 0 0 0', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>
          {testimonial.role}
          {testimonial.company && ` at ${testimonial.company}`}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials(): ReactNode {
  return (
    <Layout title="Testimonials" description="Testimonials and feedback from clients and colleagues">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <Heading as="h1">Testimonials</Heading>
          <p style={{fontSize: '1.1rem', marginTop: '1rem', marginBottom: '2rem'}}>
            What my clients and colleagues say about working with me.
          </p>

          <section>
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </section>

          <section style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--ifm-color-info-light)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <Heading as="h2">Ready to Create Something Great Together?</Heading>
            <p style={{marginTop: '1rem', marginBottom: '1.5rem'}}>
              I'd love to hear about your project and how I can help bring clarity to your documentation and content.
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
              Send Me a Message
            </a>
          </section>
        </div>
      </main>
    </Layout>
  );
}
