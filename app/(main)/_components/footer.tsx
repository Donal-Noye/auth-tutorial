import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="mt-16 md:mt-24">
      <Container>
        <Separator />
        <div className="flex items-center flex-wrap gap-4 justify-between py-12">
          <Logo />
          <p className="text-tertiary">© 2077 WriteSpace. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}