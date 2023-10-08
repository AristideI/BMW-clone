export default function Footer() {
  return (
    <article className="w-full bg-gray-900 text-gray-400 py-16 px-20 flex justify-between">
      <section className="w-2/5 flex flex-col gap-12">
        <p>Sign up to the newsletter here</p>
        <button className="flex items-center font-bold text-xl w-fit bg-slate-500 px-4 py-2">
          <img className="w-10" src="/images/message.png" alt="button" />
          <p className="text-white">STAY UP TO DATE</p>
        </button>
        <section className="flex justify-between items-start flex-wrap gap-8">
          <div className="flex items-center w-1/5 gap-2 font-bold">
            <img className="w-4" src="/images/facebook.png" alt="" />
            <p>Facebook</p>
          </div>
          <div className="flex items-center w-1/5 gap-2 font-bold">
            <img className="w-4" src="/images/twitter.png" alt="" />
            <p>Twitter</p>
          </div>
          <div className="flex items-center w-1/5 gap-2 font-bold">
            <img className="w-4" src="/images/youtube.png" alt="" />
            <p>Youtube</p>
          </div>
          <div className="flex items-center w-1/5 gap-2 font-bold">
            <img className="w-4" src="/images/instagram.png" alt="" />
            <p>Instagram</p>
          </div>
          <div className="flex items-center w-1/5 gap-2 font-bold">
            <img className="w-4" src="/images/pinterest.png" alt="" />
            <p>Pinterest</p>
          </div>
          <div className="flex items-center w-1/5 gap-2 font-bold">
            <img className="w-4" src="/images/tiktok.png" alt="" />
            <p>TikTok</p>
          </div>
          <div className="flex items-center w-1/5 gap-2 font-bold">
            <img className="w-4" src="/images/spotify.png" alt="" />
            <p>Spotify</p>
          </div>
          <div className="flex items-center w-1/5"></div>
          <div className="flex items-center w-1/5"></div>
        </section>
      </section>
      <section className="flex flex-col font-medium text-lg gap-4">
        <p className="hover:underline cursor-pointer">
          BMW Motorrad Motorsport
        </p>
        <p className="hover:underline cursor-pointer">BMW Automotive</p>
        <p className="hover:underline cursor-pointer">MINI</p>
        <p className="hover:underline cursor-pointer">BMW Group</p>
        <p className="hover:underline cursor-pointer">
          BMW Motorrad Authorities
        </p>
        <p className="hover:underline cursor-pointer">BMW Museum</p>
      </section>
      <section className="flex flex-col font-medium text-lg gap-4">
        <p className="hover:underline cursor-pointer">Cookies</p>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
        <p className="hover:underline cursor-pointer">Imprint</p>
        <p className="hover:underline cursor-pointer">Terms and Conditions</p>
      </section>
      <section></section>
    </article>
  );
}
