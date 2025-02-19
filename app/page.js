import Navbar from "@/components/Navbar";
 
import Jobs from "@/components/Jobs";
import LandingPage from "@/components/LandingPage";
import Internships from "@/components/Internships";
import Mentorship from "@/components/Mentorship";
import Profile from "@/components/Profile";
 
 

export default function Home() {
  return (
     <>
      
     <Navbar/>     
      <LandingPage/>
     <Jobs/>
     <Internships/>
     <Mentorship/>
     <Profile/>
      
      
     </>
  );
}
