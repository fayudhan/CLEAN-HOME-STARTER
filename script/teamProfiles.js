// teamProfiles.js
export function loadTeamProfiles() {
  document.addEventListener("DOMContentLoaded", () => {
    const teamProfileContainer = document.getElementById(
      "team-profile-container",
    );

    // Data profile tim
    const teamProfiles = [
      {
        image: "assets/Team/team-1.png",
        name: "Leslie Alexander",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
      {
        image: "assets/Team/team-2.png",
        name: "Jacob Jones",
        description:
          "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
      {
        image: "assets/Team/team-3.png",
        name: "Courtney Henry",
        description:
          "Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
      {
        image: "assets/Team/team-4.png",
        name: "Jenny Wilson",
        description:
          "Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.",
        socialLinks: {
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
          dribbble: "https://dribbble.com",
        },
      },
    ];

    // Generate profile cards secara dinamis
    teamProfiles.forEach((profile) => {
      const profileElement = `
        // 
      `;

      teamProfileContainer.innerHTML += profileElement;
    });
  });
}
