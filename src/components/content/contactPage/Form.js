import React from "react";

const Form = () => {
  return (
    <form className="ui form">
      <div className="field">
        <label>Nome</label>
        <input type="text" name="first-name" placeholder="Nome" />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="text" name="last-name" placeholder="Email" />
      </div>
      <div className="field">
        <label>Assunto</label>
        <select className="ui dropdown">
          <option value="0">Informação</option>
          <option value="1">Orçamento</option>
          <option value="2">Outro</option>
        </select>
      </div>

      <div className="field">
        <label>Descrição</label>
        <textarea name="descricao" style={{ height: `114px` }}></textarea>
      </div>

      <button className="ui button" type="submit">
        Submeter
      </button>
    </form>
  );
};

export default Form;
