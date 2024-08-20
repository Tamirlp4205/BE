import { LogoIcon } from '@/components/icon/logoIcon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import axios from 'axios';

const styles = {
  container: 'grid grid-cols-2 w-full h-screen',
  contentContainer: 'flex flex-col justify-center items-center gap-10',
  headTextContainer: 'flex flex-col items-center gap-2',
  header: 'text-2xl leading-8 font-semibold text-[#0F172A]',
  headerp: 'text-base font-normal leading-6 text-[#334155]',
  inputContainer: 'w-[384px] flex flex-col gap-4',
  button: 'w-full rounded-3xl bg-[#0166FF] h-12 text-xl leading-7 font-normal',
  input: 'p-4 items-center bg-[#F3F4F6] text-[#A3A3A3] h-12',
  bottomTextContainer: 'flex items-center',
  routerButton: 'bg-white text-[#0166FF] hover:bg-white',
};

const SigninPage = () => {
  const router = useRouter();
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const { email, password } = Object.fromEntries(formData);
    console.log(email, password);
    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      console.log(response);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.contentContainer} onSubmit={onSubmit} ref={formRef}>
        <LogoIcon />
        <div className={styles.headTextContainer}>
          <h1 className={styles.header}>Welcome Back</h1>
          <p className={styles.headerp}>Welcome back, Please enter your details</p>
        </div>
        <div className={styles.inputContainer}>
          <Input className={styles.input} type="email" name="email" placeholder="Email" />
          <Input className={styles.input} type="password" name="password" placeholder="Password" />
          <Button className={styles.button} type="submit">
            Log in
          </Button>
        </div>
        <div className={styles.bottomTextContainer}>
          <p>Don’t have an account?</p>
          <Button
            className={styles.routerButton}
            onClick={() => router.push('/sign-up')}
          >
            Sign up
          </Button>
        </div>
      </form>
      <div className="bg-[#0166FF]"></div>
    </div>
  );
};

export default SigninPage;
