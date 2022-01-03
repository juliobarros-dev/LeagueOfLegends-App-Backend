# League of Legends Free Week API

Fornece as informações completas dos campeões que estão na rotação gratuita semanal.

<hr>

## League of Legends

League of Legends (LoL) é um jogo do gênero M.O.B.A (Multiplayer Online Battle Arena) administrado pela Riot Games.

No LoL toda semana há campeões que ficam disponíveis gratuitamente para que os jogadores possam experimentá-los antes de fazer a compra.

Essa lista de campeões é disponibilizada e atualizada pela própria Riot Games.

- [O que é M.O.B.A](https://www.significados.com.br/moba/)
- [League of Legends](https://www.leagueoflegends.com/pt-br/)
- [Riot Games](https://www.riotgames.com/pt-br)

<hr>

## Sobre a API

Construi esta API baseado nas informações disponibilizadas pela Riot Games.

A Riot disponibiliza uma API com a lista de IDs dos campeões que estão na
free week e um JSON com as informações de todos os campeões.

Eu consolidei esses dados e as informações são entregues nos idiomas PT-BR e EN-US.

- [Riot Developer](https://developer.riotgames.com/apis#champion-v3)
- [Lista de campeões](http://ddragon.leagueoflegends.com/cdn/11.24.1/data/pt_BR/champion.json)

<hr>

## Utilização

A API retorna um objeto contendo duas chaves referentes a rotação gratuita.


- freeWeek: rotação semanal disponível para todos os jogadores com nível maior que 10.
  
- newPlayers: rotação semana disponível para todos os novos jogadores com nível menor ou igual a 10.

Consequentemente essas chaves retornam duas arrays de campeões cada, uma em português e outra em inglês.

- champions_pt_br: lista de campeões em português.
- champions_en_us: lista de campeões em inglês.

<br>

Rota: `https://juliobarros-dev-lolapp.herokuapp.com/`

Método: `GET`

Retorno: 

    {
      "freeWeek": {
        "champions_pt_br": [...],
        "champions_en_us": [...]
      },
      "newPlayers": {
        "champions_pt_br": [...],
        "champions_en_us": [...]
      }
    }


- [Teste em seu navegador](https://juliobarros-dev-lolapp.herokuapp.com/)

<hr>

## Desenvolvimento

Desenvolvida em NodeJs utilizando arquitetura MSC.

Informações dos campeões armazenadas no MongoDB.

Utilização de variáveis de ambiente para segurança das informações sensíveis.

Uso de ESLint para padronização do código.

- [Arquitetura de software em camadas](https://pt.wikipedia.org/wiki/Arquitetura_multicamada)
- [MongoDB](https://www.mongodb.com/)
- [Banco de dados não relacional](https://docs.microsoft.com/pt-br/azure/architecture/data-guide/big-data/non-relational-data)
- [Variáveis de ambiente](https://pt.wikipedia.org/wiki/Vari%C3%A1vel_de_ambiente)
- [ESLint](https://eslint.org/)

<hr>

## Contato

- [LinkedIn](https://www.linkedin.com/in/juliobnascimento/)
  