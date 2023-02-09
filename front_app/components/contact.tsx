
import React,{ FC } from 'react'
import ContactForm from './contact-form';

const Contact: FC<{ path:string }> = ({ path }) => {
  return (
      <>
        <section className="contact" id="contact">

        <h1 className="heading">Связаться</h1>

        <div className="row">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A70ea8edf0bf2f41fe87aa79092d7b1576e44325252f97b9c9eb873bfac4a0898&amp;source=constructor" width="500"></iframe>
            <ContactForm path={path} />
        </div>

        </section>
      </>
  )
}

export default Contact

