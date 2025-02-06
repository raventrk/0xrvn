import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Image
            className="rounded-xl"
            src="/avatar.jpg"
            alt="Next.js logo"
            width={160}
            height={180}
            priority
          />
          <div className="text-center sm:text-left">
            <section className="flex flex-col ">
              <h1 className="font-serif flex text-4xl">Raven</h1>
              <p className="text-neutral-400 font-medium font-serif italic">
                Developer / Security Researcher
              </p>
              <div className="flex gap-4 mt-5 items-center sm:flex-row">
                <a className="text-3xl" href="https://github.com/raventrk" target="_blank">
                 <FaGithub />
                </a>
                <a className="text-3xl" href="https://discord.com/channels/@me/1289632256545001574" target="_blank">
                   <FaDiscord />
                </a>
                <a className="text-3xl" href="https://t.me/raventrk" target="_blank">
                  <FaTelegramPlane />
                </a>
                <a className="text-3xl" href="https://x.com/raventrk" target="_blank">
                  <FaXTwitter />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
