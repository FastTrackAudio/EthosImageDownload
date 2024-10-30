"use client"

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/ETHOS-CREATIVE.jpg"
    link.download = "ETHOS-CREATIVE.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-end">
          <button
            onClick={handleDownload}
            className="px-4 py-2 text-white border border-white/20 rounded-md 
                     hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Download Image
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
