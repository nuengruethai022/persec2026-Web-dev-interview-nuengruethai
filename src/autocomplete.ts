export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    if (!search) return [];
    const lowerSearch = search.toLowerCase();

    // กรองและคำนวณตำแหน่งที่คำค้นหาปรากฏในแต่ละข้อความ
    const matchedItems = items
        .map(item => {
            const lowerItem = item.toLowerCase();
            const index = lowerItem.indexOf(lowerSearch);
            return { item, index, length: lowerItem.length };
        })
        // เลือกเฉพาะข้อความที่มีคำค้นหาอยู่จริง (index ไม่เท่ากับ -1)
        .filter(matched => matched.index !== -1);

    // เรียงลำดับตามความสำคัญ (Priority Sorting)
    matchedItems.sort((a, b) => {
        // เงื่อนไขที่ 1: เรียงตามตำแหน่งที่เจอ (Index น้อยกว่า = มาก่อน เช่น 0 คือขึ้นต้นคำ)
        if (a.index !== b.index) {
            return a.index - b.index;
        }
        
        // เงื่อนไขเสริม (Optional สำหรับเกรด Senior): ถ้าตำแหน่งเท่ากัน ให้คำที่สั้นกว่ามาก่อน (ตรงใจผู้ใช้มากกว่า)
        return a.length - b.length;
    });

    // แปลงกลับเป็น Array string และตัดจำนวนตามผลลัพธ์ maxResult ที่กำหนด
    return matchedItems.map(matched => matched.item).slice(0, maxResult);
}
