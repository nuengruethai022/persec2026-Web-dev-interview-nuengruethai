import { isValidBrackets } from '../src/isValidBrackets';

describe('ทดสอบฟังก์ชัน isValidBrackets', () => {
    describe('กรณีวงเล็บถูกต้อง (Valid Cases)', () => {
        it('ควรคืนค่า true เมื่อส่ง String ว่างเปล่า', () => {
            expect(isValidBrackets("")).toBe(true);
        });
        it('ควรคืนค่า true เมื่อมีวงเล็บคู่เดียว', () => {
            expect(isValidBrackets("()")).toBe(true);
            expect(isValidBrackets("{}")).toBe(true);
            expect(isValidBrackets("[]")).toBe(true);
        });
        it('ควรคืนค่า true เมื่อมีวงเล็บผสมกับโค้ดทั่วไป', () => {
            expect(isValidBrackets("function hello() { const arr = []; }")).toBe(true);
        });
    });

    describe('กรณีวงเล็บไม่ถูกต้อง (Invalid Cases)', () => {
        it('ควรคืนค่า false เมื่อมีวงเล็บเปิดแต่ไม่มีวงเล็บปิด', () => {
            expect(isValidBrackets("(")).toBe(false);
        });
        it('ควรคืนค่า false เมื่อลำดับการปิดสลับคู่กัน', () => {
            expect(isValidBrackets("([)]")).toBe(false);
        });
    });
});
