export interface ProviderDetailsConfig {
  updated: string;
  swaggerUrl: string;
  swaggerYamlUrl: string;
  openapiVer: string;
  link: string;
  added: string;
  info: {
    contact: {
      email: string;
      name: string;
      url: string;
      "x-twitter": string;
    };
    description: string;
    title: string;
    version: string;
    "x-apisguru-categories": string[];
    "x-logo": {
      url: string;
    };
    "x-origin": {
      format: string;
      url: string;
      version: string;
    }[];
    "x-providerName": string;
    "x-serviceName": string;
    "x-unofficialSpec": boolean;
  };
}
const guruAPI = process.env.React_APP_GURU_API;

interface ProviderDetails {
  apis: Record<string, ProviderDetailsConfig>;
}

const fetchProviderByName = async (name: string): Promise<ProviderDetails> => {
  const data = await fetch(`${guruAPI}/${name}.json`);
  const result = await data.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 3000);
  });
};

export default fetchProviderByName;
