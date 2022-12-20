const { Projects } = require("../database/db.ts");

modifyDates();
async function modifyDates() {
  const projects = await Projects.findAll();

  for (const project of projects) {
    await Projects.update(
      {
        dateUpdated: new Date("1970-01-01"),
      },
      {
        where: {
          id: project.id,
        },
      }
    );
  }
}
