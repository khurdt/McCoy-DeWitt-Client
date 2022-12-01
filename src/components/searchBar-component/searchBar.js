import React from "react";
import Form from 'react-bootstrap/Form';

export default function SearchBar(props) {
  const { projectsInView, filter, setFilter, primaryColor } = props;
  const placeholder = (projectsInView) ? 'search projects' : 'search clients';

  return (
    <Form.Control
      className='m-auto'
      style={{ border: `1px solid ${primaryColor}`, color: 'black', maxWidth: '300px', textAlign: 'center' }}
      onChange={e => setFilter(e.target.value)}
      value={filter}
      placeholder={placeholder}
    />
  );
}