// Select the "Problem Tags" section by targeting the parent 'caption titled' class and its sibling 'div' elements
const problemTagsCaption = Array.from(document.querySelectorAll('.caption.titled')).find(el => el.textContent.includes('Problem tags'));
if (problemTagsCaption) {
  const problemTagsSection = problemTagsCaption.nextElementSibling;
  if (problemTagsSection) {
    console.log('Hiding Problem Tags section:', problemTagsSection); // Debugging line
    problemTagsSection.style.display = 'none';
  }
}