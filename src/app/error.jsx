"use client" 

const ErrorPage = () => {
    throw new Error();
    return (
        <div>
            <h1 className="text-red-500">Something is worng </h1>
        </div>
    );
};

export default ErrorPage;