import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Focus from './components/Focus';
import Impact from './components/Impact';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Impact />
        <Contact />
      </main>
      <footer className="bg-green-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Msambweni Better Heedu C.B.O. All rights reserved.</p>
      </footer>
    </div>
  );
}
