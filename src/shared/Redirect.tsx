
import {FC, useEffect} from 'react';
import { useRouter } from 'next/router';

interface RedirectInterface {
  to: string
  query?: string
}

const Redirect: FC<RedirectInterface> = ({to, query}) => {
  const router = useRouter();

  useEffect(() => {
    router.push({pathname: to, query})
  }, [])

  return null;
}

export default Redirect;
