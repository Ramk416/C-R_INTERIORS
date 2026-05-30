import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { useParams } from "react-router-dom";
import completedProjects from "../data/InteriorProjects";
import ongoingProjects from "../data/ExteriorProjects";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function ProjectDetail() {
  const { id } = useParams();

  const allProjects = [...completedProjects, ...ongoingProjects];

  const project = allProjects.find(
    (p) => p.id === parseInt(id)
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (!project) {
    return (
      <div className="p-4 text-center">
        Project not found
      </div>
    );
  }

  const videoArray = Array.isArray(project.video)
    ? project.video.filter((v) => v && v.trim() !== "")
    : project.video && project.video.trim() !== ""
    ? [project.video.trim()]
    : [];

  // Mix Images & Videos
  const galleryItems = [
    ...project.images.map((img) => ({
      type: "image",
      src: img,
    })),
    ...videoArray.map((video) => ({
      type: "video",
      src: video,
    })),
  ];

  // Images only for Lightbox
  const imageSlides = project.images.map((img) => ({
    src: img,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Project Header */}
      <div className="text-center mb-10">
        <h1 className="font-body text-4xl md:text-5xl font-bold text-[#311A42] mb-5">
          {project.title}
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="bg-white shadow-md px-5 py-2 rounded-full text-gray-700 font-medium">
            📍 {project.location}
          </div>

          <div className="bg-white shadow-md px-5 py-2 rounded-full text-gray-700 font-medium">
            📆 {project.completionDate}
          </div>
        </div>
      </div>

      {/* Instagram Style Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl"
          >
            {/* IMAGE */}
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Project ${index + 1}`}
                loading="lazy"
                onClick={() => {
                  const imageIndex = project.images.findIndex(
                    (img) => img === item.src
                  );

                  setPhotoIndex(imageIndex);
                  setLightboxOpen(true);
                }}
                className="
                  w-full
                  h-[220px]
                  md:h-[280px]
                  object-cover
                  rounded-xl
                  shadow-lg
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:scale-105
                "
              />
            ) : (
              /* VIDEO */
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectedVideo(item.src)}
              >
                <video
                  muted
                  preload="metadata"
                  poster={project.images[0]}
                  className="
                    w-full
                    h-[220px]
                    md:h-[280px]
                    object-cover
                    rounded-xl
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  <source
                    src={item.src}
                    type="video/mp4"
                  />
                </video>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 backdrop-blur-sm rounded-full p-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Video Popup */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-red-400"
            >
              ✕
            </button>

            {/* Auto Play Video */}
            <video
              controls
              autoPlay
              className="w-full max-h-[85vh] rounded-xl shadow-2xl"
            >
              <source
                src={selectedVideo}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={imageSlides}
          plugins={[
            Thumbnails,
            Fullscreen,
            Zoom,
          ]}
          controller={{
            closeOnBackdropClick: true,
          }}
          styles={{
            container: {
              backgroundColor: "rgba(0,0,0,0.95)",
            },
          }}
        />
      )}
    </div>
  );
}