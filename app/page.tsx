export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        SaaS Boilerplate
      </h1>
      
      <p className="text-xl md:text-2xl mb-12 text-center text-gray-300 max-w-3xl">
        قالب جاهز لبناء منتج SaaS بسرعة: تسجيل دخول، دفعات، لوحة تحكم، وتصميم أنيق.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition transform hover:scale-105">
          ابدأ الآن – $79 مرة واحدة
        </button>
        
        <button className="border border-gray-500 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-lg transition">
          شاهد العرض التجريبي
        </button>
      </div>

      <p className="mt-16 text-sm text-gray-500">
        مبني على Next.js 15 • TypeScript • Tailwind CSS
      </p>
    </div>
  );
}