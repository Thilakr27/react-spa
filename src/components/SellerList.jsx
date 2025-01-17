import React, { useState } from 'react';

const SellerList = () => {
  const sellers = [
    { name: 'John Doe', rating: 4.5, review: 'Great service!' },
    { name: 'Jane Smith', rating: 4.0, review: 'Very professional!' },
  ];

  const [query, setQuery] = useState('');
  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search sellers"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list-group">
        {filteredSellers.map((seller, index) => (
          <li key={index} className="list-group-item">
            <strong>{seller.name}</strong>
            <p>Rating: {seller.rating}</p>
            <p>{seller.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerList;
