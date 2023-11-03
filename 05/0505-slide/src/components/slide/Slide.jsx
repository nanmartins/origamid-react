import React from 'react'
import styles from './Slide.module.css'

const Slide = ({ slides }) => {

  const [active, setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const contentRef = React.useRef()

  React.useEffect(() => {
    // const width recebe o valor da largura do elemento
    const { width } = contentRef.current.getBoundingClientRect()
    // setPosition atualiza a posição do elemento
    setPosition(-(width * active))
  }, [active])

  const slidePrev = () => {
    if(active > 0) setActive(active - 1)
  }
  const slideNext = () => {
    if(active < slides.length - 1) setActive(active + 1)
  }



  return (
    <>
      <section className={styles.container}>
        <div
          ref={contentRef}
          className={styles.content}
          style={{ transform: `translateX(${position}px)`}}
        >
          {slides.map(slide => (
            <div key={slide.id} className={styles.item}>{slide.text}</div>
          ))}
        </div>

        <nav className={styles.nav}>
          <button onClick={slidePrev}>Prev</button>
          <button onClick={slideNext}>Next</button>
        </nav>
      </section>
    </>
  )
}

export default Slide
