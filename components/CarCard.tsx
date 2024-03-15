import React from 'react';
import {CarProps} from "@/types";
import {calculateCarRent} from "@/utils";
import Image from "next/image";

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car}: CarCardProps) => {

    const {city_mpg, year, make, model, transmission, drive} = car

    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className={"car-card group"}>
            <div className={"car-card__content"}>
                <h2 className={"car-card__content-title"}>
                    {make} {model}
                </h2>
            </div>

            <p className={"flex mt-6 text-[32px] font-extrabold"}>
                <span className={"self-start text-[14px] font-semibold"}>
                    $
                </span>
                {carRent}
                <span className={"self-end text-[14px] font-medium"}>
                    /day
                </span>
            </p>

            <div className={"relative w-full h-40 object-contain my-3"}>
                <Image
                    src={"/hero.png"}
                    alt={"Car Model"}
                    fill priority
                    className={"object-contain"}
                />
            </div>
        </div>
    );
};

export default CarCard;