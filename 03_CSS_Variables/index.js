const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const data = this.value,
          suffix = this.dataset.sizing || '',
          type = this.name;
    document.documentElement.style.setProperty(`--${type}`, data + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



