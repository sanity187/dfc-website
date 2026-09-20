export type JumpTier = "tandem-10k" | "tandem-vip" | "aff-solo";
export type PaymentType = "prepaid" | "deposit";
export type MediaPackage = "none" | "single" | "combo";

export interface BookingState {
  tier: JumpTier;
  jumpers: number;
  paymentType: PaymentType;
  heavyJumpers: number;
  ageConfirmed: boolean;
  date: string;
  timeSlot: string;
  mediaPackage: MediaPackage;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    occasion: string;
    notes: string;
  };
}

export interface BookingPriceBreakdown {
  basePerJumper: number;
  baseTotal: number;
  vipUpgradeTotal: number;
  heavyFeeTotal: number;
  bookingFeeTotal: number;
  mediaTotal: number;
  savingsTotal: number;
  totalAmount: number;
  dueToday: number;
  dueAtDropzone: number;
  isWednesday: boolean;
  isWeekend: boolean;
}

export function getDayPricing(dateStr: string, paymentType: PaymentType, tier: JumpTier) {
  if (tier === "aff-solo") {
    return {
      price: 399,
      badge: "AFF Ground School",
      isWednesday: false,
      isWeekend: false,
    };
  }

  if (!dateStr) {
    return {
      price: paymentType === "prepaid" ? 219 : 249,
      badge: "From $219",
      isWednesday: false,
      isWeekend: false,
    };
  }

  // Parse YYYY-MM-DD
  const [year, month, day] = dateStr.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  const dayOfWeek = dateObj.getDay(); // 0 = Sun, 3 = Wed, 6 = Sat

  const isWednesday = dayOfWeek === 3;
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  let basePrice = 219;
  if (isWednesday) {
    basePrice = paymentType === "prepaid" ? 199 : 209;
  } else if (isWeekend) {
    basePrice = paymentType === "prepaid" ? 239 : 269;
  } else {
    basePrice = paymentType === "prepaid" ? 219 : 249;
  }

  if (tier === "tandem-vip") {
    basePrice += 30;
  }

  return {
    price: basePrice,
    badge: isWednesday ? "Wed Special" : isWeekend ? "Weekend" : "Weekday",
    isWednesday,
    isWeekend,
  };
}

export function calculateBookingPrices(state: BookingState): BookingPriceBreakdown {
  const { tier, jumpers, paymentType, heavyJumpers, date, mediaPackage } = state;

  const dayInfo = getDayPricing(date, paymentType, tier);
  const basePerJumper = dayInfo.price;
  const baseTotal = basePerJumper * jumpers;

  const vipUpgradeTotal = tier === "tandem-vip" ? 30 * jumpers : 0;
  const heavyFeeTotal = 35 * Math.min(heavyJumpers, jumpers);
  const bookingFeeTotal = 5 * jumpers;

  let mediaTotal = 0;
  if (mediaPackage === "single") mediaTotal = 89 * jumpers;
  if (mediaPackage === "combo") mediaTotal = 120 * jumpers;

  // Savings if prepaid vs deposit
  const savingsPerJumper = dayInfo.isWednesday ? 10 : dayInfo.isWeekend ? 30 : 30;
  const savingsTotal = paymentType === "prepaid" ? savingsPerJumper * jumpers : 0;

  const totalAmount = baseTotal + heavyFeeTotal + bookingFeeTotal + mediaTotal;

  let dueToday = 0;
  if (paymentType === "prepaid") {
    dueToday = totalAmount;
  } else {
    // $50 deposit per jumper + $5 booking fee per jumper
    dueToday = (50 + 5) * jumpers;
  }

  const dueAtDropzone = Math.max(0, totalAmount - dueToday);

  return {
    basePerJumper,
    baseTotal,
    vipUpgradeTotal,
    heavyFeeTotal,
    bookingFeeTotal,
    mediaTotal,
    savingsTotal,
    totalAmount,
    dueToday,
    dueAtDropzone,
    isWednesday: dayInfo.isWednesday,
    isWeekend: dayInfo.isWeekend,
  };
}

export function createDefaultBookingState(tier: JumpTier = "tandem-10k"): BookingState {
  return {
    tier,
    jumpers: 1,
    paymentType: "prepaid",
    heavyJumpers: 0,
    ageConfirmed: false,
    date: "",
    timeSlot: "11:30",
    mediaPackage: "combo",
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      occasion: "",
      notes: "",
    },
  };
}
