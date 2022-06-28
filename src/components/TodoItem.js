import React from 'react';
export default function TodoItem(props) {
  return (
    <div style={styles.item}>
      <p style={styles.text}>{props.todo.text}</p>
      <p style={styles.delete} onClick={() => props.removeTodo(props.todo.id)}>
        X
      </p>
    </div>
  );
}

const styles = {
  item: {
    backgroundColor: 'gray',
    padding: 10,
    marginHorzontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: '#FFF'
  },
  delete: {
    color: 'red'
  }
};
