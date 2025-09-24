import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutPreview from "@/components/AboutPreview";
import ContactForm from "@/components/ContactForm";
// import ContactPreview from "@/components/ContactPreview";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
      <ContactForm />
      {/* <ContactPreview /> */}
    </div>
  );
};

export default Home;