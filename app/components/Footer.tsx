import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {IoIosLocate} from "react-icons/io";
import {Facebook, Instagram, Mail, Phone, Twitter} from "react-feather";
import Image from "next/image";

export default function Component() {
  return (
      <footer className="bg-[#F5F5F5] text-[#333333] py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <Image
                    src="/safari.webp"
                    alt="Kenyan Travel"
                    width={40}
                    height={40}
                    className="mr-2"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                />
                <span className="text-lg font-bold">Kenyan Travel</span>
              </div>
              <p className="text-sm text-[#666666] mb-4">
                Discover the beauty and wonder of Kenya with our curated travel experiences.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#666666] hover:text-[#333333]" prefetch={false}>
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-[#666666] hover:text-[#333333]" prefetch={false}>
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-[#666666] hover:text-[#333333]" prefetch={false}>
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-[#333333]" prefetch={false}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#333333]" prefetch={false}>
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#333333]" prefetch={false}>
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#333333]" prefetch={false}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#333333]" prefetch={false}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-sm text-[#666666] mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex items-center">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white border-[#CCCCCC] rounded-l-md py-2 px-3 text-sm flex-1"
                />
                <Button type="submit" className="bg-[#008000] text-white rounded-r-md py-2 px-4 text-sm">
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-sm text-[#666666] mb-2">
                <Phone className="w-5 h-5 inline-block mr-2" />
                +254 123 456 789
              </p>
              <p className="text-sm text-[#666666] mb-2">
                <Mail className="w-5 h-5 inline-block mr-2" />
                info@kenyantravel.com
              </p>
              <p className="text-sm text-[#666666] mb-2">
                <IoIosLocate className="w-5 h-5 inline-block mr-2" />
                123 Nairobi, Kenya
              </p>
            </div>
          </div>
          <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-[#666666]">&copy; 2024 Kenyan Travel. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-[#666666] hover:text-[#333333]" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#666666] hover:text-[#333333]" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" className="text-[#666666] hover:text-[#333333]" prefetch={false}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
