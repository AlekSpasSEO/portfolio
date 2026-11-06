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
