
// Wes Bos
 const panels = document.querySelectorAll('.panel');
    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }
    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

/* My way
const panels = document.querySelectorAll('.panel')
    const togglePanel = (p, e) => {
      p.classList.toggle('open');
    }
    const toggleText = (p, e) => {
      if (e.propertyName.includes('flex')) p.classList.toggle('open-active');
    }
    panels.forEach(panel => {
      panel.addEventListener('click', togglePanel.bind(null, panel))
      panel.addEventListener('transitionend', toggleText.bind(null, panel))
    })
    */