import React from "react";

import "./collection-item.styles.scss";

export const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <footer className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
    </div>
  );
};
