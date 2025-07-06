import { Link } from "react-router-dom";
import completedProjects from "../data/InteriorProjects";
import ongoingProjects from "../data/ExteriorProjects";

export default function ProjectsGallery() {
  const renderCards = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden w-full">
            <img
              src={project.image || project.images?.[0]}
              alt={project.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-3">
              <h3 className="font-body text-base font-semibold truncate">
                {project.title}
              </h3>
              <p className="font-body text-sm text-gray-600 truncate">
                {project.location}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section id="projects" className="bg-white text-white px-4 ">
      <div className="max-w-[1440px] mx-auto bg-[#f3f6fa] p-4 md:p-6 shadow-lg text-black">
        <h2 className="font-body text-3xl font-bold text-[#001f3f] mb-6 text-center py-5">
          Interior Projects
        </h2>
        {renderCards(completedProjects)}

        <h2 className="font-body text-3xl font-bold text-[#001f3f] mt-14 mb-6 text-center py-5">
          Exterior Projects
        </h2>
        {renderCards(ongoingProjects)}
      </div>
    </section>
  );
}
