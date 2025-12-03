import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-green-50 text-gray-800 p-6">
      <h1 className="text-5xl font-bold text-green-600 mb-4">Oops!</h1>
      <p className="text-xl mb-2">Something went wrong 😢</p>
      <p className="text-gray-600 mb-6">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
