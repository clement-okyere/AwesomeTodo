import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";


type IconProp = {
    className?: string;
    icon: IconDefinition;
    iconSize?: SizeProp
}


const Icon = ({ className,
                 icon,
               iconSize = "1x" }: IconProp) =>
(
    <span className={className}>
        <FontAwesomeIcon icon={icon} size={iconSize}/>
    </span>
);
  
export default Icon;
