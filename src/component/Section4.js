import React, { Component } from 'react';
class Section4 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tab1:[{src:"https://www.docplanner.com/img/flag.png",title:"Leader in 10 countries",text:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},{src:"https://www.docplanner.com/img/patients.png",title:"30 million unique patients",text:"visit us every month"}],
            tab2:[{src:"https://www.docplanner.com/img/visits.png",title:"1.5 million appointments",text:"booked last month"},{src:"https://www.docplanner.com/img/doctors.png",title:"2 million active doctors",text:"trust in our solutions"}]
         }
    }
    render() { 
        return ( <div className="section4">
            <div className="section41">
            <p class="text400">The world's biggest healthcare platform</p>
            <p class="text401">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p> 
            <img src="https://www.docplanner.com/img/logo.png" alt="img10"/>
            </div>
            <div className="section42">
            <div className="div12">
                {this.state.tab1.map(e=>
                    <div className="subdiv4">
                        <img src={e.src} alt="img4"/>
                        <p className="psec1">{e.title}</p>
                        <p className="psec2">{e.text}</p>
                    </div>)}
            </div>
            <div className="div34">
                {this.state.tab2.map(e=>
                    <div className="subdiv4">
                        <img src={e.src} alt="img4"/>
                        <p className="psec1">{e.title}</p>
                        <p className="psec2">{e.text}</p>
                    </div>)}
            </div>
            </div>
        </div> );
    }
}
 
export default Section4;