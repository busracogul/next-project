import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 mx-10 mt-12">
        JSONPlaceholder API ile Next.js Blog
      </h1>

      <p className="text-lg text-gray-700 max-w-xl mb-8 mx-10">
        Bu projede <strong>JSONPlaceholder</strong>&apos;dan post verileri çekilip
        dinamik route yapısı ile <code>/posts</code> ve <code>/posts/[id]</code>
        sayfaları oluşturulmuştur. Aşağıdaki bağlantıya tıklayarak tüm postlara
        ulaşabilirsiniz.
      </p>

      <Link
        href="/posts"
        className="mt-12 underline mx-10 text-lg text-blue-500 "
      >
        postlara git
      </Link>
    </>
  );
}
