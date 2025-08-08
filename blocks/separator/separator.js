

export default function decorate(block) {
  // Get style and spacing values from block data
  //const style = block.querySelector('select[data-style]')?.value || '';
  //const spacing = block.querySelector('select[data-spacing]')?.value || '';
  const style = block.querySelectorAll('.separator > div')[0]?.textContent?.trim();
  const spacing = block.querySelectorAll('.separator > div')[1]?.textContent?.trim();
  //block.querySelectorAll('.separator > div');

  // Create separator line with classes
  //const separatorClasses = ['separator-line'];
  
  // Create wrapper div and add separator line
  const wrapper = document.createElement('div');
  wrapper.className = 'separator-block';
  if (style) wrapper.classList.add(style);
  if (spacing) wrapper.classList.add(spacing);
  wrapper.innerHTML = `<div class="separator-line"></div>`;

  // Replace block content with wrapper
  block.textContent = '';
  block.appendChild(wrapper);
}