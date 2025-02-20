import { AuthProvider } from "../context/AuthContext";
import Navbar from "@/components/Navbar";
 import Jobs from "@/components/Jobs";
import LandingPage from "@/components/LandingPage";
import Internships from "@/components/Internships";
import Mentorship from "@/components/Mentorship";
import Profile from "@/components/Profile";


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
         <Navbar/>     
      <LandingPage/>
     <Jobs/>
     <Internships/>
     <Mentorship/>
     
    </AuthProvider>

  );
}

export default MyApp;
