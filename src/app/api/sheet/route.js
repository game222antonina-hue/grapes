import { NextResponse } from "next/server";

const SHEET_ID = "1X_FcYWu_WNEFBh18_Q8B82lkHk7ZX0jfsq24W2_OJ2A";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

export async function GET() {
  try {
    const res = await fetch(CSV_URL);
    console.log("res", res);
    if (!res.ok) throw new Error("Ошибка запроса к Google Sheets CSV");

    const csv = await res.text();

    // Парсим CSV
    const rows = csv
      .trim()
      .split("\n")
      .map((row) => row.split(","));

    const [headers, ...dataRows] = rows;

    const data = dataRows.map((row) => ({
      text: row[0] || "",
      link: row[1] || "",
    }));

    return NextResponse.json({ success: true, data });
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
