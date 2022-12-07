const alertPlaceholder = document.getElementById("success");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible alert-size" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("submitButton");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("<b>Success!</b> We will get back to you shortly!", "success");
  });
}
