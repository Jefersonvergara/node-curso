export const pokemonIds = [1, 20, 30, 40, 66];

//pokemonIds.push(22);

interface Pokemon {
  id: number;
  name: string;
}

export const pokemon: Pokemon = {
  id: 1,
  name: "bulbasor",
};
console.log(pokemon.name);
