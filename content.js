browser.storage.local.get('enabled').then((result) => {
    if (result.enabled) {
      const problemTagsCaption = Array.from(document.querySelectorAll('.caption.titled')).find(el => el.textContent.includes('Problem tags'));
      if (problemTagsCaption) {
        const problemTagsSection = problemTagsCaption.nextElementSibling;
        if (problemTagsSection) {
          console.log('Hiding Problem Tags section:', problemTagsSection); // Debugging line
          problemTagsSection.style.display = 'none';
        }
      }
    }
  });