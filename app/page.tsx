import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 bg-black">
        {/* Blurred background layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xl scale-110 opacity-50"
          style={{ backgroundImage: "url('/ETHOS-CREATIVE.jpg')" }}
        />

        {/* Main content layer */}
        <main className="relative h-screen w-screen flex items-center justify-center">
          <div
            className="bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/ETHOS-CREATIVE.jpg')",
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </main>
      </div>
    </>
  )
}
