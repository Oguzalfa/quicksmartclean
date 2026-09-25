import Image from "next/image";
import { PUBLISHED_PROJECTS, type ProjectImage } from "@/lib/projects";

export function ProjectCaseStudies() {
  if (PUBLISHED_PROJECTS.length === 0) return null;

  return (
    <section className="section-pad border-t border-line-white" aria-labelledby="proje-ornekleri">
      <div className="site-shell-wide">
        <h2
          id="proje-ornekleri"
          className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] text-cream"
        >
          Proje Örnekleri
        </h2>
        <div className="mt-10 space-y-14">
          {PUBLISHED_PROJECTS.map((project) => (
            <article key={project.id} className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl text-cream">
                  {project.venueType}
                  {project.location && <span className="text-gold"> · {project.location}</span>}
                </h3>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">İhtiyaç</dt>
                    <dd className="mt-1 text-cream/88">{project.need}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">Uygulanan yöntem</dt>
                    <dd className="mt-1 text-cream/88">{project.method}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">Kapsam</dt>
                    <dd className="mt-1">
                      <ul className="list-disc space-y-1 pl-5 text-cream/88">
                        {project.scope.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
              {(project.before || project.after) && (
                <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                  {project.before && <ProjectPhoto label="Önce" image={project.before} />}
                  {project.after && <ProjectPhoto label="Sonra" image={project.after} />}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPhoto({ label, image }: { label: string; image: ProjectImage }) {
  return (
    <figure>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 640px) 100vw, 30vw"
        className="h-auto w-full object-cover"
      />
      <figcaption className="mt-2 text-[0.72rem] tracking-[0.18em] text-gold uppercase">
        {label}
      </figcaption>
    </figure>
  );
}
