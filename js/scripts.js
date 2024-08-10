//  type effect

// document.addEventListener("DOMContentLoaded", function () {
//   var typed = new Typed(".typed", {
//     strings: [
//       "I'm Vito Julio Korengkeng",
//       "I'm Informatics student at Klabat University",
//     ],
//     typeSpeed: 50,
//     backSpeed: 25,
//     loop: true,
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed", {
    strings: ["Vito Julio Korengkeng", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  });
});

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */
// // dark mode
// (() => {
//   "use strict";

//   const getStoredTheme = () => localStorage.getItem("theme");
//   const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

//   const getPreferredTheme = () => {
//     const storedTheme = getStoredTheme();
//     if (storedTheme) {
//       return storedTheme;
//     }

//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   };

//   const setTheme = (theme) => {
//     if (theme === "auto") {
//       document.documentElement.setAttribute(
//         "data-bs-theme",
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//           ? "dark"
//           : "light"
//       );
//     } else {
//       document.documentElement.setAttribute("data-bs-theme", theme);
//     }
//   };

//   setTheme(getPreferredTheme());

//   const showActiveTheme = (theme, focus = false) => {
//     const themeSwitcher = document.querySelector("#bd-theme");

//     if (!themeSwitcher) {
//       return;
//     }

//     const themeSwitcherText = document.querySelector("#bd-theme-text");
//     const activeThemeIcon = document.querySelector(".theme-icon-active ");
//     const btnToActive = document.querySelector(
//       `[data-bs-theme-value="${theme}"]`
//     );
//     const iconOfActiveBtn = btnToActive.querySelector("i").dataset.themeIcon;

//     document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
//       element.classList.remove("active");
//       element.setAttribute("aria-pressed", "false");
//     });

//     btnToActive.classList.add("active");
//     btnToActive.setAttribute("aria-pressed", "true");
//     activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive);
//     activeThemeIcon.classList.add(iconOfActiveBtn);
//     activeThemeIcon.dataset.themeIconActive = iconOfActiveBtn;
//     const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
//     themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);

//     if (focus) {
//       themeSwitcher.focus();
//     }
//   };

//   window
//     .matchMedia("(prefers-color-scheme: dark)")
//     .addEventListener("change", () => {
//       const storedTheme = getStoredTheme();
//       if (storedTheme !== "light" && storedTheme !== "dark") {
//         setTheme(getPreferredTheme());
//       }
//     });

//   window.addEventListener("DOMContentLoaded", () => {
//     showActiveTheme(getPreferredTheme());

//     document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
//       toggle.addEventListener("click", () => {
//         const theme = toggle.getAttribute("data-bs-theme-value");
//         setStoredTheme(theme);
//         setTheme(theme);
//         showActiveTheme(theme, true);
//       });
//     });
//   });
// })();

// (() => {
//   "use strict";

//   const getStoredTheme = () => localStorage.getItem("theme");
//   const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

//   const getPreferredTheme = () => {
//     const storedTheme = getStoredTheme();
//     if (storedTheme) {
//       return storedTheme;
//     }
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   };

//   const setTheme = (theme) => {
//     if (theme === "auto") {
//       document.documentElement.setAttribute(
//         "data-bs-theme",
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//           ? "dark"
//           : "light"
//       );
//     } else {
//       document.documentElement.setAttribute("data-bs-theme", theme);
//     }
//   };

//   const showActiveTheme = (theme, focus = false) => {
//     const activeThemeIcon = document.querySelector(".theme-icon-active");
//     const btnToActive = document.querySelector(
//       `[data-bs-theme-value="${theme}"]`
//     );
//     const iconOfActiveBtn = btnToActive.querySelector("i").dataset.themeIcon;

//     document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
//       element.classList.remove("active");
//       element.setAttribute("aria-pressed", "false");
//     });

//     btnToActive.classList.add("active");
//     btnToActive.setAttribute("aria-pressed", "true");
//     activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive);
//     activeThemeIcon.classList.add(iconOfActiveBtn);
//     activeThemeIcon.dataset.themeIconActive = iconOfActiveBtn;

//     if (focus) {
//       btnToActive.focus();
//     }
//   };

//   setTheme(getPreferredTheme());
//   showActiveTheme(getPreferredTheme());

//   window
//     .matchMedia("(prefers-color-scheme: dark)")
//     .addEventListener("change", () => {
//       const storedTheme = getStoredTheme();
//       if (storedTheme !== "light" && storedTheme !== "dark") {
//         setTheme(getPreferredTheme());
//         showActiveTheme(getPreferredTheme());
//       }
//     });

//   window.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
//       toggle.addEventListener("click", () => {
//         const theme = toggle.getAttribute("data-bs-theme-value");
//         setStoredTheme(theme);
//         setTheme(theme);
//         showActiveTheme(theme, true);
//       });
//     });
//   });
// })();

(() => {
  "use strict";

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return "light"; // Set default theme to light for auto mode
  };

  const setTheme = (theme) => {
    if (theme === "auto") {
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  const showActiveTheme = (theme, focus = false) => {
    const activeThemeIcon = document.querySelector(".theme-icon-active");
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    const iconOfActiveBtn = btnToActive.querySelector("i").dataset.themeIcon;

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });

    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
    activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive);
    activeThemeIcon.classList.add(iconOfActiveBtn);
    activeThemeIcon.dataset.themeIconActive = iconOfActiveBtn;

    if (focus) {
      btnToActive.focus();
    }
  };

  setTheme(getPreferredTheme());
  showActiveTheme(getPreferredTheme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
        showActiveTheme(getPreferredTheme());
      }
    });

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  });
})();
