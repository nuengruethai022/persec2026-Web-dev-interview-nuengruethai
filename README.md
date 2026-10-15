# TypeScript Logic & Algorithm Assignment

โปรเจ็กต์นี้พัฒนาขึ้นเพื่อทดสอบทักษะในตำแหน่ง **Web Developer** โดยประกอบไปด้วยการแก้ไขโจทย์ปัญหา Logic และ Algorithm รวมทั้งหมด 6 ข้อ พัฒนาบนโครงสร้าง **Pure TypeScript** 100% ควบคุม Code Quality ด้วยโหมด Strict และการเขียนระบบทดสอบอัตโนมัติ (Unit Test) ครอบคลุมทุกเคส

## 🛠️ Tech Stack & Tools
- **Language:** TypeScript (v5.x)
- **Runtime Execution:** `tsx` (TypeScript Execute - รันไฟล์ TS ตรงๆ ได้อย่างรวดเร็ว)
- **Testing Framework:** Jest ร่วมกับ `ts-jest`

---

## 🚀 วิธีการติดตั้งและรันโปรเจ็กต์ (Getting Started)

เพื่อให้ผู้ตรวจข้อสอบสามารถรันตรวจสอบผลลัพธ์ได้อย่างสะดวกรวดเร็วที่สุด สามารถทำได้ 2 รูปแบบผ่าน Terminal:

### 1. ติดตั้ง Dependencies ก่อนเริ่มใช้งาน
```bash
npm install
```

### 2. รันดูผลลัพธ์การทำงานด่วน (Quick Run)
คำสั่งนี้จะทำการประมวลผลโค้ดทั้ง 6 ข้อ และพ่นผลลัพธ์ออกทาง Console หน้าจอทันทีโดยจัดฟอร์แมตให้อ่านง่าย
```bash
npm start
```

### 3. รันระบบทดสอบอัตโนมัติ (Run Unit Tests)
คำสั่งนี้จะเรียกใช้ Jest เพื่อรันชุดทดสอบที่เขียนดักกรณีปกติและกรณีขอบเขตข้อมูล (Edge Cases) ของทุกฟังก์ชัน
```bash
npm test
```

---

## 📂 โครงสร้างภายในโปรเจ็กต์ (Directory Structure)

```text
Persec2026/
├── src/
│   ├── isValidBracketsFast.ts  # [ข้อ 1] ฟังก์ชันเช็กความถูกต้องของวงเล็บ (High Performance)
│   ├── naturalSort.ts          # [ข้อ 2] ฟังก์ชันเรียงลำดับสตริงแบบธรรมชาติ (Natural Sort)
│   ├── autocomplete.ts         # [ข้อ 3] ฟังก์ชันค้นหาคำพร้อมจัดอันดับความสำคัญ (Relevance Weight)
│   ├── romanConverter.ts       # [ข้อ 4] ฟังก์ชันแปลงเลขฐานสิบและเลขโรมันแบบไป-กลับ
│   ├── sortDigitDescending.ts  # [ข้อ 5] ฟังก์ชันจัดเรียงหลักตัวเลขจากมากไปน้อย
│   ├── tribonacci.ts           # [ข้อ 6] ฟังก์ชันคำนวณลำดับ Tribonacci ซีรีส์ (ดักกรณีอาเรย์สั้น)
│   └── index.ts                # ไฟล์หลักรันคอนโซลด่วนสำหรับผู้ตรวจงาน
├── __tests__/
│   ├── isValidBrackets.test.ts # ชุดทดสอบความถูกต้องของวงเล็บ
│   ├── naturalSort.test.ts     # ชุดทดสอบการเรียงสตริงแบบธรรมชาติ
│   ├── autocomplete.test.ts    # ชุดทดสอบระบบ Autocomplete
│   ├── romanConverter.test.ts  # ชุดทดสอบความเสถียรระบบแปลงเลขโรมัน (Bi-directional)
│   ├── sortDigitDescending.test.ts # ชุดทดสอบการจัดเรียงหลักตัวเลข
│   └── tribonacci.test.ts      # ชุดทดสอบการคิดลำดับ Tribonacci ครอบคลุม Edge Case อาเรย์ขนาดเล็ก
├── package.json                # ข้อมูลและคำสั่งสคริปต์ของโปรเจ็กต์
├── tsconfig.json               # คอนฟิกควบคมความเข้มงวดของ TypeScript 
├── jest.config.js              # คอนฟิกการทำงานของตัวทดสอบร่วมกับ ts-jest
└── README.md                   # เอกสารฉบับนี้
```

---
จัดทำโดย หนึ่งฤทัย  เอ้งฉ้วน
อีเมล: nuengruethai.angchuan@gmail.com | เบอร์โทรศัพท์: 0909937954
