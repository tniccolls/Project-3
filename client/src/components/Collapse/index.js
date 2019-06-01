import React from 'react';
import useCollapse from 'react-collapsed';
 
function Demo() {
  const {getCollapseProps, getToggleProps, isOpen} = useCollapse();
 
  return (
    <Fragment>
      <button {...getToggleProps()}>{isOpen ? 'Collapse' : 'Expand'}</button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </Fragment>
  );
}