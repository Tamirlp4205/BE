import { LogoIcon } from '@/components/icon/LogoIcon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useRef, useState } from 'react';

const SignupPage = () => {
  const [id, setId] = useState(null);
  const router = useRouter();
  const BASE_URL = 'http://localhost:8000';
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${BASE_URL}/api/signup`, {
        name: formRef.current[0].value,
        email: formRef.current[1].value,
        password: formRef.current[2].value,
      });
      if (data) {
        setId(data.id); 
        router.push({
          pathname: '/sign-up-step',
          query: { id: data.id },
        });
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="grid grid-cols-2 w-full h-screen">
      <form
        className="flex flex-col justify-center items-center gap-10"
        onSubmit={onSubmit}
        ref={formRef}
      >
        <LogoIcon />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl leading-8 font-semibold text-[#0F172A]">
            Create Geld account
          </h1>
          <p className="text-base font-normal leading-6 text-[#334155]">
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className="w-[384px] flex flex-col gap-4">
          <Input className="p-4 bg-[#F3F4F6] text-[#A3A3A3] h-12" type="text" placeholder="Name" />
          <Input className="p-4 bg-[#F3F4F6] text-[#A3A3A3] h-12" type="email" placeholder="Email" />
          <Input className="p-4 bg-[#F3F4F6] text-[#A3A3A3] h-12" type="password" placeholder="Password" />
          <Button type="submit" className="bg-[#0166FF] text-white h-12" onSubmit={onSubmit}>
            Sign up
          </Button>
        </div>
        <div className="flex items-center">
          <p>Already have an account?</p>
          <Button className="bg-white text-[#0166FF] hover:bg-white" onClick={() => router.push('/sign-in')}>
            Login
          </Button>
        </div>
      </form>
      <div className="bg-[#0166FF]"></div>
    </div>
  );
};



export default SignupPage;