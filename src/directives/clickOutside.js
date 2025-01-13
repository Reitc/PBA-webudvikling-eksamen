export default {
    beforeMount(el, binding) {
      el.clickOutsideEvent = (event) => {
        // Check if the click was outside the element
        if (!(el === event.target || el.contains(event.target))) {
          // If it was outside, call the provided handler
          binding.value(event);
        }
      };
      document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutsideEvent);
    },
  };
  