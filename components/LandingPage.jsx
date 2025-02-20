import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { motion } from "@motionone/react";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null); // State to track active feature

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null;

  const features = [
    {
      title: "AI-Driven Job Matching",
      shortDescription: "Get personalized job recommendations based on your skills.",
      fullDescription:
        "Our advanced AI algorithms analyze your unique skill set and career objectives to match you with the most suitable job opportunities, ensuring a perfect fit for your professional growth.",
    },
    {
      title: "Internship & Training",
      shortDescription: "Secure internships and gain hands-on experience.",
      fullDescription:
        "We collaborate with leading organizations to offer exclusive internship programs that provide practical experience, enhancing your employability and industry readiness.",
    },
    {
      title: "Mentorship & Guidance",
      shortDescription: "Connect with industry professionals for career advice.",
      fullDescription:
        "Gain insights and guidance from seasoned professionals through our mentorship programs, helping you navigate your career path with informed decisions and expert advice.",
    },
    {
      title: "AI-Driven Job Matching",
      shortDescription: "Get personalized job recommendations based on your skills.",
      fullDescription:
        "Our advanced AI algorithms analyze your unique skill set and career objectives to match you with the most suitable job opportunities, ensuring a perfect fit for your professional growth.",
    },
    {
      title: "Internship & Training",
      shortDescription: "Secure internships and gain hands-on experience.",
      fullDescription:
        "We collaborate with leading organizations to offer exclusive internship programs that provide practical experience, enhancing your employability and industry readiness.",
    },
    {
      title: "Mentorship & Guidance",
      shortDescription: "Connect with industry professionals for career advice.",
      fullDescription:
        "Gain insights and guidance from seasoned professionals through our mentorship programs, helping you navigate your career path with informed decisions and expert advice.",
    },
    // Add more features as needed
  ];

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
    setActiveFeature(index); // Set the active feature on click
  };

  return (
    <div>
      <header className="bg-yellow-600 text-white text-left pl-8 py-20 flex">
        <div className="w-2/3 p-8">
          <h1 className="text-4xl font-bold">Empowering Your Career Journey</h1>
          <h2 className="mt-2 text-lg font-bold">
            Find your dream job, internship, or mentor in one place.
          </h2>
          <p className="mt-3 text-gray-200">
            An Interactive Job and Internship Platform for Technical Education
            <br />
            Department, Govt. of Rajasthan
          </p>

          <div className="mt-8">
            <button className="bg-white text-yellow-600 font-semibold py-2 px-4 rounded mr-4">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white font-semibold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
          {!user && (
            <button className="mt-6 bg-white text-yellow-600 px-6 py-2 rounded-full font-semibold">
              Sign Up Now
            </button>
          )}
        </div>
        <motion.div
          className="w-2/3 p-8 text-center bg-white rounded-l-2xl shadow-2xl"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-yellow-600">
            राजस्थान सरकार द्वारा इंटर्नशिप और नौकरियों को बढ़ावा देना
          </h2>
          <p className="mt-2 text-yellow-600">
            विभिन्न क्षेत्रों में इंटर्नशिप और नौकरी के अवसरों के लिए हमारे
            प्लेटफ़ॉर्म का उपयोग करें।
          </p>
        </motion.div>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg shadow-lg cursor-pointer ${
                activeFeature === index ?  'bg-yellow-500' : 'bg-blue-200'
              }`}
              onClick={() => toggleFeature(index)}
            >
              <h3 className="font-bold text-left">{feature.title}</h3>
              <p className="mt-2 text-left text-gray-800">
                {expandedFeature === index
                  ? feature.fullDescription
                  : feature.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
