
import React,{FC} from 'react'

const About: FC = () => {
  return (
      <>
        <section className="about" id="about">

        <h1 className="heading">О нас</h1>

        <div className="row">

        <div className="video">
            <video src="/about-vid.mp4" loop muted autoPlay></video>
        </div>

        <div className="content">
            <h3>ООО «СК  СтройПроект»,</h3>
            <p>ООО «СК  СтройПроект», ИНН​7731364366/КПП 771501001 была основана 3 мая 2017 года выпускником Московского Государственного Строительного Университета Поздняковым Виктором Евгеньевичем. Генеральный директор имеет более 20 лет опыт в строительной отрасли.</p>
            <a href="#contact" className="btn">Связаться</a>
        </div>

        </div>

        {/* <div className="box-container">

        <div className="box">
            <h3>большой перечень услуг</h3>
            <p>years of experience</p>
        </div>

        <div className="box">
            <h3>1500+</h3>
            <p>project completed</p>
        </div>

        <div className="box">
            <h3>790+</h3>
            <p>satiesfied clients</p>
        </div>

        <div className="box">
            <h3>450+</h3>
            <p>active workers</p>
        </div>

        </div> */}

        </section>
      </>
  )
}

export default About
