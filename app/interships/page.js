 "use client";
 
import { useRouter } from "next/navigation";

export default function Internships() { // ✅ Correct function declaration
  const router = useRouter(); 

  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "Mountain View, CA",
      duration: "3 Months",
      description: "Work with cutting-edge technologies and build scalable applications.",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      duration: "6 Months",
      description: "Analyze large datasets and develop machine learning models.",
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "Meta",
      location: "Menlo Park, CA",
      duration: "4 Months",
      description: "Develop interactive web applications and optimize UI/UX performance.",
    }
  ];

  return (
    <div>
      
      <h1 className="text-3xl font-bold text-center mt-10">Internship Listings</h1>
      <div className="mt-5 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((internship) => (
          <div
            key={internship.id} // ✅ Unique key for each internship
            className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => router.push(`/internships/${internship.id}`)}
          >
            <h2 className="text-xl font-semibold">{internship.title}</h2>
            <p className="text-gray-600 font-medium">{internship.company}</p>
            <p className="text-sm text-gray-500">{internship.location} • {internship.duration}</p>
            <p className="text-sm text-gray-700 mt-2">{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
