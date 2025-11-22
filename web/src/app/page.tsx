export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-100">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          ?????? ??
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          ??? ???? ???? ???? ???????? Next.js ?Tailwind CSS. ?? ?????? ????
          ??????? ?? ????? ?? ?? ?????? ??? ??????.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black px-5 py-3 text-white hover:opacity-90 transition"
          >
            ????? ??? Next.js
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gray-200 px-5 py-3 text-gray-900 hover:bg-gray-300 transition"
          >
            ????? ??? Tailwind
          </a>
        </div>
      </section>
    </main>
  );
}
