import React from 'react';

const NewRoute = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1 className="uppercase">This is new params : {params.id} </h1>
            <h1 className="uppercase">search by : {searchParams.catagory} </h1>
        </div>
    );
};

export default NewRoute;