import NavHeader from '@/pages/components/NavHeader';
import Footer from './components/Footer';

export default function Contact() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <NavHeader />
      
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            Have a question, suggestion, or just want to say hello? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container mx-auto px-6 py-16">
          <div className="contact-info-centered">
            <h2 className="contact-section-title">Let's Connect</h2>
            <p className="contact-description">
              I'm always interested in hearing about new opportunities, collaborations, 
              or just having a friendly chat about technology and development.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>yanahwang@gmail.com</p>
                  <span className="contact-note">Best for detailed discussions</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/yanahwang</p>
                  <span className="contact-note">Professional networking</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">🐙</div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <p>github.com/yanapang</p>
                  <span className="contact-note">Check out my projects</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">🐦</div>
                <div className="contact-details">
                  <h3>Twitter</h3>
                  <p>@yanapang_dev</p>
                  <span className="contact-note">Quick updates and thoughts</span>
                </div>
              </div>
            </div>
            
            <div className="response-time">
              <h3>Response Time</h3>
              <p>I typically respond within 24-48 hours. For urgent matters, please mention it in your subject line.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
