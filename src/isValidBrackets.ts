export function isValidBrackets(text: string): boolean {
    const len = text.length;
    const stack: string[] = [];
    
    let stackLen = 0;

    for (let i = 0; i < len; i++) {
        const char = text[i];

        // 1. เช็กวงเล็บเปิด 
        if (char === '(' || char === '{' || char === '[') {
            stack[stackLen++] = char; // บันทึกค่าและเพิ่มขนาด Stack
        } 
        // 2. เช็กวงเล็บปิด
        else if (char === ')' || char === '}' || char === ']') {
            // ถ้าเจอวงเล็บปิด แต่ไม่มีวงเล็บเปิดเหลืออยู่เลย แปลว่าผิดทันที
            if (stackLen === 0) return false;
            
            // ดึงวงเล็บเปิดล่าสุดออกมา
            const lastOpen = stack[--stackLen];
            
            // เช็กคู่แบบรวดเร็วด้วยเงื่อนไขสั้นๆ
            if (
                (char === ')' && lastOpen !== '(') ||
                (char === '}' && lastOpen !== '{') ||
                (char === ']' && lastOpen !== '[')
            ) {
                return false;
            }
        }
    }

    // ถ้า stackLen กลับมาเป็น 0 แสดงว่าจับคู่ครบถ้วน
    return stackLen === 0;
}
