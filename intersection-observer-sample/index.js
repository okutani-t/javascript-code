window.addEventListener('load', () => {
  const options = {
    root: null,
    rootMargin: '-10px',
    threshold: 0
  }

  const callbackForImg = (entries, object) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { return }

      entry.target.src = entry.target.dataset.src
      entry.target.classList.add('visible')

      object.unobserve(entry.target)
    })
  }

  const callbackForH2 = (entries, object) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) { return }

      entry.target.classList.add('visible')

      object.unobserve(entry.target)
    })
  }

  const callbackForHeader = (entries, object) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById('header').classList.add('visible')
      } else {
        document.getElementById('header').classList.remove('visible')
      }
    })
  }

  // 画像を監視対象に設定
  const images = document.querySelectorAll('img')
  const observerForImg = new IntersectionObserver(callbackForImg, options)
  images.forEach(image => {
    observerForImg.observe(image)
  })

  // 見出しを監視対象に追加
  const headings = document.querySelectorAll('h2')
  const observerForH2 = new IntersectionObserver(callbackForH2, options)
  headings.forEach(heading => {
    observerForH2.observe(heading)
  })

  // ヘッダーの表示監視
  const observerForHeader = new IntersectionObserver(callbackForHeader, options)
  observerForHeader.observe(document.getElementById('header_target'))
})
