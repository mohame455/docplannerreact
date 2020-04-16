import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab3: [{ href: "https://www.znanylekarz.pl/?_ga=2.256523918.447552144.1583917801-370134012.1583917801", town: "Poland," },
            { href: "https://www.doktortakvimi.com/?_ga=2.81991955.447552144.1583917801-370134012.1583917801", town: " Turkey," },
            { href: "https://www.doctoralia.es/", town: " Spain," },
            { href: "https://www.miodottore.it/?_ga=2.149221811.447552144.1583917801-370134012.1583917801", town: "Italy," },
            { href: "https://www.znamylekar.cz/", town: " Czech Republic," },
            { href: "https://www.doctoralia.com.mx/", town: " Mexico," },
            { href: "https://www.doctoralia.co/", town: " Colombia," },
            { href: "http://www.doctoralia.com.br/", town: " Brazil," },
            { href: "http://www.doctoraliar.com/", town: " Argentina" },
            { href: "http://www.doctoralia.cl/", town: " Chile" }]
        }
    }
    render() {
        return (<div className="section-final">
            <div className="sub-final">
                <span className="text-fin">We are leaders in 10 countries:
            {this.state.tab3.map(e => (e.href) ?

                    <span><a href={e.href}>{e.town}</a></span> :

                    <span>{e.town}</span>

                )}
                </span>
            </div>
            <p className="text-fin">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
            <p className="text-fin">www.docplanner.com © 2020</p>
        </div>);
    }
}

export default Footer;