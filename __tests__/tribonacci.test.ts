import { tribonacci } from '../src/tribonacci';

describe('ทดสอบฟังก์ชัน tribonacci (ข้อ 6)', () => {
    it('ควรคำนวณและเรียงลำดับค่า Tribonacci ตามตัวอย่างโจทย์ได้อย่างถูกต้อง', () => {
        expect(tribonacci([1, 3, 5], 5)).toEqual([1, 3, 5, 9, 17]);
        expect(tribonacci([2, 2, 2], 3)).toEqual([2, 2, 2]);
        expect(tribonacci([10, 10, 10], 4)).toEqual([10, 10, 10, 30]);
    });

    it('ควรรับมือกับกรณีที่อาร์เรย์ค่าเริ่มต้นมีขนาดต่ำกว่า 3 ตัวได้ถูกต้อง (Edge Cases)', () => {
        expect(tribonacci([], 3)).toEqual([0, 0, 0]);
        expect(tribonacci([1], 4)).toEqual([1, 0, 0, 1]);
        expect(tribonacci([5, 2], 5)).toEqual([5, 2, 0, 7, 9]);
    });

    it('ควรคืนอาร์เรย์ว่างหากค่า n เป็น 0', () => {
        expect(tribonacci([1, 2, 3], 0)).toEqual([]);
    });

    it('ควรตัดตัวเลขคืนกลับตามจำนวน n หาก n น้อยกว่าจำนวนค่าเริ่มต้น', () => {
        expect(tribonacci([1, 3, 5], 2)).toEqual([1, 3]);
    });
});
