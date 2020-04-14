import React, { Component } from 'react';
class Section6 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            town:[{a:"https://www.docplanner.com/career?&loc=poland#jobs-offers",src:"https://www.docplanner.com/images/warsaw.png",text:"Warsaw",href:"https://www.docplanner.com/career?&loc=poland#jobs-offers"},{a:"https://www.docplanner.com/career?&loc=spain#jobs-offers",src:"https://www.docplanner.com/images/barcelona.png",text:"Barcelona",href:"https://www.docplanner.com/career?&loc=spain#jobs-offers"},{a:"https://www.docplanner.com/career?&loc=rome#jobs-offers",src:"https://www.docplanner.com/images/istanbul.png",text:"Istanbul",href:"https://www.docplanner.com/career?&loc=rome#jobs-offers"},{a:"https://www.docplanner.com/career?&loc=italy#jobs-offers",src:"https://www.docplanner.com/images/rome.png",text:"Rome",href:"https://www.docplanner.com/career?&loc=rome#jobs-offers"},{a:"https://www.docplanner.com/career?&loc=mexico#jobs-offers",src:"https://www.docplanner.com/images/mexico-city.png",text:"Mexico City",href:"https://www.docplanner.com/career?&loc=mexico#jobs-offers"},{a:"https://www.docplanner.com/career?&loc=brazil#jobs-offers",src:"https://www.docplanner.com/images/curitiba.png",text:"Curitiba",href:"https://www.docplanner.com/career?&loc=brazil#jobs-offers"},]
         }
    }
    render() { 
        return ( <div className="world">
            {this.state.town.map(e=>
                <div className="town">
                    <a href={e.a}><img className="img-town" src={e.src} alt="img6"/></a>
                    <div className="sub-town">
                    <p className="town-name">{e.text}</p>
                    <a href={e.href}><button id="btn"><p class="text-btn">SEE OPENINGS</p></button></a>
                    </div>
                </div>)}
        </div> );
    }
}
 
export default Section6;