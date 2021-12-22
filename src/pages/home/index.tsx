import React from 'react';
import './style.css';



export default function Home() {
  return (
    <>
      <main className="conteudo" role="main">
        <section className="container-home">
          <input type="text" className="box-busca" placeholder="pesquise aqui" role="search" />
            <p>Bem-vindo ao DBINCLUI, lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam mattis fringilla dolor, id congue diam rhoncus sit amet. Fusce at lacus metus. 
                Maecenas gravida  finibus ligula, vitae lacinia est. Integer tristique libero non nunc 
                faucibus elementum. 
          </p>
        </section>
        </main>
        

        <section className="container-center">
            <div className="box"  role="button" tabIndex={1} aria-label="TRADUTOR DE LIBRAS">
              <h3 className="title" id="card1" >TRADUTOR DE LIBRAS</h3>
              <div className="box-libras">
              </div >
            </div>
            <div className="box"  role="button" tabIndex={2} aria-label="GUIA DE ACESSIBILIDADE">
              <h3 className="title" id="card2" >GUIA DE ACESSIBILIDADE</h3>
              <div className="box-libras">
              </div>
            </div>
            <div className="box" role="button" tabIndex={3} aria-label="GUIA DA CULTURA SURDA">
              <h3 className="title" id="card3" >GUIA DA CULTURA SURDA</h3>
              <div className="box-libras">
              </div>
            </div>
        </section>

    </>
  );
}
