import React from 'react';
import { useParams } from 'react-router-dom';

DetailPage.propTypes = {};

function DetailPage(props) {
  const {todoId} = useParams()
  console.log(todoId);

  return (
    <div>DetailPage</div>
  );
}

export default DetailPage;
