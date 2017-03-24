const main = () => {
  const stylesheet = document.styleSheets[0]
  const darkSquare = document.querySelectorAll('div.darkSquare')
  const lightSquare = document.querySelectorAll('div.lightSquare')
  const hueSlider = document.querySelector('input[name=hue]')
  const hueValue = document.querySelector('span.hueValue')
  const satSlider = document.querySelector('input[name=sat]')
  const satValue = document.querySelector('span.satValue')
  const lightSlider = document.querySelector('input[name=light]')
  const lightValue = document.querySelector('span.lightValue')
  const alphaSlider = document.querySelector('input[name=alpha]')
  const alphaValue = document.querySelector('span.alphaValue')
  const hueValueLabel = document.querySelector('span.hueValueLabel')
  const satValueLabel = document.querySelector('span.satValueLabel')
  const lightValueLabel = document.querySelector('span.lightValueLabel')
  const alphaValueLabel = document.querySelector('span.alphaValueLabel')
  const hsla = document.querySelector('span.hsla')
  const valueList = document.querySelector('span.valueList')
  const previewSat = document.querySelector('span.previewSat')
  const previewLight = document.querySelector('span.previewLight')
  const previewAlpha = document.querySelector('span.previewAlpha')
  let hueBackground = 0
  let satBackground = 50
  let lightBackground = 50
  let alphaBackground = 0.5

  hueSlider.addEventListener('input', (event) => {
    hueValue.textContent = event.target.value
    hueBackground = event.target.value
    updateColor()
    updateValues()
  })
  hueValueLabel.addEventListener('mouseover', (event) => {
    hueValueLabel.textContent = hueBackground
  })
  hueValueLabel.addEventListener('mouseleave', (event) => {
    hueValueLabel.textContent = 'Hue'
  })
  satSlider.addEventListener('input', (event) => {
    satValue.textContent = event.target.value
    satBackground = event.target.value
    updateColor()
    updateValues()
  })
  satValueLabel.addEventListener('mouseover', (event) => {
    satValueLabel.textContent = satBackground + '%'
  })
  satValueLabel.addEventListener('mouseleave', (event) => {
    satValueLabel.textContent = 'Saturation'
  })
  lightSlider.addEventListener('input', (event) => {
    lightValue.textContent = event.target.value
    lightBackground = event.target.value
    updateColor()
    updateValues()
  })
  lightValueLabel.addEventListener('mouseover', (event) => {
    lightValueLabel.textContent = lightBackground + '%'
  })
  lightValueLabel.addEventListener('mouseleave', (event) => {
    lightValueLabel.textContent = 'Light'
  })
  alphaSlider.addEventListener('input', (event) => {
    alphaValue.textContent = event.target.value / 100
    alphaBackground = (event.target.value / 100)
    updateColor()
    updateValues()
  })
  alphaValueLabel.addEventListener('mouseover', (event) => {
    alphaValueLabel.textContent = alphaBackground
  })
  alphaValueLabel.addEventListener('mouseleave', (event) => {
    alphaValueLabel.textContent = 'Alpha'
  })

  const updateColor = () => {
    for (let i = 0; i < darkSquare.length; i++) {
      darkSquare[i].style.backgroundColor = `hsla(${hueBackground}, ${satBackground}%, ${lightBackground}%, ${alphaBackground})`
    }
    for (var j = 0; j < lightSquare.length; j++) {
      lightSquare[j].style.backgroundColor = `hsla(${hueBackground}, ${satBackground}%, ${lightBackground}%, ${alphaBackground + 0.3})`
    }
    previewSat.style.background = `linear-gradient(to right, hsl(${hueBackground}, 0%, ${lightBackground}%), hsl(${hueBackground}, 100%, ${lightBackground}%))`
    previewLight.style.background = `linear-gradient(to right, hsl(${hueBackground}, ${satBackground}%, 0%), hsl(${hueBackground}, ${satBackground}%, 50%), hsl(${hueBackground}, ${satBackground}%, 100%))`
    previewAlpha.style.background = `linear-gradient(to right, hsla(${hueBackground}, ${satBackground}%, ${lightBackground}%, 0), hsla(${hueBackground}, ${satBackground}%, ${lightBackground}%, 1))`
  }
  let updateValues = () => {
    if (alphaBackground === 1) {
      hsla.textContent = `hsl`
      valueList.textContent = `(${hueBackground}, ${satBackground}%, ${lightBackground}%)`
    } else {
      hsla.textContent = `hsla`
      valueList.textContent = `(${hueBackground}, ${satBackground}%, ${lightBackground}%, ${alphaBackground})`
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
