import { useEffect, useState } from "react";
import getProvidersList from "../../../services/getProvidersList";

const useProviders = () => {
  const [providers, setProviders] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProviders = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const providersResult = await getProvidersList();
      setProviders(providersResult.data);
    } catch (error) {
      console.error("Error fetching provider list:", error);
      setError("Failed to load providers list.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return {
    providers,
    providersLoading: isLoading,
    error,
  };
};

export default useProviders;
