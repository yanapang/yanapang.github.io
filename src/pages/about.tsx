import NavHeader from '@/pages/components/NavHeader';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader />

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Image 
              src="/profile-picture.jpg" // Placeholder: Add your image to the /public folder
              alt="Yana Hwang"
              width={150}
              height={150}
              className="profile-image"
            />
            <h1 className="about-hero-title">About Me</h1>
            <p className="about-hero-subtitle">
              I'm a passionate developer, writer, and lifelong learner, dedicated to building beautiful and functional web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            
            {/* My Journey Section */}
            <div>
              <h2 className="about-section-title">My Journey</h2>
              <div className="prose lg:prose-xl max-w-none">
                <p>
                  My journey into the world of technology started with a simple "Hello, World!" and has since evolved into a deep passion for software development. I thrive on turning complex problems into elegant solutions and am constantly exploring new technologies to push the boundaries of what's possible. From front-end design to back-end architecture, I love every aspect of the development process.
                </p>
                <p>
                  This blog is my space to share what I've learned, document my projects, and connect with other like-minded individuals. I believe in the power of open-source and collaborative learning.
                </p>
              </div>
            </div>

            {/* My Skills Section */}
            <div>
              <h2 className="about-section-title">My Skills</h2>
              <div className="skills-grid">
                <div className="skill-item"><span>📘</span> TypeScript</div>
                <div className="skill-item"><span>⚛️</span> Vue3 </div>
                <div className="skill-item"><span>🟢</span> Java </div>
                <div className="skill-item"><span>🐍</span> Spring Boot </div>
                <div className="skill-item"><span>🗃️</span> MariaDB </div>
                <div className="skill-item"><span>🐳</span> Docker</div>
                <div className="skill-item"><span>🎨</span> Kubernetes </div>
                <div className="skill-item"><span>🏃‍♂️</span> Helm Chart </div>
                <div className="skill-item"><span>🏃‍♂️</span> Git </div>
                <div className="skill-item"><span>🏃‍♂️</span> Atlassian </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center pt-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Have a project in mind?</h2>
              <p className="text-gray-600 mb-8">I'm always open to discussing new projects and opportunities.</p>
              <Link href="/contact" className="btn-primary-about">
                Let's Connect
              </Link>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
