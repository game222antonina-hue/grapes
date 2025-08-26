export default async function Home() {
  // Для внутренних API Next.js можно использовать относительный путь
  const res = await fetch("/api/sheet", { cache: "no-store" });
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
