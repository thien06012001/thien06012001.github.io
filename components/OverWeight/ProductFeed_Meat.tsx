import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../typings";
import NormalWeights from "../NormalWeight";
import UnderWeights from "../UnderWeight";
import OverWeights from "../OverWeight";
import Obeses from "../Obese";
type Props = {
  overweights: OverWeight[];
};

function ProductFeed_Meat({ overweights }: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {overweights.map((overweight) =>
        overweight.categories === "Meat" ? (
          <OverWeights key={overweight._id} overweight={overweight} />
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default ProductFeed_Meat;
