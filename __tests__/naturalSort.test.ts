import { naturalSort } from '../src/naturalSort';

describe('ทดสอบฟังก์ชัน naturalSort (ข้อ 2)', () => {
    it('ควรเรียงลำดับข้อมูลตัวอย่างชุดที่ 1 ได้ถูกต้อง', () => {
        expect(naturalSort(["TH19", "SG20", "TH2"])).toEqual(["SG20", "TH2", "TH19"]);
    });

    it('ควรเรียงลำดับข้อมูลตัวอย่างชุดที่ 2 ได้ถูกต้อง', () => {
        expect(naturalSort(["TH10", "TH3Netflix", "TH1", "TH7"])).toEqual(["TH1", "TH3Netflix", "TH7", "TH10"]);
    });
});
