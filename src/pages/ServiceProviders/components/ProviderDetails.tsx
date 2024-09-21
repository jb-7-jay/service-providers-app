import React from "react";
import { ProviderDetailsConfig } from "../../../services/getProviderByname";

interface ProviderDetailsProps {
  providerDetails: ProviderDetailsConfig | undefined;
}

const ProviderDetails: React.FC<ProviderDetailsProps> = ({
  providerDetails,
}) => {
  return (
    <div className="provider-details">
      <div className="provider-details__heading">
        <img
          className="provider-details__logo"
          src={providerDetails?.info["x-logo"].url}
          alt="provider logo"
        />
        <h1 className="provider-details__title">
          {providerDetails?.info.title}
        </h1>
      </div>

      <div className="provider-details__section">
        <div className="provider-details__subtitle">Description</div>
        {providerDetails?.info.description && (
          <div
            className="provider-details__description"
            dangerouslySetInnerHTML={{
              __html: providerDetails?.info.description,
            }}
          ></div>
        )}
      </div>

      <div className="provider-details__section">
        <div className="provider-details__subtitle">Swagger</div>
        <div className="provider-details__swagger">
          {providerDetails?.swaggerUrl}
        </div>
      </div>

      <div className="provider-details__section">
        <div className="provider-details__subtitle">Contact</div>
        <div className="provider-details__contact">
          <div>Email: {providerDetails?.info.contact?.email}</div>
          <div>Name: {providerDetails?.info.contact?.name}</div>
          <div>Url: {providerDetails?.info.contact?.url}</div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
