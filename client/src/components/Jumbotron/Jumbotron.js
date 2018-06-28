import  React from 'react';

const Jumbotron = ({children}) => (

    <div className="jumbotron" >
      <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
      {children}
    </div>
);
    
        

export default Jumbotron;
