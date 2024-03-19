var motivos = [
    "Perdoe para ser perdoado",
    "Alivia o estresse",
    "Todo mundo ganha fazendo as pazes",
    "Alívio psicológico como melhora do sono",
      "Pratica o auto perdão"
  ];
  
  var imagens = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjl_ZM3LUZJTm7ofIuXtroTI3p6leoHvLFn5o0kl9hcQMaFrveqkaTHYL44D1PUVdKvg&usqp=CAU",
    "https://www.astrocentro.com.br/blog/wp-content/uploads/2022/09/Simpatia-bem-forte-para-alguem-te-pedir-perdao.jpg",
    "https://img.freepik.com/vetores-premium/perdao-perdao-em-portugues-brasileiro-letras-de-mao-modernas-vetor_282901-132.jpg?w=740",
    "https://www.grupoelmo.com.br/upload/blog/XXGlZc3NnuuUhZ7D9zEOmriXBGH9TlDQcZG3uGki.jpeg",
    "https://catequizar.com.br/wp-content/uploads/2021/11/perdoar-e-estar-livre.jpg"
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  