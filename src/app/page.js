export default async function Home() {

 const res = await fetch(`${process.env.NODE_ENV === 'production' ? 'https://grapes-mauve.vercel.app' : 'http://localhost:3000'}/api/sheet`, {
  cache: "no-store",
});


  const { data } = await res.json();

  return (
    <main style={{ padding: 20 }}>
      <h1>Список ссилок на сорта винограду</h1>
      { process.env?.VERCEL_URL && <p>Deployed on Vercel: {process.env.VERCEL_URL}</p>  }
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
