import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';

import './AboutUs.css';

class AboutUs extends Component {
  getPageText() {
    return [
      'A nossa marca foi criada após o confinamento enquanto procurei transformar a minha casa num local sereno, acolhedor e bem decorado. Juntando o meu gosto por velas, pela luz de uma pequena chama, pela arte e pela decoração sofisticada que cada uma traz ao ambiente criei a minha nova paixão – AROMA',
      'Este é o valor do nosso pequeno negócio: o amor e o cuidado em cada detalhe de cada produto. A nossa missão é criar velas para todos os gostos porque acreditamos que assim vamos conseguir fazer a diferença e tornar a experiência de cada um única.',
      'As nossas velas são feitas à mão na integra e tentamos adaptar todos os elementos a todos os clientes – não somos uma grande empresa, somos uma empresa grande com vocês. Gostamos que cada cliente se sinta envolvido em todo o processo que podemos adaptar para ele, tornando a experiência única e confortável desde o primeiro contacto. ',
      'A sustentabilidade ambiental é uma razão de preocupação da nossa marca. Podemos tornar o nosso ambiente sereno e acolhedor sem prejudicar os demais. Todos os produtos são adquiridos com essa prioridade e estamos dedicados a entender o impacto que causamos e a aplicar esforços para o reduzir. As nossas velas são completamente veganas, feitas apenas de cera de soja.'
    ];
  }

  render() {
    const section = {
      title: "Quem somos",
      image: require("../../assets/pictures/IMG_7384.jpg"),
      content: this.getPageText()
    }

    return (
      <div id="about_us" className="fullHeight bgColor flex">
        <section className='flex'>
          <div >
            <h2 className="about_us__title main_title">{section.title}</h2>
          </div>    
          <Hidden smUp>
            <img src={section.image} alt={section.title} className="about_us__photo1" /><br />
          </Hidden>      
        </section>
        <section>
          <Hidden xsDown>
            <div className="column">
              <img src={section.image} alt={section.title} className="about_us__photo1" /><br />
            </div>
          </Hidden>
          <div className="column">
            <div >
              {section.content.map(x => {
                return (
                  <div>
                    <span className="about_us__content">{x}</span>
                    <br></br>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>

    )
  }
}
export default AboutUs




