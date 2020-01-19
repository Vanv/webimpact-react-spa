import React, { Component } from 'react';
import ProjectList from "./ProjectList.js";


class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            myProjects: [
              {
                  "id": 1,
                  "thumbnail": "images/mapping-app-Vuejs.png",
                  "projectName": "Mapping Application",
                  "shotDescription": "Vuejs SPA",
                  "description": "Tech used: Vuejs, Typescript, GraphQl, Vuetify, Bitbucket, Javascript ES6 and Webpack",
                  "link": "//webimpact.co.nz/mappingspa/"
              },
              {
                  "id": 2,
                  "thumbnail": "images/clienthub-app-Vuejs.png",
                  "projectName": "Client Hub Application",
                  "shotDescription": "Vuejs SPA",
                  "description": "Tech used: Vuejs, Typescript, GraphQl, Vuetify, Bitbucket, Javascript ES6 and Webpack",
                  "link": "//webimpact.co.nz/clienthubspa/"
              },
              {
                  "id": 3,
                  "thumbnail": "images/coach-finder-application-a.jpg",
                  "projectName": "Coach Finder",
                  "shotDescription": "React SPA",
                  "description": "Tech used: React, Firebase, Javascript ES6, Git, Typescript and Bootstrap",
                  "link": "//newzealandforyoutosee.nz/"
              },
              {
                  "id": 4,
                  "thumbnail": "images/employee-mgmt-spa.png",
                  "projectName": "Employee Management",
                  "shotDescription": "React SPA",
                  "description": "Tech used: React, React-bootstrap, ES6 and Git",
                  "link": "//webimpact.co.nz/react/emp-mgmt/"
              },
              {
                  "id": 5,
                  "thumbnail": "images/react-shoppingcart.png",
                  "projectName": "Shopping Cart",
                  "shotDescription": "React SPA",
                  "description": "Tech used: React, React-bootstrap, ES6 and Git",
                   "link": "//webimpact.co.nz/react/react-shoppingcart/"
              },
              {
                  "id": 6,
                  "thumbnail": "images/Webimpact_React.png",
                  "projectName": "Webimpact",
                  "shotDescription": "Reacjs SPA",
                  "description": "Tech used: React, Bootstrap, json, ES6, Bootstrap and Git",
                  "link": "//www.webimpact.co.nz"
              },
              {
                  "id": 7,
                  "thumbnail": "images/indiansummer.png",
                  "projectName": "IndianSummer",
                  "shotDescription": "Wordpress CMS",
                  "link": "//www.indiansummer.co.nz"
              },
              {
                  "id": 8,
                  "thumbnail": "images/kland.png",
                  "projectName": "Kland",
                  "shotDescription": "Magento CMS",
                  "link": "//kland.co.nz/"
              },
              {
                  "id": 9,
                  "thumbnail": "images/nz4u2c.png",
                  "projectName": "New Zealand for your to see",
                  "shotDescription": "Wordpress CMS",
                  "link": "//newzealandforyoutosee.nz/nz4u2csite/"
              },
              {
                  "id": 10,
                  "thumbnail": "images/abrakebabra.png",
                  "projectName": "Abrakebabra",
                  "shotDescription": "Wordpress CMS",
                  "link": "//www.abrakebabra.co.nz/"
              }
            ],
        }
    }

    // componentDidMount() {
    //     fetch('./data.json').then(res => res.json())
    //     .catch(err => fetch('data.json').then(res => res.json()).then(data => data.myProjects))
    //     .then(data => {
    //         const projects = data.projects.map(item => {
    //             return item;
    //         })
    //         this.setState({myProjects: projects});
    //     })
    // }

    render(){
        return(
          <div>
            <h2 className="mt-5 mb-5 text-center">Portfolio</h2>
            <ProjectList projectList= {this.state.myProjects} />
          </div>
        );
    }
}

export default Portfolio;
