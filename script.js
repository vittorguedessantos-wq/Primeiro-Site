   const botão = document.querySelector("button")
      botao.addEventListener ('click', curtir)

      function curtir(){
         let curtidas = document.querySelector("span")
         curtidas.textContent++;
      }


      // BOTAO DO TAMANHO
      const tamanho = document.getElementById("tamanho")
      tamanho.addEventListener("click", aumentarFonte)

      //FUNCAO
      function aumentarFonte(){
          document.body.style.fontSize = fonte + "px";
      }