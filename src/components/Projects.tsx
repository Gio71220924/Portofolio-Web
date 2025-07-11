import Slider from "react-slick";
import projects from "../data/projects.json";
import "../style/Projects.css";

function Projects() {
  const settings = {
    dots: true,
    infinite: projects.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section id="projects" className="container my-5">
      <div className="mb-4 text-start">
        <h2 className="text-danger mb-2" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          MY RECENT WORKS
        </h2>
        <p className="text-muted" style={{ fontSize: "1.1rem" }}>
          Here are some of the projects I've worked on, showcasing how I've applied my skills and explored various technologies.
        </p>
      </div>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-3">
            <div className="project-card h-100 overflow-hidden">
              <div className="position-relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    objectPosition: "center",
                    backgroundColor: "#fff"
                  }}
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title mb-2" style={{ fontWeight: "bold", color: "#333" }}>
                  {project.title}
                </h5>
                <p className="card-text text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                  {project.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    href={project.buttonLink || project.link}
                    className="btn btn-outline-danger btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.buttonText || "View Project"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
