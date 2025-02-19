const Home = () => {
  return (
    <div>
      
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Empowering Your Career Journey</h1>
        <p className="mt-4 text-lg">Find your dream job, internship, or mentor in one place.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">Sign Up Now</button>
      </header>

      <section className="p-10 text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">AI-Driven Job Matching</h3>
            <p>Get personalized job recommendations based on your skills.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Internship & Training</h3>
            <p>Secure internships and gain hands-on experience.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Mentorship & Guidance</h3>
            <p>Connect with industry professionals for career advice.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;