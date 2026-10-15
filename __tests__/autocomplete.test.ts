import { autocomplete } from '../src/autocomplete';

describe('ทดสอบฟังก์ชัน autocomplete (ข้อ 3)', () => {
    it('ควรคืนค่าตามโจทย์ตัวอย่างได้อย่างถูกต้อง (เรียงลำดับและตัดคำตาม maxResult)', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        expect(autocomplete("th", items, 2)).toEqual(["Think", "Mother"]);
    });

    it('ควรทำงานแบบไม่สนใจตัวพิมพ์เล็ก-ใหญ่ (Ignore Case)', () => {
        const items = ["mother", "THINK", "Worthy"];
        expect(autocomplete("Th", items, 3)).toEqual(["THINK", "mother", "Worthy"]);
    });

    it('ควรตัดตัวเลือกทิ้งไปเลยหากไม่มีคำค้นหาปนอยู่', () => {
        const items = ["Apple", "Android", "Banana"];
        expect(autocomplete("th", items, 3)).toEqual([]);
    });

    it('ควรคืนค่า Array ว่างหากค้นหาด้วย String ว่าง', () => {
        expect(autocomplete("", ["Apple"], 5)).toEqual([]);
    });
});
