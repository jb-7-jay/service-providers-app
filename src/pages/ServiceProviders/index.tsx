import React, { useState } from "react";
import clsx from "clsx";
import ProviderDetails from "./components/ProviderDetails";
import ProviderList from "./components/ProviderList";
import useProviderDetails from "./hooks/useProviderDetails";
import useProviders from "./hooks/useProviders";
import { ProviderDetailsConfig } from "../../services/getProviderByname";

const ServiceProviders: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [activeProviderName, setActiveProviderName] = useState<string>("");
  const [activeProviderDetails, setActiveProviderDetails] =
    useState<ProviderDetailsConfig>();
  const [showProviderDetails, setShowProviderDetails] =
    useState<boolean>(false);
  const { providers } = useProviders();
  const { providerDetails, providerDetailsLoading } = useProviderDetails({
    name: activeProviderName,
  });

  const handleShowProviderDetails = (provider: ProviderDetailsConfig) => {
    setActiveProviderDetails(provider);
    setShowProviderDetails(true);
    setShowSidebar(false);
  };

  const handleExploreMoreApis = () => {
    setActiveProviderName("");
    setShowSidebar(true);
    setShowProviderDetails(false);
  };

  return (
    <div
      className={clsx("layout", showSidebar ? "layout--light" : "layout--dark")}
    >
      <div className="app">
        {showProviderDetails && activeProviderDetails && (
          <ProviderDetails providerDetails={activeProviderDetails} />
        )}

        <div
          className={clsx(
            "explore-button-container",
            showProviderDetails ? "explore-button-container--more" : ""
          )}
        >
          <button onClick={handleExploreMoreApis}>
            Explore {showProviderDetails ? "more " : "web "} APIs
          </button>
        </div>

        {showSidebar && (
          <div
            onClick={() => setShowSidebar(false)}
            className="sidebar-overlay"
          />
        )}

        <aside
          className={clsx(
            "sidebar",
            showSidebar ? "sidebar--open" : "sidebar--closed"
          )}
        >
          <h2 className="sidebar__title">Select Provider</h2>
          <ProviderList
            providers={providers}
            activeProviderName={activeProviderName}
            setActiveProviderName={setActiveProviderName}
            providerDetails={providerDetails}
            providerDetailsLoading={providerDetailsLoading}
            handleShowProviderDetails={handleShowProviderDetails}
          />
        </aside>
      </div>
    </div>
  );
};

export default ServiceProviders;
