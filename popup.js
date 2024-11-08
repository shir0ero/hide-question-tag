document.addEventListener('DOMContentLoaded', function () {
    const toggleCheckbox = document.getElementById('toggle-checkbox');
  
    // Load the saved state from storage
    browser.storage.local.get('enabled').then((result) => {
      toggleCheckbox.checked = result.enabled || false;
    });
  
    // Save the state when the checkbox is toggled
    toggleCheckbox.addEventListener('change', function () {
      browser.storage.local.set({ enabled: toggleCheckbox.checked });
    });
  });