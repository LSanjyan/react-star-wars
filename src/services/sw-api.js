
export function getAllStarships() {
    return fetch('https://swapi.dev/api/starships/')
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => {
        console.error('Error fetching starships:', error);
        return [];
      });
  }
  