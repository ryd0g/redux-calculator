import React from 'react';
import './keypad.css';

const KeyPad = (props) => {
  return (
    <div>
      <section>
        <div>
          <button>
            <span>1</span>
          </button>
          <button>
            <span>2</span>
          </button>
          <button>
            <span>3</span>
          </button>
          <button>
            <span>+</span>
          </button>
        </div>
        <div>
          <button>
            <span>4</span>
          </button>
          <button>
            <span>5</span>
          </button>
          <button>
            <span>6</span>
          </button>
          <button>
            <span>-</span>
          </button>
        </div>
        <div>
          <button>
            <span>7</span>
          </button>
          <button>
            <span>8</span>
          </button>
          <button>
            <span>9</span>
          </button>
          <button>
            <span>*</span>
          </button>
        </div>
        <div>
          <button>
            <span>C</span>
          </button>
          <button>
            <span>0</span>
          </button>
          <button>
            <span>&larr;</span>
          </button>
          <button>
            <span>/</span>
          </button>
        </div>
      </section>
      <section id='evalBtn'>
        <button id='equals'>
          <span>=</span>
        </button>
      </section>
    </div>
  );
};

export default KeyPad;
