import React, {Component} from 'react';

class ProjectList extends Component {
  render() {
    return (
        <div className="card-deck">
            {this.props.projectList.map(item => (

                 <div className="col-sm-4" key={item.id}>
                  <div className="card mb-4" >
                      <img className="img-fluid" src={item.thumbnail} alt={item.thumbnail} />
                      <div className="card-body">
                          <h5 className="card-title">{item.projectName}</h5>
                          <p className="card-text"><b>{item.shotDescription}</b></p>
                          <p  className="card-text">{item.description}</p>
                            <div className="d-flex justify-content-end">
                              {/* <Router>
                                 <Link className="linkButton" to={item.link} variant="info" >Read More</Link>
                               </Router> */}
                              <a className="linkButton" href={item.link} >Read More</a>
                            </div>
                      </div>
                  </div>
                </div>
            ))}

        </div>
    );
  }
}
export default ProjectList
