import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="section-final">
            <p className="text-fin">We are leaders in 10 countries: <a href="https://www.znanylekarz.pl/?_ga=2.256523918.447552144.1583917801-370134012.1583917801">Poland,</a>
                <a href="https://www.doktortakvimi.com/?_ga=2.81991955.447552144.1583917801-370134012.1583917801"> Turkey,</a>
                <a href="https://www.doctoralia.es/"> Spain,</a>
                <a href="https://www.miodottore.it/?_ga=2.149221811.447552144.1583917801-370134012.1583917801"> Italy,</a>
                <a href="https://www.znamylekar.cz/"> Czech Republic,</a>
                <a href="https://www.doctoralia.com.mx/"> Mexico,</a>
                <a href="https://www.doctoralia.co/"> Colombia,</a>
                <a href="http://www.doctoralia.com.br/"> Brazil,</a>
                <a href="http://www.doctoraliar.com/"> Argentina</a> and
                <a href="http://www.doctoralia.cl/"> Chile</a>
            </p>
            <p className="text-fin">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
            <p className="text-fin">www.docplanner.com © 2020</p>
        </div> );
    }
}
 
export default Footer;