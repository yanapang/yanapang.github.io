import NavHeader from '@/pages/components/NavHeader';
import Footer from './components/Footer';

export default function Contact() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <NavHeader />

      {/* Contact Hero Section */}
      <section className="py-5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? I&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Let&apos;s Connect</h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* LinkedIn Card */}
              <div className="contact-card">
                <div className="contact-icon">💼</div>
                <h3 className="contact-card-title">LinkedIn</h3>
                <a href="https://linkedin.com/in/yanahwang" target="_blank" rel="noopener noreferrer" className="contact-card-link">linkedin.com/in/yanahwang</a>
                <p className="contact-card-note">Professional networking</p>
              </div>

              {/* GitHub Card */}
              <div className="contact-card">
                <div className="contact-icon">🐙</div>
                <h3 className="contact-card-title">GitHub</h3>
                <a href="https://github.com/yanapang" target="_blank" rel="noopener noreferrer" className="contact-card-link">github.com/yanapang</a>
                <p className="contact-card-note">Check out my projects</p>
              </div>

              {/* Email Card */}
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3 className="contact-card-title">Email</h3>
                <a href="mailto:yanahwang@gmail.com" className="contact-card-link">yanahwang@gmail.com</a>
                <p className="contact-card-note">Feel free to reach out</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
