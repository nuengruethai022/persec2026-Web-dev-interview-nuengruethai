export function sortDigitDescending(num: number): number {
    if (num < 0) return 0;

    // แปลงเลขเป็น String -> แตกเป็นอาร์เรย์ตัวอักษร -> เรียงลำดับจากมากไปน้อย -> รวมกลับเป็น String
    const sortedStr = String(num)
        .split('')
        .sort((a, b) => b.localeCompare(a)) // เรียงจากมากไปน้อย (เช่น '9' ไปหา '0')
        .join('');

    return Number(sortedStr);
}
