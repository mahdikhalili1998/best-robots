import Binance from "@/components/icon/Binance";
import Dash from "@/components/icon/Dash";
import Etherium from "@/components/icon/Etherium";
import NoTick from "@/components/icon/NoTick";
import Solana from "@/components/icon/Solana";
import Tether from "@/components/icon/Tether";
import Thron from "@/components/icon/Thron";

export const product = [
  { title: "حداکثر موجودی اکانت", value: "1000", else: "دلار" },
  { title: "حداکثر حساب فعال", value: "1", else: "حساب" },
  { title: "تغییر شماره حساب", value: "", else: "نامحدود" },
  { title: "مدت زمان", value: "30", else: "روز" },
];

export const product1 = [
  { title: "هزینه فعالسازی اولیه", value: "1", else: "دلار" },
  { title: "هزینه تمدید", value: "2", else: "دلار" },
  { title: "نوع پرداخت", value: "رمز ارز ", else: "" },
  { title: "% تخفیف", value: "1", else: "دلار" },
];

export const crypto = [
  {
    thick: <NoTick width={22} height={22} />,
    logo: <Tether width={24} height={24} color="currentColor" />,
    name: "تتر",
    id: 1,
  },
  {
    thick: <NoTick width={22} height={22} />,
    logo: <Thron width={24} height={24} color="currentColor" />,
    name: "ترون",
    id: 2,
  },
  {
    thick: <NoTick width={22} height={22} />,
    logo: <Etherium width={24} height={24} color="currentColor" />,
    name: "اتریم",
    id: 3,
  },
  {
    thick: <NoTick width={22} height={22} />,
    logo: <Solana width={24} height={24} color="currentColor" />,
    name: "سولانا",
    id: 4,
  },
  {
    thick: <NoTick width={22} height={22} />,
    logo: <Dash width={24} height={24} color="currentColor" />,
    name: "دش",
    id: 5,
  },
  {
    thick: <NoTick width={22} height={22} />,
    logo: <Binance width={24} height={24} color="currentColor" />,
    name: "بایننس",
    id: 6,
  },
];
