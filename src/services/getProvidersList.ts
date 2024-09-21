const guruAPI = process.env.React_APP_GURU_API;

function getProvidersList(): Promise<{ data: string[] }> {
  return new Promise((resolve, reject) => {
    fetch(`${guruAPI}/providers.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

export default getProvidersList;
