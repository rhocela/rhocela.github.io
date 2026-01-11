import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  date?: string;
}

interface Reference {
  name: string;
  role: string;
  company: string;
  relationship: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Rose is wonderfully creative but also hard working and resourceful and I was fortunate enough to work along side her for over 5 years. Rose really take the time to deep dive and understand the technicalities of complex concepts and translate them into easy to understand and engaging content, which are used by end users, new joiners and as source of truth. Being in a lean team, she was always willing to lend an extra hand and help in any capacity she could. Even though her core competency is technical writing, she expanded and grew into multiple different roles seamlessly as needed, from project admin, marketer, content creator and sales admin. Rose brings a great attitude and team spirit and is a pleasure to work with and any organisation or team would be fortunate to work with her.',
    author: 'Linh Phan',
    role: 'Chief Strategy Officer',
    company: 'Zyllem',
    date: 'June 2023',
  },
  {
    quote: 'Rose (Rhocela) joined Zyllem as the company\'s first technical writer during a time of growth. As a one-woman team Rose has done an exceptional job of creating a wide range of documentation including customer facing online help, internal documentation, videos, and white papers. She learned a complex product quickly, and her writing skills are faultless. During her time at Zyllem Rose has constantly risen to meet new challenges and exceeded expectations. In a start-up, resources are limited and people are often asked to step outside their comfort zone. Rose learned from scratch how to create videos for both product training and marketing - within weeks she was churning out high quality professional material. The team at Zyllem recognised in this work a creative flair that cannot be taught. On the back of this, Rose\'s skills were very much in demand and she juggled writing and design tasks from the marketing team, product team, and services team without letting her core work slide. Most recently Rose has begun working very closely with the product team and developers on UX / UI design - this is still a new skill for her but her creative talent, product knowledge and innate common sense have resulted in excellent designs and wireframes that are currently in development. Rose is talented, works hard and is efficient and diligent in her tasks; never missing a deadline, communicating well and always willing to give something new a try. She has been a pleasure to work with and manage, and I hope to have the opportunity to work with her again.',
    author: 'Niamh Connell',
    role: 'Head of Product Management',
    company: 'Zyllem',
    date: 'December 2016',
  },
  {
    quote: 'I have worked with Rhocela for more than two years and it has been a breeze. She is meticulous, hard-working, accommodating and a very quick learner. Apart from technical knowledge, Rhocela dabbles into creative writing as well. She is a great team-player and an asset to any organisation.',
    author: 'Ayesha Nazneen Erasmus',
    role: 'Content Lead',
    company: 'In2 Marketing & Consulting Pte Ltd',
    date: 'May 2015',
  },
];

const professionalReferences: Reference[] = [
  {
    name: 'Lisa Nguyen',
    role: 'Head of Customer Success',
    company: 'Zyllem Pte Ltd (Singapore)',
    relationship: 'Direct manager from Apr 2017 – Jul 2023',
  },
  {
    name: 'Mary Grace Jagusch',
    role: 'User Experience Designer',
    company: 'MobiLab Solutions (Germany)',
    relationship: 'Colleague from Sep 2023 – present',
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
      {testimonial.date && (
        <p style={{
          fontSize: '0.85rem',
          color: 'var(--ifm-color-emphasis-600)',
          marginBottom: '1rem',
          fontWeight: 600,
        }}>
          {testimonial.date}
        </p>
      )}
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
          {testimonial.company && `, ${testimonial.company}`}
        </p>
      </div>
    </div>
  );
}

function ReferenceCard({ reference }: { reference: Reference }) {
  return (
    <div style={{
      padding: '1.5rem',
      backgroundColor: 'var(--ifm-color-emphasis-50)',
      border: '1px solid var(--ifm-color-emphasis-200)',
      borderRadius: '4px',
      marginBottom: '1rem',
    }}>
      <p style={{margin: 0, fontWeight: 'bold', fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-900)'}}>
        {reference.name}
      </p>
      <p style={{margin: '0.25rem 0', fontSize: '0.95rem', color: 'var(--ifm-color-emphasis-700)'}}>
        {reference.role}, {reference.company}
      </p>
      <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)', fontStyle: 'italic'}}>
        {reference.relationship}
      </p>
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

          <section style={{marginTop: '3rem'}}>
            <Heading as="h2" style={{marginBottom: '1.5rem'}}>
              More professional references
            </Heading>
            <p style={{fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-700)'}}>
              Additional references available upon request.
            </p>
            {professionalReferences.map((reference, idx) => (
              <ReferenceCard key={idx} reference={reference} />
            ))}
          </section>

          <section style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <Heading as="h2">Ready to create something great together?</Heading>
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
