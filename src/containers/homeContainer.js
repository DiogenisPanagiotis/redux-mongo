import React from 'react';

const homeContainer = () => {
    return (
        <div className='container'>
            <div className='row'>
                 <div className='col'>
                     <div className='jumbotron'>
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">CRUD Operations</h5>
                            <h6 className="card-subtitle mb-2 text-muted">CREATE, READ, UPDATE, DELETE</h6>
                            <p className="card-text">These are the four basic functions of persistent storage.</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homeContainer;