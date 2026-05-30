import { Link } from "react-router-dom";
import completedProjects from "../data/InteriorProjects";
import ongoingProjects from "../data/ExteriorProjects";

export default function ProjectsGallery() {
  const renderCards = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {projects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          key={project.id}
        >
          <div
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              h-full
            "
          >
            <img
              src={project.image || project.images?.[0]}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h3
                className="
                  font-body
                  text-lg
                  font-semibold
                  text-[#311A42]
                  truncate
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  font-body
                  text-sm
                  text-[#6B7280]
                  mt-2
                  truncate
                "
              >
                📍 {project.location}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className="bg-[#F4EEE6] px-4 py-12"
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          p-6
          md:p-8
        "
      >
        {/* Interior Projects */}
        <div className="text-center mb-10">
          <h2
            className="
              font-body
              text-3xl
              md:text-4xl
              font-bold
              text-[#311A42]
            "
          >
            Interior Projects
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {renderCards(completedProjects)}

        {/* Exterior Projects */}
        <div className="text-center mt-20 mb-10">
          <h2
            className="
              font-body
              text-3xl
              md:text-4xl
              font-bold
              text-[#311A42]
            "
          >
            Exterior Projects
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {renderCards(ongoingProjects)}
      </div>
    </section>
  );
}