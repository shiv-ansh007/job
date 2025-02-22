import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null); // State to track active feature
  const [activeTab, setActiveTab] = useState("Why Choose Us?"); // State to track active tab



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
      shortDescription:
        "Get personalized job recommendations based on your skills.",
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
      shortDescription:
        "Connect with industry professionals for career advice.",
      fullDescription:
        "Gain insights and guidance from seasoned professionals through our mentorship programs, helping you navigate your career path with informed decisions and expert advice.",
    },
    {
      title: "AI-Driven Job Matching",
      shortDescription:
        "Get personalized job recommendations based on your skills.",
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
      shortDescription:
        "Connect with industry professionals for career advice.",
      fullDescription:
        "Gain insights and guidance from seasoned professionals through our mentorship programs, helping you navigate your career path with informed decisions and expert advice.",
    },
    // Add more features as needed
  ];

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
    setActiveFeature(index); // Set the active feature on click
  };
  
      // Function to handle the click for "Why Choose Us?" and "How to Apply"
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  // WhyChooseUsTabs Component
    const WhyChooseUsTabs = () => (
  <Tabs >
    <TabList >
      <Tab onClick={() => handleTabClick("Why Choose Us?")}>
      <motion.div
            whileHover={{ scale: 1.1,   }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 cursor-pointer rounded-md ${activeTab === "Why Choose Us?" ? "bg-yellow-500" : "bg-transparent"}`} // Dynamically change color         
            onClick={() => handleTabClick("Why Choose Us?")} 
          >
        Why Choose Us?
        </motion.div>
        </Tab>
      <Tab  >
        <motion.div
            whileHover={{ scale: 1.1,   }}
            whileTap={{ scale: 0.09 }}
            className={`px-4 py-2 cursor-pointer rounded-md ${activeTab === "How to Apply" ? "bg-yellow-500" : "bg-transparent"}`} // Dynamically change color
            onClick={() => handleTabClick("How to Apply")} 
          >
            How to Apply
          </motion.div>
          </Tab>
    </TabList>

    <TabPanel >
  <div className=" text-left text-white rounded-lg bg-yellow-600 p-4">
    <ul>
      <h1 className="text-bold text-3xl m-3"> Advantages over other Platforms </h1>
        <li><strong> - Comprehensive Platform:</strong> Access a wide range of job opportunities, internships, and mentorship programs.</li>
        <li ><strong> - Unique Opportunity:</strong> Engage with state-run programs, schemes, and projects.</li>
        <li><strong> - Hands-on Experience:</strong> Gain invaluable experience in public administration and development services.</li>
        <li><strong> - Exposure to Government Operations:</strong> Understand the operational ecosystem of the government.</li>
        <li><strong> - Skill Enhancement:</strong> Improve research and evaluation skills.</li>
        <li><strong> - Innovative Contribution:</strong> Contribute innovative ideas to improve service delivery.</li>
        <li><strong> - Mutually Beneficial Program:</strong> Bridge the gap between service providers and recipients.</li>
        <li><strong> - Youth Empowerment:</strong> Empower youth and enhance their understanding of public services.</li>
        <li><strong> - Impact on Society:</strong> Foster a deeper understanding of how public services affect society.</li>
      </ul>
     </div>
    </TabPanel>
     {/* How to Apply Tab */}
     <TabPanel >
      <div className="text-left rounded-lg bg-yellow-200 p-4 ">
      <p>
        Follow these simple steps to apply for the Rajasthan Government's internship program:
      </p>
      <ol>
        <li><strong>Step 1:</strong> Visit our official internship platform.</li>
        <li><strong>Step 2:</strong> Register by providing your personal details and academic background.</li>
        <li><strong>Step 3:</strong> Browse available programs and choose the one that aligns with your interests.</li>
        <li><strong>Step 4:</strong> Submit your application along with any necessary documents (e.g., resume, statement of purpose).</li>
        <li><strong>Step 5:</strong> Await confirmation via email and instructions for the next steps.</li>
        <li><strong>Step 6:</strong> Join the program and start your internship experience.</li>
      </ol>
      <p>
        Ensure all information is accurate to increase your chances of being selected. We look forward to having you as part of the program!
      </p>
      </div>
    </TabPanel>
  </Tabs>
    );

  return (
    <div className="mt-32  ">
      <header className="  w-[90%] bg-yellow-600 rounded-2xl text-white text-left pl-8 py-20 flex mx-auto shadow-2xl transition-all duration-300 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:scale-105">
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
          className="w-2/3 p-8 text-center  bg-white rounded-l-2xl shadow-2xl"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl p-1 font-bold text-yellow-600">
            " राजस्थान सरकार द्वारा इंटर्नशिप और नौकरियों को बढ़ावा देना "
          </h2>
          <p className="mt-5 text-left text-yellow-600">
            - विभिन्न क्षेत्रों में इंटर्नशिप और नौकरी के अवसरों के लिए हमारे
            प्लेटफ़ॉर्म का उपयोग करें।
          </p>
          <p className="mt-5 text-left text-yellow-600">
            - राजस्थान सरकार ने AI क्षेत्र में प्रशिक्षण और इंटर्नशिप के अवसर
            प्रदान किए हैं।
          </p>
          <p className="mt-5 text-left text-yellow-600">
            - सरकार ने AI आधारित परियोजनाओं की शुरुआत की है, जो युवाओं को
            वास्तविक दुनिया की समस्याओं को हल करने का अवसर प्रदान करती हैं।
          </p>
        </motion.div>
      </header>

      <section className="p-10 text-center">
       {/* Add Why Choose Us tab component here */}
        <section>
        <WhyChooseUsTabs />
        </section>
          

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg shadow-lg cursor-pointer ${
                activeFeature === index ? "bg-yellow-500" : "bg-blue-100"
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
