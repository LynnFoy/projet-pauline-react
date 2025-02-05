import arcade from "../../assets/images/arcade.svg";
import advanced from "../../assets/images/advanced.svg";
import pro from "../../assets/images/pro.svg";

export const step2Data = [
  {
    id: 1,
    title: "Arcade",
    icon: arcade,
    price: {
      monthly: {
        monthlyPrice: 9,
        discount: "",
      },
      yearly: {
        yearlyPrice: 90,
        discount: "2 months free",
      },
    },
  },
  {
    id: 2,
    title: "Advanced",
    icon: advanced,
    price: {
      monthly: {
        monthlyPrice: 12,
        discount: "",
      },
      yearly: {
        yearlyPrice: 120,
        discount: "2 months free",
      },
    },
  },
  {
    id: 3,
    title: "Pro",
    icon: pro,
    price: {
      monthly: {
        monthlyPrice: 15,
        discount: "",
      },
      yearly: {
        yearlyPrice: 150,
        discount: "2 months free",
      },
    },
  },
];
