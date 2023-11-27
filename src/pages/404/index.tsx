// @ts-ignore
import { type, type as loop } from '@camwiegert/typical';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};
  #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;
    width: 300px;
  }
`;
const ErrorPage: React.FC = () => {
  useEffect(() => {
    const steps = [
      '404',
      1000,
      'Why are you here?',
      1000,
      'Are you trying to break this website?',
      1000,
      'Or are you trying to find something?',
      1000,
      'Just click your mouse.',
      1000,
      'I will take you to the right place.',
    ];
    type(
      document.querySelectorAll('#title')[0],
      ...steps,
      ...steps,
      ...steps,
      ...steps,
    );
  }, []);

  useEffect(() => {
    //     if click anywhere, go to home page
    document.addEventListener('click', () => {
      window.location.href = '/';
    });
  }, []);
  return (
    <div className={'flex flex-col items-center justify-center h-screen'}>
      <span className={'text-6xl font-bold h-14'} id={'title'}></span>
      <br />
      <span className={'text-3xl font-bold'}>Page Not Found</span>
      <br />
      <span className={'text-3xl font-bold'}>Click Anywhere to Go Back</span>
    </div>
  );
};

export default ErrorPage;
