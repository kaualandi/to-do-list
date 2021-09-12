import React from 'react';
import People from './img/people.svg';
import './App.css';

function App() {
  const [coment, setComent] = React.useState("");
  const [comentAlls, setComentAlls] = React.useState([]);
  const clearStyle = {
    display: 'none'
  }
  function textAreaDigited(e) {
    setComent(e.target.value);

  }
  function buttonClicked(e) {
    if (coment == "") {
      document.querySelector('textarea').focus();
    } else {
      const ComentAllsAfter = [...comentAlls,coment];
      setComentAlls(ComentAllsAfter);
      document.querySelector('textarea').value = "";
      document.querySelector('textarea').focus();
      setComent('');
      document.querySelector('#clear').style.display="block";
    }
  }
  function clearList() {
    setComentAlls([]);
    document.querySelector('#clear').style.display="none";
  }
  return (
    <div class="container">
      <div class="col">
        <img src={People}/>
        <textarea onChange={textAreaDigited} placeholder="Digite seu comentário"></textarea>
        <button onClick={buttonClicked}>Comentar</button>

      </div>
      <div class="col">
          <div id="clear" style={clearStyle}>
            <button onClick={clearList} id='clear'>limpar</button>
          </div>
        <ul id="lista-comments">
          {comentAlls.map(oneComent => (
            <li key={oneComent}>{oneComent}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
