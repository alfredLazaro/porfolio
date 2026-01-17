// ============================================
// src/components/Contact.tsx - IMPROVED
// ============================================
import { useState, FormEvent, ChangeEvent } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      alert('Thanks for reaching out! This is a demo. Connect your form handler (EmailJS, Formspree, etc.)');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: '#1f2937',
    border: '1px solid #374151',
    borderRadius: '0.5rem',
    color: 'white',
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    color: '#d1d5db',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  return (
    <section id="contact" style={{ padding: '5rem 1rem' }}>
      <div style={{ maxWidth: '672px', margin: '0 auto' }}>
        <h3 
          style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center',
            color: 'white'
          }}
        >
          Get In Touch
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#374151';
                e.currentTarget.style.boxShadow = 'none';
              }}
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#374151';
                e.currentTarget.style.boxShadow = 'none';
              }}
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              style={{
                ...inputStyle,
                resize: 'vertical',
                minHeight: '120px'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#60a5fa';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(96, 165, 250, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#374151';
                e.currentTarget.style.boxShadow = 'none';
              }}
              placeholder="Your message..."
            />
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.5 : 1,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.background = 'linear-gradient(to right, #2563eb, #7c3aed)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #3b82f6, #8b5cf6)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
