import React, { Component } from "react";
import Hidden from "@material-ui/core/Hidden";

import "./Candles.css";

class Candles extends Component {
    GetOurCare() {
        return [
            "As nossas velas e pavios são sempre testados mesmo que a maioria das velas com figuras seja usada apenas para decoração de interiores ou para oferecer em ocasiões especiais. ",
            "Por serem completamente feitas à mão podem tornar-se um pouco diferentes a nível de cor, cheiro ou forma como queimam. Dependendo de algumas condições que não controlamos, como a temperatura, as vossas velas podem ter pequenas marcas brancas, conhecidas como “Frosting”, o que é muito normal e comum em velas 100% de cera de soja. Não afetanto a maneira como queimam, torna-as completamente únicas.",
        ];
    }

    GetYourCare() {
        return [
            "Queremos que as vossas encomendas sejam sempre proveitosas quer adquiram uma vela para queimar, para objeto de decoração ou para oferecer a alguém muito querido. Para reforçar este objetivo deixo-vos alguns cuidados a seguir:",
            "",
            "• Apare o pavio antes de cada utilização. Pode utilizar uma tesoura normal. Isto vai evitar fumo excessivo e ajuda a que a vela queime normalmente;",
            "• Acenda sempre as suas velas numa base à prova de fogo, própria para o efeito. A cera vai derreter e a base deve ser suficiente para que a cera não escorra para fora;",
            "• Não mexa a vela enquanto está acesa e/ou ainda liquida após derreter;",
            "• Acenda as suas velas apenas quando está presente e com possibilidade de as vigiar. Mantenha-as afastadas de crianças, animais e superfícies inflamáveis;",
            "• Tenha cuidado com correntes de ar e/ou ventoinhas que podem mudar o sentido da chama, prejudicando a vela e podendo causar acidentes;",
        ];
    }

    render() {
        const section = {
            title: "As nossas Velas",
            image: require("../../assets/pictures/IMG_7392.jpg"),
            our_care_title: "Ao nosso cuidado",
            our_care: this.GetOurCare(),
            your_care_title: "Ao seu cuidado",
            your_care: this.GetYourCare(),
        };

        return (
            <div id="candles" className="fullHeight bgColor flex">
                <section className='flex'>
                    <div >
                        <h2 className="candles__title main_title">{section.title}</h2>
                    </div>     
                    <Hidden smUp>
                        <img
                            src={section.image}
                            alt={section.title}
                            className="candles__photo1"
                        />
                        <br />
                    </Hidden>     
                </section>
                <section>
                    <div className="column">
                        <h4 className="candles__title main_title">
                            {section.our_care_title}
                        </h4>
                        {section.our_care.map((x) => {
                            return (
                                <div>
                                    <span className="candles__content">
                                        {x}
                                    </span>
                                    <br></br>
                                </div>
                            );
                        })}
                    </div>
                    <Hidden xsDown>
                        <div className="column">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="candles__photo1"
                            />
                        </div>
                    </Hidden>
                    <div className="column">
                        <h4 className="candles__title main_title">
                            {section.your_care_title}
                        </h4>
                        {section.your_care.map((x) => {
                            return (
                                <div>
                                    <span className="about_us__content">
                                        {x}
                                    </span>
                                    <br></br>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        );
    }
}
export default Candles;
