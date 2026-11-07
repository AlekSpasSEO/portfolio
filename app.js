const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
const email = 'alek.spas.seo@gmail.com';
document.querySelector('#year').textContent = new Date().getFullYear();
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'Copied!';
    } catch {
      copyStatus.textContent = 'Select the email address to copy it.';
    }
  });
}

for (const button of document.querySelectorAll('.client-tour-toggle')) {
  const tour = button.closest('.client-tour');
  const image = tour.querySelector('.client-tour-image');
  const still = image.getAttribute('src');
  const animation = image.dataset.gif;

  function stopTour() {
    image.src = still;
    button.textContent = 'Play GIF tour';
  }

  button.hidden = false;
  button.addEventListener('click', () => {
    if (image.getAttribute('src') === animation) {
      stopTour();
      return;
    }

    image.src = animation;
    button.textContent = 'Stop tour';
  });

  tour.closest('details').addEventListener('toggle', (event) => {
    if (!event.currentTarget.open) stopTour();
  });
}
