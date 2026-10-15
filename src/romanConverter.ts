// ตารางจับคู่สัญลักษณ์โรมันและค่าตัวเลขฐานสิบ เรียงจากมากไปน้อย (รวมกฎการหักลบ)
const ROMAN_MAPPING: { num: number; symbol: string }[] = [
    { num: 1000, symbol: 'M' },
    { num: 900, symbol: 'CM' },
    { num: 500, symbol: 'D' },
    { num: 400, symbol: 'CD' },
    { num: 100, symbol: 'C' },
    { num: 90, symbol: 'XC' },
    { num: 50, symbol: 'L' },
    { num: 40, symbol: 'XL' },
    { num: 10, symbol: 'X' },
    { num: 9, symbol: 'IX' },
    { num: 5, symbol: 'V' },
    { num: 4, symbol: 'IV' },
    { num: 1, symbol: 'I' }
];

// Map สำหรับใช้ค้นหาค่าจากอักขระโรมันเดี่ยว ๆ (ใช้ในฟังก์ชันแปลงกลับเป็นสิทธิ์จดจำด่วน)
const SINGLE_ROMAN_MAP: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

/**
 * 1. ฟังก์ชันแปลงจากตัวเลข (Integer) -> เลขโรมัน (String)
 */
export function intToRoman(num: number): string {
    if (num <= 0) return "";
    
    let result = "";
    let remaining = num;

    // ไล่หักลบทีละค่าจากมากไปน้อย
    for (const mapping of ROMAN_MAPPING) {
        while (remaining >= mapping.num) {
            result += mapping.symbol;
            remaining -= mapping.num;
        }
    }
    return result;
}

/**
 * 2. ฟังก์ชันแปลงจากเลขโรมัน (String) -> ตัวเลข (Integer)
 */
export function romanToInt(roman: string): number {
    if (!roman) return 0;

    let total = 0;
    const len = roman.length;

    for (let i = 0; i < len; i++) {
        const currentVal = SINGLE_ROMAN_MAP[roman[i]] || 0;
        const nextVal = i + 1 < len ? SINGLE_ROMAN_MAP[roman[i + 1]] || 0 : 0;

        // กฎพื้นฐาน: ถ้าตัวถัดไปมีค่ามากกว่า ตัวปัจจุบันจะต้องถูกนำไปหักลบออก (เช่น IV -> -1 + 5 = 4)
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    return total;
}
