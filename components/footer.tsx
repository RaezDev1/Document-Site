import { CMS_NAME } from '@/lib/constants';
import Container from './container'
import Link from 'next/link'

interface FooterItemOptions {
    href: string;
    name: string;
}

export function FooterItem(options: FooterItemOptions) {
    return (
        <Link href={options.href} className="footerLink text-blurple">{options.name}</Link>
    );
}
const Footer = () => {

  return (
    <footer>
      <Container>
      <hr></hr>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="text-sm pt-5 pr-10">
                    <p className="font-extrabold">©️ 2022 {CMS_NAME}</p>
                        <p className="text-muted">
                            This is a Document made by RaezDev.
                            <br />
                            Anyone can use this document for their own use.
                        </p>
                    </div>

                    <div className="footerCategory pr-10">
                        <div className="text-2xl font-extrabold">Other</div>
                        <FooterItem href="/github" name="GitHub" />
                       <FooterItem href="/discord" name="Discord" />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer