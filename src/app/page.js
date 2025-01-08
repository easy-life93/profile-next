import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container flex flex-col mx-auto mt-24 px-[5%] py-10">
        <HomeSection />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default Home;