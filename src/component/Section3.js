import React, { Component } from 'react';
class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="section3">
            <div className="text-section3">
            <p className="text100">We are a global company with local culture</p>
            </div>
                <div className="sous-div">
                    <p className="text101">
                        <a href="https://www.znanylekarz.pl/?_ga=2.154745405.447552144.1583917801-370134012.1583917801">ZnanyLekarz</a></p>
                    <p className="text101"><a href="https://www.znamylekar.cz/">ZnamyLekar</a></p>
                </div>
                <p className="text101"><a href="https://www.doctoralia.es/">Doctoralia</a></p>
                <p className="text101"><a href="https://www.doctoralia.es/">MioDottore</a></p>
                <p className="text101"><a href="https://www.doktortakvimi.com/?_ga=2.180958754.447552144.1583917801-370134012.1583917801">DoktorTakvimi</a></p>
        </div> );
    }
}
 
export default Section3;