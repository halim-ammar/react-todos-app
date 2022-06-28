import React, { useState } from 'react';

function Input(props) {
  const [text, setText] = useState('');

  return (
    <div style={styles.container}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Please enter your task'
        style={styles.input}
      />
      <button
        style={styles.button}
        onClick={() => {
          props.addTodo(text);
          setText('');
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Input;

const styles = {
  input: { height: 50, width: '50%', marginRight: 10, padding: 5 },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: 10
  },
  button: { height: 40, width: 70 }
};
