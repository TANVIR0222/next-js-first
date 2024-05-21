import React from 'react';

export const metadata = {
    title:"About Page",
    description :"this is about page " 
}

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