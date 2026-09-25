export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectCaseStudy = {
  id: string;
  venueType: string;
  /** Only a location the client has approved for publication, e.g. a district name. */
  location?: string;
  need: string;
  method: string;
  scope: string[];
  completedAt?: string;
  before?: ProjectImage;
  after?: ProjectImage;
  /** Must be true only after the client has approved publishing this record and its photos. */
  publishApproved: boolean;
};

// Add only real, client-approved projects with real photos. Records stay hidden until publishApproved is true.
export const PROJECTS: ProjectCaseStudy[] = [];

export const PUBLISHED_PROJECTS = PROJECTS.filter((project) => project.publishApproved);
