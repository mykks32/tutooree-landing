import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="flex flex-col pb-10 text-center">
      <div className="max-w-screen-sm mx-auto">
        <Link href="/" className="flex justify-center">
          <Image
            src="/Tutoree.svg"
            alt="Tutoree Logo"
            width={160}
            height={40}
          />
        </Link>
        <p className="text-muted-foreground text-sm mt-3">
          Have any questions or need assistance? Feel free to{" "}
          <span className="underline">contact us</span>.
        </p>
        
        <Separator className="my-6" />

        <p className="text-muted-foreground text-sm">
          © 2024 Tutoree. All rights reserved. Made with ❤️ by MykKs32
        </p>
        
        <p className="text-muted-foreground text-sm mt-3">
          For support, reach us at{" "}
          <a href="mailto:support@tutoree.com" className="text-primary underline">
            support@tutoree.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
