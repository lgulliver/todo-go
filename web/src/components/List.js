import React from 'react';
const List = (props) => {
  const { todoItems } = props;
  if (!todoItems || todoItems.length === 0) return <p>No To Do items, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>To Do:</h2>
      {todoItems.map((todoItem) => {
        return (
          <li key={todoItem.id} className='list'>
            <span className='repo-text'>{todoItem.Description}</span>            
          </li>
        );
      })}
    </ul>
  );
};
export default List;