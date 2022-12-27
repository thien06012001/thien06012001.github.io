import React from "react";
import { NormalWeight, UnderWeight, OverWeight, Obese } from "../../typings";
import NormalWeights from "../NormalWeight";
import UnderWeights from "../UnderWeight";
import OverWeights from "../OverWeight";
import Obeses from "../Obese";
type Props = {
  normalweights: NormalWeight[];
  underweights: UnderWeight[];
  overweights: OverWeight[];
  obeses: Obese[];
};

function ProductFeed_Drinks({
  normalweights,
  underweights,
  overweights,
  obeses,
}: Props) {
  return (
    <div className="grid grid-cols-3 m-auto relative">
      {normalweights.map((normalweight) =>
        normalweight.categories === "Drinks" ? (
          <NormalWeights key={normalweight._id} normalweight={normalweight} />
        ) : (
          <></>
        )
      )}
      {underweights.map((underweight) =>
        underweight.categories === "Drinks" ? (
          <UnderWeights key={underweight._id} underweight={underweight} />
        ) : (
          <></>
        )
      )}
      {overweights.map((overweight) =>
        overweight.categories === "Drinks" ? (
          <OverWeights key={overweight._id} overweight={overweight} />
        ) : (
          <></>
        )
      )}

      {obeses.map((obese) =>
        obese.categories === "Drinks" ? (
          <Obeses key={obese._id} obese={obese} />
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default ProductFeed_Drinks;
