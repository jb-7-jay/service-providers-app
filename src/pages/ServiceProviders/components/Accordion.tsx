import React from "react";
import clsx from "clsx";
import { ProviderDetailsConfig } from "../../../services/getProviderByname";

interface AccordionProps {
  providerName: string;
  isActive: boolean;
  toggleProviderAccordion: (providerName: string) => void;
  providerDetails: ProviderDetailsConfig[] | undefined;
  providerDetailsLoading: boolean;
  handleShowProviderDetails: (provider: ProviderDetailsConfig) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  providerName,
  isActive,
  toggleProviderAccordion,
  providerDetails,
  providerDetailsLoading,
  handleShowProviderDetails,
}) => (
  <div className="accordion">
    <div
      className="accordion__header"
      onClick={() => toggleProviderAccordion(providerName)}
    >
      <span>{providerName}</span>

      <img
        src="icons/up-arrow.svg"
        alt="up arrow"
        width={30}
        height={30}
        className={clsx(
          isActive ? "accordion__arrow--up" : "accordion__arrow--down"
        )}
      />
    </div>
    <div
      className={clsx(
        "accordion__content",
        isActive ? "accordion__content--open" : "accordion__content--closed"
      )}
    >
      {providerDetailsLoading && <div>Loading...</div>}

      {!providerDetailsLoading &&
        !!providerDetails?.length &&
        isActive &&
        providerDetails.map((provider, index) => (
          <div
            key={index}
            className="accordion__item"
            onClick={() => handleShowProviderDetails(provider)}
          >
            <img
              className="accordion__item-img"
              src={provider?.info?.["x-logo"].url}
              alt={provider?.info?.title}
            />
            <span>{provider?.info?.title}</span>
          </div>
        ))}
    </div>
  </div>
);

export default Accordion;
