import { useCallback, useEffect, useState } from "react";
import fetchProviderByName, {
  ProviderDetailsConfig,
} from "../../../services/getProviderByname";

interface useProviderDetailsProps {
  name: string;
}

const useProviderDetails = ({ name }: useProviderDetailsProps) => {
  const [providerDetails, setProviderDetails] = useState<
    ProviderDetailsConfig[] | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProviderDetails = useCallback(async () => {
    if (!name) return;

    try {
      setIsLoading(true);
      setError(null);
      const result = await fetchProviderByName(name);
      if (result && result.apis) {
        const apis = result.apis;
        const allProviderDetails = Object.values(apis);
        setProviderDetails(allProviderDetails);
      }
    } catch (error) {
      console.error("Error fetching provider details:", error);
      setError("Failed to load provider details.");
    } finally {
      setIsLoading(false);
    }
  }, [name]);

  useEffect(() => {
    if (name) fetchProviderDetails();
  }, [name, fetchProviderDetails]);

  return {
    providerDetails,
    providerDetailsLoading: isLoading,
    error,
  };
};

export default useProviderDetails;
