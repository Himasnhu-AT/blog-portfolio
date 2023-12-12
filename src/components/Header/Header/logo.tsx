import Link from "next/link"
import Image from "next/image"
import ProfileImage from "public/images/profile-img.jpeg"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark">
            <div>
                <Image src={ProfileImage} alt="Logo" className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4" />
            </div>
            <span className="font-bold text-xl">Himasnhu-AT</span>
        </Link>
    )
}

export default Logo