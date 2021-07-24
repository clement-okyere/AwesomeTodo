import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";


type IconProp = {
    className?: string;
    icon: IconDefinition;
}


const Icon = ({className, icon}: IconProp) => (
    <span className={className}>
        <span>Hello</span>
        <FontAwesomeIcon icon={icon} />
    </span>
);
  
export default Icon;
