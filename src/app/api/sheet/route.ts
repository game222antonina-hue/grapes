import { NextResponse } from "next/server";

const SHEET_ID = "1X_FcYWu_WNEFBh18_Q8B82lkHk7ZX0jfsq24W2_OJ2A";

export async function GET() {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Ошибка загрузки CSV");

    const text = await res.text();
    const rows = text.split("\n").map((row) => row.split(","));
    const [headers, ...dataRows] = rows;

    const data = dataRows.map((row) => ({
      text: row[0] || "",
      link: row[1] || "",
    }));

    return NextResponse.json({ success: true, data });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
