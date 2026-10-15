import { isValidBrackets } from './isValidBrackets';
import { naturalSort } from './naturalSort'; 
import { autocomplete } from './autocomplete';
import { intToRoman, romanToInt } from './romanConverter'; 
import { sortDigitDescending } from './sortDigitDescending';
import { tribonacci } from './tribonacci';

// ทดสอบข้อ 1
console.log("=========================================");
console.log("🔥 ผลการรันฟังก์ชัน isValidBrackets 🔥");
console.log("=========================================");
console.log("Case 1 (Code string):", isValidBrackets("function hello() { const arr = []; }"));
console.log("Case 2 (Deep brackets):", isValidBrackets("(((((((((())))))))))"));
console.log("Case 3 (Invalid open):", isValidBrackets("(()"));
console.log("Case 4 (Wrong match):", isValidBrackets("([)]"));

// ทดสอบข้อ 2
console.log("\n=========================================");
console.log("🔥 ผลการรันฟังก์ชัน naturalSort (ข้อ 2) 🔥");
console.log("=========================================");

const data1 = ["TH19", "SG20", "TH2"];
console.log("Input 1 :", data1);
console.log("Output 1:", naturalSort(data1)); 
// ผลลัพธ์: [ 'SG20', 'TH2', 'TH19' ]

const data2 = ["TH10", "TH3Netflix", "TH1", "TH7"];
console.log("Input 2 :", data2);
console.log("Output 2:", naturalSort(data2)); 
ผลลัพธ์: [ 'TH1', 'TH3Netflix', 'TH7', 'TH10' ]

// ทดสอบข้อ 3
console.log("\n==================================================");
console.log("🔥 [ข้อ 3] ผลการรันฟังก์ชัน autocomplete 🔥");
console.log("==================================================");

const searchWord = "th";
const itemsList = ["Mother", "Think", "Worthy", "Apple", "Android"];
const max = 2;

console.log(`Search: "${searchWord}" | Max Result: ${max}`);
console.log("Items :", itemsList);
console.log("Result:", autocomplete(searchWord, itemsList, max)); 
console.log("==================================================");

// ทดสอบ 4
console.log("\n==================================================");
console.log("🔥 [ข้อ 4] ผลการรันฟังก์ชัน Roman Converter 🔥");
console.log("==================================================");

// ทดสอบจาก Integer เป็น Roman
console.log("--- Convert Integer to Roman ---");
console.log("1989 =>", intToRoman(1989)); // MCMLXXXIX
console.log("2000 =>", intToRoman(2000)); // MM
console.log("68   =>", intToRoman(68));   // LXVIII
console.log("109  =>", intToRoman(109));  // CIX

// ทดสอบจาก Roman เป็น Integer
console.log("\n--- Convert Roman to Integer ---");
console.log("MCMLXXXIX =>", romanToInt("MCMLXXXIX")); // 1989
console.log("MM        =>", romanToInt("MM"));        // 2000
console.log("LXVIII    =>", romanToInt("LXVIII"));    // 68
console.log("CIX       =>", romanToInt("CIX"));       // 109
console.log("==================================================");

// ทดสอบข้อ 5
console.log("\n==================================================");
console.log("🔥 [ข้อ 5] ผลการรันฟังก์ชัน sortDigitDescending 🔥");
console.log("==================================================");

console.log("3008 =>", sortDigitDescending(3008)); // 8300
console.log("1989 =>", sortDigitDescending(1989)); // 9981
console.log("2679 =>", sortDigitDescending(2679)); // 9762
console.log("9163 =>", sortDigitDescending(9163)); // 9631
console.log("==================================================");

// ทดสอบข้อ 6
console.log("\n==================================================");
console.log("🔥 [ข้อ 6] ผลการรันฟังก์ชัน tribonacci 🔥");
console.log("==================================================");

console.log("f([1,3,5], 5)    =>", tribonacci([1, 3, 5], 5));    // [1, 3, 5, 9, 17]
console.log("f([2,2,2], 3)    =>", tribonacci([2, 2, 2], 3));    // [2, 2, 2]
console.log("f([10,10,10], 4) =>", tribonacci([10, 10, 10], 4)); // [10, 10, 10, 30]

// ทดสอบ Edge Cases ตามเงื่อนไขโจทย์เพิ่มเติม
console.log("f([], 3)         =>", tribonacci([], 3));         // [0, 0, 0]
console.log("f([1], 4)        =>", tribonacci([1], 4));        // [1, 0, 0, 1]
console.log("==================================================");