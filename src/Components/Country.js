import React from 'react';

const Country = ({ data }) => {
  return (
    <div className="flex flex-col w-60 h-80 bg-very-dark-blue">
      <div className="flex-1">
        <img
          className="w-full h-auto object-cover"
          alt="Flag of Germany"
          src={data?.flag}
        />
      </div>
      <div className="flex-1 px-3 py-2">
        <h1 className="text-white font-bold text-lg my-2">{data?.name}</h1>
        <p className="text-white">
          Population :{' '}
          <span className="text-dark-gray">{data?.population}</span>
        </p>
        <p className="text-white">
          Region: <span className="text-dark-gray">{data?.region}</span>
        </p>
        <p className="text-white">
          Capital: <span className="text-dark-gray">{data?.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
