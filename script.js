var button_lightmode = document.getElementById("button_lightmode")
var theme = localStorage.getItem("theme")
if (theme === null) {
  theme = "dark"
}

updateElementsForTheme(theme)

if (button_lightmode != null) {
  button_lightmode.addEventListener("click", toggleTheme)
}

function toggleTheme() {
  theme = (theme === "dark") ? "light" : "dark"
  
  localStorage.setItem("theme", theme)
  updateElementsForTheme(theme)
}

function updateElementsForTheme(theme) {
  var elements = document.children;
  var elements_array = Array.from(elements)
  if (theme === "light") {
    elements_array.forEach(element => {
      applyThemeRecursive(theme, element)
    });
  } else if (theme === "dark") {
    elements_array.forEach(element => {
      applyThemeRecursive(theme, element)
    });
  } else {
    console.log("Unexpected theme type: " + theme)
  }
}

function applyThemeRecursive(theme, element) {
  var elements_array = Array.from(element.children)
  elements_array.forEach(child_element => {
    applyThemeRecursive(theme, child_element)
  })
  if (theme === "light") {
    element.setAttribute("light", "")
  } else {
    element.removeAttribute("light")
  }
}