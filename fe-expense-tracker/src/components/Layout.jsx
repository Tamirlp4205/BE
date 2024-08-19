import { PlusIcon } from 'lucide-react';
import { Style } from './Constants';
import DashboardLogo from './icon/DashboardLogo';
import { Button } from './ui/button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
const styles = {
  ChildrenStyle: 'flex flex-col gap-6 w-[1200px] h-screen',
  ChildrenStyle2: 'flex flex-row gap-6 w-[1200px] h-full',
  contentStyle: 'capitalize cursor-pointer leading-6 text-[#0F172A]',
  contentStyle2:
    'capitalize cursor-pointer leading-6 text-[#0F172A] font-semibold',
};
const content = ['dashboard', 'records'];
export const Layout = ({ children, ChildStyle = false }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6] gap-6">
      <div className="bg-white flex justify-center w-full">
        <div className="flex justify-between items-center py-[16px] w-[1200px]">
          <div className="flex items items-center gap-6">
            <Link href="/dashboard">
              <DashboardLogo />
            </Link>
            {content.map((el, i) => (
              <p
                onClick={() => router.push(`/${el}`)}
                className={styles.contentStyle}
              >
                {el}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Button className={Style.buttonStyle2}>
              <PlusIcon />
              Record
            </Button>
            <Image
              className="w-[40px] h-[40px] rounded-full object-cover"
              src="https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"
              width={40}
              height={40}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
      <div
        className={ChildStyle ? styles.ChildrenStyle2 : styles.ChildrenStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
