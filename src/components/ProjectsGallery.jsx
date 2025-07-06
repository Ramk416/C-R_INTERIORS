import { Link } from "react-router-dom";
import completedProjects from "../data/InteriorProjects";
import ongoingProjects from "../data/ExteriorProjects";

export default function ProjectsGallery() {
  const renderCards = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <div className="flex flex-col h-full bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image || project.images?.[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow p-4 flex flex-col justify-between">
              <h3 className="font-body text-lg font-semibold mb-1">
                {project.title}
              </h3>
              <p className="font-body text-sm text-gray-500">
                {project.location}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section id="projects" className="bg-[#f3f6fa] px-4 sm:px-6 lg:px-10 xl:px-12 py-16">
      <div className="max-w-screen-xl mx-auto w-full">
        <h2 className="font-body text-3xl md:text-4xl font-bold text-[#001f3f] mb-10 text-center">
          Interior Projects
        </h2>
        {renderCards(completedProjects)}

        <h2 className="font-body text-3xl md:text-4xl font-bold text-[#001f3f] mt-20 mb-10 text-center">
          Exterior Projects
        </h2>
        {renderCards(ongoingProjects)}
      </div>
    </section>
  );
}
