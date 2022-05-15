/* 
 OBJETIVO 1 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM TEMOS QUE:

 - COLOCAR A CLASSE SELECIONADO NO PERSONAGEM QUE PASSAMOS O MOUSE EM CIMA PARA ADICIONAR A ANIMAÇÕA NELE

 - RETIRAR A CLASSE SELECIONADO QUE ESTÁ SELECIONADO 


 OBJETIVO 2 - QUANDO PASSAR O MOUSE EM CIMA DO PERSONAGEM TROCAR A IMAGEM E NOME DO PERSONAGEM GRANDE 

  - ALTERAR IMAGEM DO JOGADOR 1
  - ALTERAR O NOME DO JOGADOR 1
  
  const homemDeFerro = document.getElementById('homem-de-ferro') 
  
  homemDeFerro.addEventListener('mouseenter', () => {
    homemDeFerro.classList.add('selecionado');
   })

   const hulk = document.getElementById('hulk') 
  
   hulk.addEventListener('mouseenter', () => {
     hulk.classList.add('selecionado');
    })
    */

    const personagens = document.querySelectorAll('.personagem')
    
    personagens.forEach((personagem) => {
       personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')   
        
        personagem.classList.add('selecionado')

        

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;

       })
     })



