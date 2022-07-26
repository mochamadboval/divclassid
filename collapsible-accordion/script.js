document.addEventListener('DOMContentLoaded', () => {
  const faq = Array.from(document.querySelectorAll('.faq__items > details'));

  faq.forEach((item) => {
    item.addEventListener('click', (event) => {
      const active = faq.find((item) => item.open);

      if (!event.currentTarget.open && active) {
        active.open = false;
      }
    });
  });
});
