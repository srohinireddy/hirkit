"use client";

import { Button } from "../ui/button";
import Image from "next/image";

import gLogo from "../../../public/google.png"

export function SocialAuth() {
  return (
    <div className="grid gap-2">
      <Button variant="outline" className="w-full" onClick={() => {}}>
        <Image
          src={gLogo}
          alt="Google"
          width={16}
          height={16}
          className="mr-2"
        />
        Continue with Google
      </Button>
    </div>
  );
}