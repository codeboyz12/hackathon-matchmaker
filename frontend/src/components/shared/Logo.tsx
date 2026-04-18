import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center select-none active:scale-95 transition-transform">
      <Image 
        src="/logo.svg" 
        alt="Grand Line Logo" 
        width={140}   // ปรับขนาดความกว้างตามความเหมาะสมของไฟล์คุณ
        height={40}   // ปรับขนาดความสูง
        priority      // ให้โหลดโลโก้ก่อนสิ่งอื่น
        className="object-contain"
      />
    </Link>
  );
}