export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/sheet`, { cache: "no-store" });
  const { data } = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>Список ссилок на сорта винограду</h1>
      <ul>
        {data?.map((item, i) => (
          <li key={i}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
