export default async function Home() {
  // Определяем базовый URL для fetch на сервере
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/sheet`, { cache: "no-store" });
  const { data } = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>Список ссилок на сорта винограду</h1>
      <ul>
        {data?.map((item, i) => (
          <li key={i}>
            <a
              href={(item.link || "").replace(/^"|"$/g, "")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text.replace(/^"|"$/g, "")}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
