import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path
      d="M13.545 11.826c0 3.76-3.028 6.81-6.763 6.81-3.736 0-6.764-3.048-6.764-6.81 0-3.762 3.029-6.81 6.764-6.81 3.735 0 6.763 3.049 6.763 6.81zm7.42 0c0 3.54-1.514 6.41-3.382 6.41-1.867 0-3.381-2.87-3.381-6.41s1.514-6.41 3.381-6.41c1.868 0 3.382 2.87 3.382 6.41zm3.035 0c0 3.172-.533 5.743-1.19 5.743-.656 0-1.189-2.572-1.189-5.743 0-3.172.533-5.744 1.19-5.744.657 0 1.189 2.572 1.189 5.744z"
      fillRule="evenodd"
    />
  </Svg>
);

export default Icon;
