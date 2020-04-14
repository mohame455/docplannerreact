import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav:[{name:"About us",href:"https://www.docplanner.com/about-us"},{name:"Career",href:"https://www.docplanner.com/career"},{name:"Departments",href:"#"}],
            dropContent:[{name:"Marketing & PR",href:"https://www.docplanner.com/department?dep=marketing"},{name:"Customer Success & Sales",href:"https://www.docplanner.com/department?dep=customer"},{name:"IT, Product, Design & UX",href:"https://www.docplanner.com/department?dep=it"},{name:"Finance & Administration",href:"https://www.docplanner.com/department?dep=finance"},{name:"HR & more",href:"https://www.docplanner.com/department?dep=hr"}]
        }
    }
    render() {
            return ( < div className="nav" >
                < img style = {{ width: "250px", height: "50px" } }src = "https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="img1"/>
                <ul className="menu">
                <li> < a href = { this.state.nav[0].href } > { this.state.nav[0].name } </a></li>
                <li> < a href = { this.state.nav[1].href } > { this.state.nav[1].name } </a></li>
                <li className="dropdown"> < a href = { this.state.nav[2].href } > { this.state.nav[2].name } </a>  
                <ul className = "dropcontent"> {
                    this.state.dropContent.map(e => < div>
                        <li> < a href = { e.href } > { e.name } </a></li>
                        </div>)} 
                </ul> 
                </li>

                </ul> 
                </div> );
                }
            }

            export default Header;