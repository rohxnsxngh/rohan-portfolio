<template>
  <div>
    <h2>Experience</h2>
    <h6>Software Engineering Intern @ <strong style="color: aqua;">Tesla</strong></h6>
    <br />
    <ul>
      <p>Full Stack Tesla Self Perform Project</p>
      <li>Ingressed approximately 500,000 rows of data from SharePoints lists into a centralized PostgreSQL database using .NET and the EPPlus NuGet package.</li>
      <li>
        Implemented Flyway, an open-source database migration tool, to migrate
        Schema's and update our database.
      </li>
      <li>
        Built controllers in C# with custom routes for their respective HTTP
        methods.
      </li>
      <li>
        Used Vue.js, Tailwind CSS, and Daisy UI to design a sleek frontend and successfully
        deployed it to a Tesla domain.
      </li>
      <li>
        Implemented AG-Grid Tables to lazy load 500,000 rows which improved
        rendering speed by 60%.
      </li>
      <li>
        Seamlessly Implemented CRUD application workflow into the webpage.
      </li>
      <li>
        Utilized state management with Vuex to successfully create authorization
        amongst different webpages. Entire application is wrapped in SSO.
      </li>
      <li>
        Connected PostgreSQL database to Power BI to create an embedded
        dashboard page within the frontend.
      </li>
      <p>Meeting Minutes Tracker</p>
      <li>
        Utilized Vue.js and Bootstrap 4 to design frontend according to Tesla
        specifications.
      </li>
      <li>
        Developed event handling to allow CTRL + V to copy images and ONLY
        images to canvas. Images would be stored as BLOBs and sent to their
        respective HTTP routes and stored on the server.
      </li>
      <li>
        Wrote Schema and used Flyway to migrate versions into PostgreSQL
        database
      </li>

      <p>Revizto Dashboard</p>
      <li>
        Ingressed factory issues tracking out of Revizto, a software that
        unifies BIM intelligence and makes it immediately accessible for the
        entire project, into PostgreSQL.
      </li>
      <li>
        Wrote Schema and utilized Flyway to migrate versions into PostgreSQL
        database.
      </li>
      <li>
        Accessed Revizto’s advanced Issue Tracker predefined workflows, project
        team members can identify and manage model-based issues in the 3D space
        and 2D sheets, including addressing clash groups.
      </li>
      <li>Designed frontend in Vue.js and Bootstrap 4.</li>
      <li>
        Utilized Vue ApexCharts, a modern charting library, to build a dynamic
        dashboard that organized Factory Issues from Revizto.
      </li>
      <br />
      <p>
        Tech Stack & Tools: .NET 4.7.2, Vue.js, PostgreSQL, Tailwind CSS, Three.js,
        Bootstrap, Express.js
      </p>
      <p style="float: right">Jan. 2022 - Aug. 2022</p>
    </ul>
  </div>
</template>

<style scoped>
li {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 16px;
}

p {
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: aqua;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
