const request = require("request-promise");
const cheerio = require("cheerio");

const url =
  "https://www.pokepedia.fr/Liste_des_Pok%C3%A9mon_de_la_premi%C3%A8re_g%C3%A9n%C3%A9ration";

(async () => {
  const response = await request(url);

  let $ = cheerio.load(response);

  let number = $('tr > td[rowspan="1"]').text();
  let nom = $('td[id="Bulbizarre"] > a').text();

  const pokemons = [
    {
      numero: number,
      pokemon: nom,
    },
  ];

  console.log(pokemons);
})();
