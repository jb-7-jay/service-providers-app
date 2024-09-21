import React from "react";
import { ProviderDetailsConfig } from "../../../services/getProviderByname";
import Accordion from "./Accordion";

interface ProviderListProps {
  providers: string[];
  activeProviderName: string;
  setActiveProviderName: (name: string) => void;
  providerDetails: ProviderDetailsConfig[] | undefined;
  providerDetailsLoading: boolean;
  handleShowProviderDetails: (provider: ProviderDetailsConfig) => void;
}

const ProviderList: React.FC<ProviderListProps> = ({
  providers,
  activeProviderName,
  setActiveProviderName,
  providerDetails,
  providerDetailsLoading,
  handleShowProviderDetails,
}) => {
  const toggleProviderAccordion = (providerName: string) => {
    setActiveProviderName(
      providerName === activeProviderName ? "" : providerName
    );
  };

  return (
    <div>
      {providers?.map((provider, index) => (
        <Accordion
          key={index}
          providerName={provider}
          isActive={activeProviderName === provider}
          toggleProviderAccordion={toggleProviderAccordion}
          providerDetails={providerDetails}
          providerDetailsLoading={providerDetailsLoading}
          handleShowProviderDetails={handleShowProviderDetails}
        />
      ))}
    </div>
  );
};

export default ProviderList;
