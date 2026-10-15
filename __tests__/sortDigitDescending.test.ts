import { sortDigitDescending } from '../src/sortDigitDescending';

describe('ทดสอบฟังก์ชัน sortDigitDescending (ข้อ 5)', () => {
    it('ควรเรียงลำดับหลักตัวเลขจากมากไปน้อยตามตัวอย่างโจทย์ได้ถูกต้อง', () => {
        expect(sortDigitDescending(3008)).toBe(8300);
        expect(sortDigitDescending(1989)).toBe(9981);
        expect(sortDigitDescending(2679)).toBe(9762);
        expect(sortDigitDescending(9163)).toBe(9631);
    });

    it('ควรทำงานได้ถูกต้องเมื่อส่งเลขหลักเดียว', () => {
        expect(sortDigitDescending(5)).toBe(5);
        expect(sortDigitDescending(0)).toBe(0);
    });
});
