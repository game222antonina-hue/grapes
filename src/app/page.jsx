export default async function Home() {
  const res = await fetch("http://https://grapes-iota.vercel.app/api/sheet", { cache: "no-store" });
  console.log("res", res);
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
