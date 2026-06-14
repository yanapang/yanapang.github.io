import NavHeader from '@/pages/components/NavHeader';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavHeader />

      {/* About Hero Section */}
      <section className="about-hero text-center py-5 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/profile-picture.jpg" // Placeholder: Add your image to the /public folder
              alt="Yana&apos;s Profile Picture"
              width={150}
              height={150}
              className="profile-image"
            />
            <h1 className="about-hero-title">Hi, I&apos;m Yana</h1>
            <p className="about-hero-subtitle">
              A passionate developer on a journey to build beautiful, functional, and user-centric web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-3 bg-white">
        <div className="container mx-auto py-5 px-4">
          <div className="max-w-3xl mx-auto space-y-5">

            {/* My Journey Section */}
            <div className="mb-5 text-center">
              <h2 className="about-section-title">My Journey</h2>
              <div className="prose lg:prose-xl mx-auto mt-5 text-gray-600">
                <p>
                  From my first &quot;Hello, World!&quot; to architecting complex applications, my fascination with technology has been a constant driving force. I believe in the power of code to solve real-world problems and create meaningful connections. This blog is my space to document my learnings, share my insights, and connect with fellow tech enthusiasts. I&apos;m always exploring new technologies, refining my skills, and striving to write clean, efficient, and maintainable code. It&apos;s a journey of continuous growth, and I&apos;m excited to share it with you.
                </p>
              </div>
            </div>

            {/* My Skills Section */}
            <div className="mb-5 text-center">
              <h2 className="about-section-title">My Skills</h2>
              <div className="skills-grid mt-5">
                <div className="skill-item"><span>📘</span> TypeScript</div>
                <div className="skill-item"><span>⚛️</span> Vue3</div>
                <div className="skill-item"><span>🟢</span> Java</div>
                <div className="skill-item"><span>🐍</span> Spring Boot</div>
                <div className="skill-item"><span>🗃️</span> MariaDB</div>
                <div className="skill-item"><span>🐳</span> Docker</div>
                <div className="skill-item"><span>🎨</span> Kubernetes</div>
                <div className="skill-item"><span>🏃‍♂️</span> Helm Chart</div>
                <div className="skill-item"><span>🏃‍♂️</span> Git</div>
                <div className="skill-item"><span>🏃‍♂️</span> Atlassian</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="about-section-title">Let&apos;s Connect</h2>
              <p className="prose lg:prose-xl mx-auto mt-5 text-gray-600">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
              </p>
              <Link href="/contact" legacyBehavior>
                <a className="btn-primary-about mt-5">Contact Me</a>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
