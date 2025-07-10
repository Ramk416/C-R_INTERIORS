import "swiper/css";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { useParams } from "react-router-dom";
import completedProjects from "../data/InteriorProjects";
import ongoingProjects from "../data/ExteriorProjects";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function ProjectDetail() {
  const { id } = useParams();
  const allProjects = [...completedProjects, ...ongoingProjects];
  const project = allProjects.find((p) => p.id === parseInt(id));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!project) return <div className="p-4 text-center">Project not found</div>;

  // Filter valid videos only (ignore empty strings/null)
  const videoArray = Array.isArray(project.video)
    ? project.video.filter((v) => v && v.trim() !== "")
    : project.video && project.video.trim() !== ""
    ? [project.video.trim()]
    : [];

  const slides = [
    ...project.images.map((img) => ({ src: img })),
    ...videoArray.map((src) => ({
      type: "video",
      width: 1280,
      height: 720,
      poster: project.images[0],
      sources: [{ src, type: "video/mp4" }],
    })),
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-body text-3xl font-bold mb-4 text-[#001f3f]">
        {project.title}
      </h1>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        className="rounded-xl overflow-hidden"
      >
        {project.images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
              }}
              className="w-full h-[400px] object-cover object-center cursor-pointer"
            />
          </SwiperSlide>
        ))}

        {videoArray.map((videoSrc, idx) => (
          <SwiperSlide key={`video-${idx}`}>
            <div
              className="relative w-full h-[400px]"
              onTouchStart={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <video
                controls
                className="w-full h-full object-cover rounded"
                poster={project.images?.[0]}
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={slides}
          plugins={[Video, Thumbnails, Fullscreen, Zoom]}
          controller={{
            closeOnBackdropClick: true,
            keyboardNavigation: "enabled",
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
          }}
        />
      )}

      <div className="font-body mt-6 text-gray-700 space-y-2">
        <p>
          <strong>📍 Location:</strong> {project.location}
        </p>
        <p>
          <strong>📆 Completion Date:</strong> {project.completionDate}
        </p>
      </div>
    </div>
  );
}
