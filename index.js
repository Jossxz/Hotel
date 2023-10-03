    // Identidade
    system();
    var hospedes = [];
    var salde = parseInt(999); 
    var Hotel = prompt("Qual é o nome do Hotel?");
    var client = prompt("Qual é seu nome?");
    start();
    var days = parseInt(prompt("Quantos dias deseja ficar?"));
    var diariaP = parseInt(prompt("Qual é o preço da diaria? R$"));
    var some = diariaP * days;

    diaryPF();
    menu();

     function start(){
    alert(`O Hotel ${Hotel}`);
    login();

    //pós login
    alert(`Bem vindo ao Hotel ${Hotel}, ${client}`);
     }
     function diaryPF(){
    if(diariaP > 0){
    alert("Confirmated");
    }else{
    alert("Valor invalido" + client);
    start();
    }

    if(days > 0 && days < 30){
    alert("Dias confirmados");
    }else{
    alert("Dias invalidados " + client);
    } 

    confirmF();
     }
    // substituir a palavra hotel pelo nome do hotel escolhido pelo user

     function login(){
        password();
     }
     function password(){
        var Password = parseInt(prompt("Informe a senha:"));
        if(Password == 2678){
            alert("Senha correta!")
        }else{
            alert("Algo errado, Informe novamente " + client);
            return password();
        }
     }
     function confirmF(){
            var confirm = prompt(`${client}, você confirma a hospedagem para ${Hotel} por ${days} dias? S/N`);
            
            switch(confirm){
                case "S":
                    alert(`${client}, reserva efetuada para ${Hotel}. O valor total é de R$${some}`);
                    break;
                    
                case "N":
                    alert(`${client}, reserva não efetuadas`);
                    break;
                        
                default:
                alert("Valor invalido");
                confirmF();
            }

     }
     function somaDD(){
            alert(`O valor de ${days} de Hospedagem é de R$${some}`);
     }
     function byebye(){
            alert(`Muito obrigado até logo,${client}`);
     }
    
    // Hospedes do hotel
    function menu(){
        var menuS = parseInt(prompt(`O que Deseja realizar? \n1 - Cadastrar \n2 - Pesquisar \n3 - Listar \n4 - Sair`));
        
        switch(menuS){
            case 1:
            var valorDiaria = parseFloat(prompt("Digite o valor padrão da diária: "));
            var quantidadeGratuidades = 0;
            var quantidadeMeias = 0;
            var valorTotal = 0;
                
            while (true) {
            var nomeHospede = prompt("Digite o nome do hóspede (ou 'PARE' para encerrar): ");
                
            if (nomeHospede.toUpperCase() === "PARE") {
            break;
            }
                
            var idadeHospede = parseInt(prompt("Digite a idade do hóspede: "));
                
            var hospede = {
                nome: nomeHospede,
                idade: idadeHospede,
                valorPagar: 0
            };
                
            if (idadeHospede < 6) {
                alert(`${nomeHospede} possui gratuidade`);
                quantidadeGratuidades++;
                hospede.valorPagar = 0;
            } else if (idadeHospede > 60) {
                alert(`${nomeHospede} paga meia`);
                quantidadeMeias++;
                hospede.valorPagar = valorDiaria / 2;
                valorTotal += valorDiaria / 2;
            } else {
                hospede.valorPagar = valorDiaria;
                valorTotal += valorDiaria;
            }
                
            hospedes.push(hospede);
            }
                
            alert("Lista de hóspedes cadastrados:");
            hospedes.forEach((hospede, index) => {
            alert(`Hóspede ${index + 1}: Nome - ${hospede.nome}, Idade - ${hospede.idade}, Valor a pagar - ${hospede.valorPagar.toFixed(2)}`);
            });
                
            alert("Quantidade de gratuidades: " + quantidadeGratuidades + "\nQuantidade de meias hospedagens: " + quantidadeMeias + "\nValor total arrecadado: " + valorTotal.toFixed(2));      
            menu();  
        break;
            case 2:
            var nomePesquisar = prompt("Digite o nome do hóspede para pesquisar: ");
            var encontrado = false;
            for (var i = 0; i < hospedes.length; i++) {
            if (hospedes[i].nome.toLowerCase() === nomePesquisar.toLowerCase()) {
            alert(`Hóspede ${nomePesquisar} foi encontrado.`);
            encontrado = true;
            break;
            }
        }
            if(!encontrado) {
            alert("Hóspede não encontrado.");
            }
            menu();

            break;
            case 3:
            alert("Listagem de todos os hóspedes:");
            hospedes.forEach((hospede, index) => {
            alert(`Hóspede ${index + 1}: Nome - ${hospede.nome}, Idade - ${hospede.idade}, Valor a pagar - ${hospede.valorPagar.toFixed(2)}`);
            });
            menu();
            break;
            case 4:
            window.close();
            break;
            default:
                alert("Algo deu errado! informe novamente");
                menu();
        }
    } 
    //events
    function eventH(){
        // cada garçom custa R$10,50 por hora
        var garçom = parseInt(prompt("quantos garçons deseja contrata por Hora: "));
        var timeE = parseInt(prompt("Quantas Horas o evento durará"));
        var someE = parseFloat((10.50 * garçom)*(60 * timeE));

        alert(`O valor total será de R$${someE}`);

        var confirmE = prompt("Aceita os valores? \n S - Sim N - Não");
        if(confirmE.toLowerCase() == "S"){
            alert(client + "Reserva Efetuada!")
        }else if(confirmE.toLowerCase() == "N"){
            alert(client + "Reserva não efetuada");
        }
    }

     function eventFood(){
        // 0,2 litros de café para cada convidado
        var cafe = parseFloat(0.2);
        var cafeP = parseFloat(0.80);
        // 0,5 litros de água para cada convidado
        var agua = parseFloat(0.5);
        var aguaP = parseFloat(0.40);
        //7 salgados por pessoa serão oferecidos
        var salgados = parseFloat(7);
        // o cento de salgados = 100 salgados custa 34 reais
        var salgadosP = parseFloat(0.34);
        // o salão pode receber no máximo 350 convidados
        var convidados = parseInt(prompt("Me diga quantos convidados iram estar presente: Máximo de 350 pessoas no salão:"));
        var someC = parseFloat(cafe * convidados);
        var someA = parseFloat(agua * convidados);
        var someS = parseFloat(salgados * convidados);    
        var someTotal = parseFloat((someC*cafeP)+(someA*aguaP)+(someS*salgadosP));
        if(convidados <= 350 || convidados > 0){
            alert("Convidados aceitos!");
            alert(`O Evento precisará de \nLitros de Café:${someC.toFixed(2)}\nLitros de Àgua:${someA.toFixed(2)}\nSalgados:${someS.toFixed(2)}`);
            alert(`O custo total do eveneto de R$${someTotal.toFixed(2)}`);
            //multiplicação dos salgados
        }else if(convidados > 350 || convidados < 0){
            alert("Quantidade de convidados superior à capacidade máxima");
            eventFood();
        }

        var confirmEF = prompt("Aceita os Valores? SIM/NÃO");
        if(confirmEF.toLowerCase().toUpperCase() == "SIM"){
            alert("Reserva efetuada com sucesso!");
        }else{
            alert("Reserva Não efetuada");
            eventFood();
     }
    }
        function calcularSpace() {
            var numConvidados = parseInt(prompt("me diga a Quantia de Convidados:"))
            // Capacidades dos auditórios
            var capacidadeLaranja = 150 + 70;
            const capacidadeColorado = 350;
          
            if (numConvidados > capacidadeColorado || numConvidados < 0) {
              return "Número de convidados inválido";
            } else {
              if (numConvidados <= capacidadeLaranja) {
                var cadeirasAdicionaisLaranja = Math.max(0, numConvidados - 150);
                alert(`O Auditório Laranja é o mais adequado. Serão necessárias ${cadeirasAdicionaisLaranja} cadeiras adicionais.`);
              } else {
                alert("O Auditório Colorado é o mais adequado.");
              }
            } 
        }
        function verificar() {
          // O restaurante está disponível para reservas de segunda a sexta das 7hs às 23hs; 
          // sábados e domingos apenas das 7hs às 15hs. sábado e domingo apenas das 7hs ás 15hs
          var weekDays = prompt("Qual dia da semana:"); 
          var time = parseInt(prompt("Me diga a hora:"));
          var nomeR = prompt("Qual é o nome da loja?");
          switch(weekDays){
            case 'Segunda'.toUpperCase().toLowerCase():
            if(time >= 17 || time <= 23){
              alert(`O restaurante Reservado para ! ${nomeR} para Segunda-Feira as ${time}hr`);
            }else{
              alert("O restaurante está fechado!");
            }
            break;
            case 'Terça'.toUpperCase().toLowerCase():
              if(time >= 17 || time <= 23){
                alert(`O restaurante Reservado para ! ${nomeR} para Terça-Feira as ${time}hr`);
              }else{
                alert("O restaurante está fechado!");
              }
            break;
            case 'Quarta'.toUpperCase().toLowerCase():
              if(time >= 17 || time <= 23){
                alert(`O restaurante Reservado para ! ${nomeR} para Quarta-Feira as ${time}hr`);
              }else{
                alert("O restaurante está fechado!");
              }
            break;
            case 'Quinta'.toUpperCase().toLowerCase():
              if(time >= 17 || time <= 23){
                alert(`O restaurante Reservado para ! ${nomeR} para Quinta-Feira as ${time}hr`);
              }else{
                alert("O restaurante está fechado!");
              }
            break;
            case 'Sexta'.toUpperCase().toLowerCase():
              if(time >= 17 || time <= 23){
                alert(`O restaurante Reservado para ! ${nomeR} para Sexta-Feira as ${time}hr`);
              }else{
                alert("O restaurante está fechado!");
              }
            break;
            case 'Sábado'.toUpperCase().toLowerCase():
              if(time >= 7 || time <= 15){
                alert(`O restaurante Reservado para ! ${nomeR} para Sábado-Feira as ${time}hr`);
              }else{
                alert("O restaurante está fechado!");
              }
            break;
            case 'Domingo'.toUpperCase().toLowerCase():
              if(time >= 7 || time <= 15){
                alert(`O restaurante Reservado para ! ${nomeR} para Domingo-Feira as ${time}hr`);
              }else{
                alert("O restaurante está fechado!");
              }
            break;
            default:
              alert("Valor Invalido, Digite Novamente!");
              verificar();
          }
        }

        //atividade 8
      function PostoBarato() {
          var aPriceWayneOil = parseFloat(prompt('Informe o preço do álcool no Wayne Oil:'));
          var gPriceWayneOil = parseFloat(prompt('Informe o preço da gasolina no Wayne Oil:'));
          var aStarkPetrol = parseFloat(prompt('Informe o preço do álcool no Stark Petrol:'));
          var gStarkPetrol = parseFloat(prompt('Informe o preço da gasolina no Stark Petrol:'));  
          
          var vAbastecido = 42;

          var custoTotalAW = aPriceWayneOil * vAbastecido;
          var custoTotalGW = gPriceWayneOil * vAbastecido;
          var custoTotalAS = aStarkPetrol * vAbastecido;
          var custoTotalGS = gStarkPetrol * vAbastecido;

          // Determina o combustível mais atraente
          if(custoTotalAW < custoTotalGW || custoTotalAW < custoTotalAS){
          alert(`${client} O combustível mais atraente é: Alcool WayneOil`);
          }else if(custoTotalGW < custoTotalGS || custoTotalGW < custoTotalAW){
          alert(`${client} O combustível mais atraente é: Gasolina WayneOil`);
          }else if(custoTotalAS < custoTotalGS || custoTotalAS < custoTotalGS){
          alert(`${client} O combustível mais atraente é: Alcool StarkPetrol`);
          }else if(custoTotalGS < custoTotalAW || custoTotalGS < GW){
          alert(`${client} O combustível mais atraente é: Gasolina StarkPetrol`);
          }
        }

        //atividade 9 
    function system(){
      var empresas = prompt("Qual é o nome da empresa?");
      var valorAP = parseFloat(prompt("Qual é o valor do aparelho?"));
      var quantiaAP = parseInt(prompt("Quantia de Aparelhos"));
      var porcentagemD = parseInt(prompt("Qual a porcentagem de desconto?"));
      var numMinAP = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
      var someSys = parseFloat(((valorAP * quantiaAP))*((porcentagemD/100)));
      var result = parseFloat(valorAP - someSys)
      alert(`O serviço de ${empresas} custará R$${result}`);     
      
      var newDados = prompt(`Deseja informar novos dados? (S/N)`);
      if(newDados.toLowerCase().toUpperCase() == "S"){
      system();
      }else{
        alert(`O orçamento de menor valor é o ${empresas} por R$${result}`);
    }
  }
    
          