export function getAllProjectsRoutes() {
  const projects = require("@content/json/ar-projects.json");
  return projects.map((project) => {
    return {
      params: {
        route: project.route,
      },
    };
  });
}

export function getProjectDataFromRoute(route) {
  const projects = require("@content/json/ar-projects.json");
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].route === route) {
      return projects[i];
    }
  }
}
