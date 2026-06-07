import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div className="relative flex h-screen flex-col items-center bg-neutral-900">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default page;
