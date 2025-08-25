import { NextResponse } from "next/server";

const SHEET_ID = "В1X_FcYWu_WNEFBh18_Q8B82lkHk7ZX0jfsq24W2_OJ2A";
const RANGE = "A:B"; // диапазон (A - текст, B - ссылка)

export async function GET() {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${process.env.GOOGLE_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ошибка запроса к Google Sheets API");

    const json = await res.json();

    const [headers, ...rows] = json.values;

    const data = rows.map((row) => ({
      text: row[0] || "",
      link: row[1] || "",
    }));

    return NextResponse.json({ success: true, data });
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}