export function tribonacci(signature: number[], n: number): number[] {
    // ถ้าต้องการจำนวนผลลัพธ์เป็น 0 ตัว (n === 0) ให้คืนค่าอาร์เรย์ว่างทันที
    if (n === 0) return [];

    // สร้างอาร์เรย์สำหรับคำนวณ โดยเริ่มดึงค่าจาก signature ออกมา
    const result = [...signature];

    // ป้องกันกรณีที่ signature สั้นกว่า 3 ตัว ให้เติม 0 ต่อท้ายให้ครบ 3 ตัวเพื่อเป็นฐานในการบวก
    while (result.length < 3) {
        result.push(0);
    }

    // วนลูปคำนวณหาค่า Tribonacci ตัวถัดไปตามกฎ (บวก 3 ตัวก่อนหน้า)
    // เริ่มวิ่งลูปตั้งแต่ตำแหน่งที่ 3 เป็นต้นไปจนถึงตำแหน่งที่ n
    for (let i = 3; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2] + result[i - 3];
    }

    // ตัดอาร์เรย์ผลลัพธ์ให้มีความยาวเท่ากับ n ตามที่ต้องการจริง ๆ
    return result.slice(0, n);
}
