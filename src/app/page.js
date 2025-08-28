export default async function Home() {

 const res = await fetch(`${process.env.NODE_ENV === 'production' ? 'https://grapes-mauve.vercel.app' : 'http://localhost:3000'}/api/sheet`, {
  cache: "no-store",
});


  const { data } = await res.json();

  return (
    <main style={{ padding: 20, minHeight: "100svh", position: 'relitive' }}>
      <h1>Список ссилок на сорта винограду</h1>
      <ul style={{ padding: '20px' }}>
        {data?.map((item, i) => (
          <li key={i} style={{padding: '6px 0'}}>
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
      <p style={{position: 'absolute', bottom: "20px", left: '20px'}}>made by Tar Anton</p>
    </main>
  );
}
