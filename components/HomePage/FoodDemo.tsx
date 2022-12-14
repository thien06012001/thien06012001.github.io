import React from "react";
import Food1 from "../../public/assets/Food1.png";
import Food2 from "../../public/assets/Food2.png";
import Food3 from "../../public/assets/Food3.png";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import styles from "../../styles/ViewMore.module.css";
type Props = {};

function FoodDemo({}: Props) {
  const router = useRouter();
  return (
    <div>
      <div
        className="uppercase tracking-[2px] text-[#FB9333] font-semibold text-2xl text-center mt-[80px]"
      >
        OUR FEATURE MENU
      </div>
      <div
        className="uppercase tracking-[2px] text-[#FB9333] font-semibold text-2xl text-center mt-[25px]"
      >
        <p className="text-[#585858]">
          ENJOY THE BEST MENU AND GET <br/>
          <span className="text-[#FB9333]">DISCOUNTS</span> AVAILABLE
        </p>
      </div>
      <div className="flex flex-row mt-[30px]">
        <div className="mx-auto">
          <Image src={Food1} className="w-[380px] h-[450px]" alt={""} />
          <div className="mt-[-120px] text-left ml-[32px] flex flex-col">
            <p className="text-white text-xl font-semibold">Salad Yummy Red</p>
            <div className="mt-[5px]">
              <p className="text-white text-3xl font-extrabold">$3.99</p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <Image src={Food2} className="w-[380px] h-[450px]" alt={""} />
          <div className="mt-[-120px] text-left ml-[32px] flex flex-col">
            <p className="text-white text-xl font-semibold">
              Salad Yummy White
            </p>
            <div className="mt-[5px]">
              <p className="text-white text-3xl font-extrabold">$2.99</p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <Image src={Food3} className="w-[380px] h-[450px]" alt={""} />
          <div className="mt-[-120px] text-left ml-[32px] flex flex-col">
            <p className="text-white text-xl font-semibold">
              Salad Yummy Mix 2
            </p>
            <div className="mt-[5px]">
              <p className="text-white text-3xl font-extrabold">$5.49</p>
            </div>
            <button
              onClick={() => router.push("/Category/All/AllCategory")}
              className={styles.button}
            >
              <span className="my-auto">View more</span>{" "}
              <ArrowRightIcon className="my-auto w-10 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDemo;
