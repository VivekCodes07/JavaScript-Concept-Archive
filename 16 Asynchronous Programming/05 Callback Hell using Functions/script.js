const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time, onSuccessCallback) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.backgroundColor = color;

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      console.log("Element does not exist!");
    }
  }, time);
}

changeText(heading1, "Heading 1", "white", 1000, () => {
  changeText(heading2, "Heading 2", "orange", 2000, () => {
    changeText(heading3, "Heading 3", "silver", 1000, () => {
      changeText(heading4, "Heading 4", "gray", 2000, () => {
        changeText(heading5, "Heading 5", "gold", 1000, () => {
          changeText(heading6, "Heading 6", "lightgreen", 2000, () => {
            changeText(heading7, "Heading 7", "aqua", 1000);
          });
        });
      });
    });
  });
});


/*
Workflow:
    1. Wait for time
    2. Change heading text
    3. Change color
    4. Run next callback

    Then the callbacks create a sequence of headings appearing one by one.

    But because callbacks are nested, it becomes Callback Hell.
*/