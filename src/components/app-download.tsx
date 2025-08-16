
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons"

export default function AppDownload() {
  return (
    <section className="px-4 lg:px-6 py-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
          <div className="space-y-6 px-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Easy Way To Manage Your<br /> Finances
            </h2>
            <p className="text-white/70 text-lg">
              Download our mobile app and take control of your finances anywhere, anytime.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-[#3D544D] text-white rounded-xl hover:bg-[#3D544D]/90 flex items-center gap-2">
                <FontAwesomeIcon icon={faApple} className="h-8" />
                App Store
              </Button>
              <Button className="bg-[#3D544D] text-white hover:bg-[#3D544D]/90 flex items-center rounded-xl gap-2">
                <FontAwesomeIcon icon={faGooglePlay} className="h-6" />
                Play Store
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-2/3 hidden lg:block">
            <img
              src="/mockup.png"
              alt="Mobile app preview"
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
