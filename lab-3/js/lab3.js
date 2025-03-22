// const tabpanels = document.querySelectorAll("tabpanel");

// tabpanels.forEach((tabpanel) => {
//   tabpanel.addEventListener("toggle", (event) => {
//     // console.log("Toggle event added!");
//     if (event.target.open) {
//       tabpanels.forEach((tabpanel) => {
//         if (tabpanel !== event.target) {
//           // This is not the details element that was clicked open
//           tabpanel.removeAttribute("open");
//         }
//       });
//     }
//   });
// });

// How to select role element in JavaScript? Reference: https://stackoverflow.com/questions/64312576/how-to-select-an-element-with-attribute-role

// How to use toggle to hide and show? Reference:https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function showContent() {
  const content = document.querySelector(`[role="tabpanel"]`);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
