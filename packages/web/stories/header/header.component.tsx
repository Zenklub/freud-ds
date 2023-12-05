import React from "react";

export interface HeaderProps {
  title: string;
  description: string;
}

export const FreudHeaderComponent: React.FC<HeaderProps> = ({
  title,
  description,
}) => (
  <div className="freud-docs-header">
    <div className="header">
      <div className="container">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  </div>
);
