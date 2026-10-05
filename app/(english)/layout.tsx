import '../globals.css';
import '../website.css';
import '../nature.css';
import '../modern.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en-US"><body>{children}</body></html>;
}
