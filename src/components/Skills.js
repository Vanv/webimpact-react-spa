import React from 'react';

const Skills = () => (
    <div className="skills-wrapper">
        <div className="container">
            <div className="columns">
                <h2 className="mb-4 text-center">Skills</h2>
                <div className="progress">
                  <div className="progress-bar skillbar-orange" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML5</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '90%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">CSS3</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">jQuery</div>
                </div>
                <div className="progress">
                  <div className="progress-bar skillbar-blue" role="progressbar" style={{width: '70%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Javascript</div>
                </div>
                <div className="progress">
                  <div className="progress-bar skillbar-purple" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Vuejs</div>
                </div>
                <div className="progress">
                  <div className="progress-bar skillbar-blue" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">React</div>
                </div>
                <div className="progress">
                  <div className="progress-bar skillbar-light-blue" role="progressbar" style={{width: '40%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">React Native</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{width: '85%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Wordpress</div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">PHP</div>
                </div>
                <div className="progress">
                  <div className="progress-bar skillbar-dark-blue" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Shopify</div>
                </div>
                <div className="progress">
                  <div className="progress-bar skibar-purple" role="progressbar" style={{width: '75%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Magento</div>
                </div>

            </div>

        </div>
     </div>
);

export default Skills
