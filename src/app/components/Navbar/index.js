import Image from "next/image";


export default function Navbar() {
  return (
    <>
      <nav>
        <div className="py-6 text-center flex justify-center text-white gap-1">
          <Image src={"/WebLogo.png"}
          width={"50"}
          height={"100"}
          className="hidden sm:block"
          />
          <p className="font-extrabold sm:text-3xl lg:text-4xl text-4xl tracking-widest grid place-content-center">
            WEBSTUDIOBONE
          </p>
        </div>
      </nav>
    </>
  );
}
