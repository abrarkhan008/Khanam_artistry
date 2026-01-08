import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Award,
  MapPin,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Youtube,
} from "lucide-react";

const MehendiWebsite = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = {
    bridal: {
      title: "Bridal Hand Design",
      price: "₹4000-5000",
      count: 36,
      images: Array.from({ length: 36 }, (_, i) => `/bridal/${i + 1}.png`),
    },
    legs: {
      title: "Leg Design",
      price: "₹500-2000",
      count: 53,
      images: Array.from({ length: 53 }, (_, i) => `/legs/${i + 1}.png`),
    },
    hands: {
      title: "Non bridal design",
      price: "₹400-2500",
      count: 36,
      images: Array.from({ length: 36 }, (_, i) => `/hands/${i + 1}.png`),
    },
  };

  const awards = [
    {
      title: "Doctorate Award in Professional Mehendi Artist",
      location: "Delhi University",
    },
    { title: "International Award - 14th Rank", location: "Maharashtra" },
    { title: "Indian Iconic Award", location: "Bangalore" },
    { title: "Mysore Dasara Exhibition Award", location: "Mysore" },
  ];

  const handleCall = () => (window.location.href = "tel:9845167467");
  const handleEmail = () =>
    (window.location.href = "mailto:ayshknm786@gmail.com");
  const handleWhatsApp = () =>
    window.open(
      "https://wa.me/919845167467?text=Hello%2C%20I%20would%20like%20to%20book%20mehendi%20services",
      "_blank"
    );
  const handleInstagram = () =>
    window.open(
      "https://www.instagram.com/khanam_artistry?igsh=bHAwZjUwNm16NzJw",
      "_blank"
    );

  const handleYouTube = () =>
    window.open("https://m.youtube.com/@AyeshaKhanam-p3r", "_blank");

  const openGallery = (category, index = 0) => {
    setSelectedCategory(category);
    setSelectedImageIndex(index);
  };

  const closeGallery = () => {
    setSelectedCategory(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCategory) {
      setSelectedImageIndex(
        (prev) => (prev + 1) % categories[selectedCategory].images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? categories[selectedCategory].images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50">
      {/* Animated Background Stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Star className="w-2 h-2 text-amber-300 fill-amber-200" />
          </div>
        ))}
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Khanum_Artistry
              </h1>
              <p className="text-sm md:text-base text-gray-700 font-medium mt-1">
                Dr. Bi Bi Ayesha Khanam
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Now</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Email</span>
              </button>
              <button
                onClick={handleInstagram}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm font-medium">Instagram</span>
              </button>

              <button
                onClick={handleYouTube}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
                <span className="text-sm font-medium">YouTube</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block animate-bounce mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
              <Star className="w-10 h-10 text-white fill-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Professional Mehendi Artist
          </h2>
          <p className="text-xl md:text-2xl text-purple-600 font-semibold mb-3">
            10 Years Experience
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-700 mb-8 flex-wrap">
            <MapPin className="w-5 h-5 text-pink-500" />
            <span className="font-medium">
              Nanjangud, Mysore, Bangalore - All Over Karnataka
            </span>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Creating beautiful mehendi designs for your special moments.
            Award-winning artist with 2 coaching centres in Nanjangud.
          </p>

          <button
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          >
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-amber-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Awards & Recognition
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-amber-200"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-2">
                      {award.title}
                    </h4>
                    <p className="text-purple-600 font-medium">
                      {award.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Award Photos Placeholder */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={`/awards/${i}.png`}
                  alt={`Award ${i}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Work
          </h3>

          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="mb-16">
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 p-6 rounded-2xl shadow-xl mb-8">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {category.title}
                </h4>
                <p className="text-xl text-white font-semibold">
                  Price: {category.price}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => openGallery(key, index)}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={img}
                      alt={`Design ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-pink-400 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-pink-400 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={categories[selectedCategory].images[selectedImageIndex]}
              alt="Full Design"
              className="w-full max-h-[80vh] object-contain rounded-xl mb-4"
            />

            <div className="text-center">
              <p className="text-white font-semibold">
                Use arrow keys or buttons to navigate
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImageIndex + 1} / {categories[selectedCategory].count}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Khanum_Artistry</h3>
          <p className="mb-4">Dr. Bi Bi Ayesha Khanam</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:9845167467"
              className="hover:text-pink-300 transition-colors"
            >
              📞 9845167467
            </a>
            <a
              href="mailto:ayshknm786@gmail.com"
              className="hover:text-pink-300 transition-colors"
            >
              ✉️ ayshknm786@gmail.com
            </a>
          </div>
          <p className="text-sm text-pink-200">
            Serving: Nanjangud, Mysore, Bangalore & All Over Karnataka
          </p>
          <p className="text-sm text-pink-300 mt-4">
            © 2026 Khanum Artistry. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.instagram.com/khanam_artistry?igsh=bHAwZjUwNm16NzJw"
            target="_blank"
            className="hover:text-pink-300 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="https://m.youtube.com/@AyeshaKhanam-p3r"
            target="_blank"
            className="hover:text-pink-300 transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MehendiWebsite;
