import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
        <div className="flex-1 p-4">
        <h1 className="text-9xl">About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsum nostrum quos asperiores voluptates porro quo. Sapiente ducimus, quaerat quia, ab necessitatibus expedita quasi nobis perspiciatis delectus vero repudiandae nesciunt.</p>
        </div>
        <Footer />
    </div>
  );
}
