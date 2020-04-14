import React, { Component } from 'react';
class Section2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            card:[{src:'https://www.docplanner.com/img/screen-marketplace@2x.png',color:"#00ccb1",title:'For patient',text:'Find a doctor, book a visit and solve any health-related doubt',selecteur:{option1:"CHOOSE COUNTRY",option2:"AUSTRALIA",option3:"BRAZIL",option4:"CHILE",option5:"COLOMBIA",option6:"FRANCE",option7:"ITALY",option8:"MEXICO",option9:"PERU",option10:"POLAND"}},{src:'https://www.docplanner.com/img/screen-saas@2x.png',color:"#3d83df",title:'For doctors',text:'Save time managing visits and cut no-shows by half'}]
         }
    }
    render() { 
        return ( <div className="section2">
            {this.state.card.map(e=>(e.selecteur)? <div className="sect-green-blue" style={{backgroundColor:e.color}}>
                    <p className="pg1">{e.title}</p>
                    <p className="pg2">{e.text}</p>
                    <select class="choose-country" name="country">
                        <option >{e.selecteur.option1}</option>
                        <option>{e.selecteur.option2}</option>
                        <option>{e.selecteur.option3}</option>
                        <option>{e.selecteur.option4}</option>
                        <option>{e.selecteur.option5}</option>
                        <option>{e.selecteur.option6}</option>
                        <option>{e.selecteur.option7}</option>
                        <option>{e.selecteur.option8}</option>
                        <option>{e.selecteur.option9}</option>
                        <option>{e.selecteur.option10}</option>
                    </select>
                    <img className="img-green-blue" src={e.src} alt="log1"/>
                    
            </div>:
                 <div className="sect-green-blue" style={{backgroundColor:e.color}}>
                 <p className="pg1">{e.title}</p>
                 <p className="pg2">{e.text}</p>
                 <img className="img-green-blue" src={e.src} alt="log1"/>
         </div>
            )}
        </div> );
    }
}
 
export default Section2;