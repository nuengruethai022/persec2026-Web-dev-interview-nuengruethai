import { intToRoman, romanToInt } from '../src/romanConverter';

describe('ทดสอบฟังก์ชัน Roman Converter (ข้อ 4)', () => {
    
    describe('ทดสอบฟังก์ชัน intToRoman', () => {
        it('ควรแปลงตัวเลขตัวอย่างตามโจทย์ได้ถูกต้อง', () => {
            expect(intToRoman(1989)).toBe("MCMLXXXIX");
            expect(intToRoman(2000)).toBe("MM");
            expect(intToRoman(68)).toBe("LXVIII");
            expect(intToRoman(109)).toBe("CIX");
        });
    });

    describe('ทดสอบฟังก์ชัน romanToInt', () => {
        it('ควรแปลงสตริงเลขโรมันตามโจทย์กลับเป็นตัวเลขได้ถูกต้อง', () => {
            expect(romanToInt("MCMLXXXIX")).toBe(1989);
            expect(romanToInt("MM")).toBe(2000);
            expect(romanToInt("LXVIII")).toBe(68);
            expect(romanToInt("CIX")).toBe(109);
        });
    });

    describe('ทดสอบความสอดคล้องกัน (Bi-directional Consistency)', () => {
        it('ค่าที่ถูกแปลงไปควรแปลงกลับมาได้เท่าเดิมเสมอ', () => {
            const testNumbers = [1, 4, 9, 49, 68, 109, 399, 500, 900, 1989, 2000, 3999];
            
            for (const num of testNumbers) {
                const roman = intToRoman(num);
                expect(romanToInt(roman)).toBe(num);
            }
        });
    });
});
